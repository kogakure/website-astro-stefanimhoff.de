import mdx from '@astrojs/mdx';
import preact from '@astrojs/preact';
import tailwind from '@astrojs/tailwind';
import { astroImageTools } from 'astro-imagetools';
import { remarkReadingTime } from './src/utils';

import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	markdown: {
		shikiConfig: {
			theme: 'nord',
			langs: [],
			wrap: true,
		},
	},
	integrations: [
		mdx({
			remarkPlugins: [remarkReadingTime],
		}),
		tailwind(),
		preact({ compat: true }),
		astroImageTools,
	],
});
