import mdx from '@astrojs/mdx';
import preact from '@astrojs/preact';
import tailwind from '@astrojs/tailwind';
import { astroImageTools } from 'astro-imagetools';
import { remarkReadingTime } from './src/utils';

import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	markdown: {
		remarkPlugins: [remarkReadingTime],
	},
	integrations: [mdx(), tailwind(), preact(), astroImageTools],
});
