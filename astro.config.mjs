import mdx from '@astrojs/mdx';
import preact from '@astrojs/preact';
import prefetch from '@astrojs/prefetch';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { astroImageTools } from 'astro-imagetools';
import webmanifest from 'astro-webmanifest';
import { defineConfig } from 'astro/config';
import serviceWorker from 'astrojs-service-worker';

import { site } from './src/data/site';
import { remarkReadingTime, remarkWidont } from './src/utils';

export default defineConfig({
	site: 'https://www.stefanimhoff.de',
	markdown: {
		shikiConfig: {
			theme: 'nord',
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
		serviceWorker(),
	],
	build: {
		inlineStylesheets: 'auto',
	},
	compressHTML: true,
});
