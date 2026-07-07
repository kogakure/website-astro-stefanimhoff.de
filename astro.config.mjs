import { satteri } from '@astrojs/markdown-satteri';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import pagefind from 'astro-pagefind';
import webmanifest from 'astro-webmanifest';
import { defineConfig, passthroughImageService } from 'astro/config';
import serviceWorker from 'astrojs-service-worker';
import { site } from './src/data/site';
import { remarkHeadingIds, remarkMark, remarkReadingTime, remarkWidont } from './src/utils';

import customTheme from './ma-theme.json';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.stefanimhoff.de',
	image: {
		service: passthroughImageService(),
	},
	markdown: {
		// GFM (tables, footnotes, task lists) and smart punctuation are handled
		// by Sätteri's built-in `features` — smartPunctuation stays off to match
		// the previous pipeline's behaviour (no remark-smartypants was wired in).
		processor: satteri({
			mdastPlugins: [remarkMark, remarkReadingTime, remarkWidont],
			// Must run before Sätteri's built-in heading-ids plugin (which it
			// does — Sätteri appends its own after user hastPlugins) so the
			// normalized id wins. See remark-toc.ts for why this is needed.
			hastPlugins: [remarkHeadingIds],
			features: { gfm: true, smartPunctuation: false },
		}),
		// shikiConfig lives on the shared markdown config, independent of the
		// processor — unchanged from the previous unified() setup.
		shikiConfig: {
			theme: customTheme,
			langs: [],
			wrap: true,
		},
	},
	integrations: [
		mdx(),
		react(),
		pagefind(),
		sitemap({
			filter: (page) =>
				page !== 'https://www.stefanimhoff.de/cv/' &&
				page !== 'https://www.stefanimhoff.de/imprint/',
		}),
		webmanifest({
			name: site.title,
			icons: [
				{
					src: '/assets/images/favicons/favicon-192.png',
					sizes: '192x192',
					type: 'image/png',
				},
				{
					src: '/assets/images/favicons/favicon-512.png',
					sizes: '512x512',
					type: 'image/png',
				},
			],
			short_name: site.title,
			description: site.description,
			start_url: '/',
			display: 'standalone',
		}),
		serviceWorker({
			workbox: {
				globDirectory: 'dist/',
				globPatterns: ['**/*.woff2'],
				swDest: 'dist/service-worker.js',
				sourcemap: false,
				cleanupOutdatedCaches: true,
				clientsClaim: true,
				skipWaiting: true,
				runtimeCaching: [
					{
						urlPattern: /\.(?:jpg|png|svg|gif|webp|avif)$/,
						handler: 'CacheFirst',
						options: {
							cacheName: 'images',
							expiration: {
								maxEntries: 50,
								maxAgeSeconds: 60 * 60 * 24 * 365,
							},
						},
					},
				],
			},
		}),
	],
	vite: {
		plugins: [
			tailwindcss(),
			{
				name: 'pagefind-dev-stub',
				apply: 'serve',
				resolveId(id) {
					if (id === '/pagefind/pagefind.js') return '\0pagefind-stub';
				},
				load(id) {
					if (id === '\0pagefind-stub')
						return 'export const init = async () => {}; export const search = async () => ({ results: [] });';
				},
			},
		],
		build: {
			rollupOptions: {
				external: ['/pagefind/pagefind.js'],
			},
		},
	},
	build: {
		inlineStylesheets: 'always',
		client: './dist',
	},
});
