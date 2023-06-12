import mdx from '@astrojs/mdx';
import preact from '@astrojs/preact';
import prefetch from '@astrojs/prefetch';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { astroImageTools } from 'astro-imagetools';
import { defineConfig } from 'astro/config';
import { remarkReadingTime, remarkWidont } from './src/utils';

// https://astro.build/config
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
	],
});
