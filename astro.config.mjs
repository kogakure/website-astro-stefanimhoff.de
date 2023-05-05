import image from '@astrojs/image';
import mdx from '@astrojs/mdx';
import preact from '@astrojs/preact';
import tailwind from '@astrojs/tailwind';

import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	integrations: [
		mdx(),
		tailwind(),
		preact(),
		image({
			serviceEntryPoint: '@astrojs/image/sharp',
		}),
	],
});
