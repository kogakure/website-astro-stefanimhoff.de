import mdx from '@astrojs/mdx';
import preact from '@astrojs/preact';
import prefetch from '@astrojs/prefetch';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { astroImageTools } from 'astro-imagetools';
import pagefind from 'astro-pagefind';
import webmanifest from 'astro-webmanifest';
import { defineConfig } from 'astro/config';
import serviceWorker from 'astrojs-service-worker';
import { site } from './src/data/site';
import { remarkReadingTime, remarkWidont } from './src/utils';

import customTheme from './shiki-theme.json';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.stefanimhoff.de',
	markdown: {
		shikiConfig: {
			theme: customTheme,
			langs: [],
			wrap: true,
		},
	},
	integrations: [
		mdx({
			remarkPlugins: [remarkReadingTime, remarkWidont],
		}),
		tailwind(),
		preact({
			compat: true,
		}),
		astroImageTools,
		prefetch(),
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
					src: '/assets/images/branding/favicons/favicon-192.png',
					sizes: '192x192',
					type: 'image/png',
				},
				{
					src: '/assets/images/branding/favicons/favicon-512.png',
					sizes: '512x512',
					type: 'image/png',
				},
			],
			short_name: site.title,
			description: site.description,
			start_url: '/',
			theme_color: '#e7e6e4',
			background_color: '#e7e6e4',
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
	compressHTML: true,
	build: {
		inlineStylesheets: 'always',
		client: './dist',
	},
});
