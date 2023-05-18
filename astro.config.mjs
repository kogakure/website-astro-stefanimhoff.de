import image from '@astrojs/image';
import mdx from '@astrojs/mdx';
import preact from '@astrojs/preact';
import tailwind from '@astrojs/tailwind';
import { astroImageTools } from 'astro-imagetools';

import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	integrations: [
		mdx(),
		tailwind(),
		preact(),
		astroImageTools,
		image({
			serviceEntryPoint: '@astrojs/image/sharp',
		}),
	],
});
