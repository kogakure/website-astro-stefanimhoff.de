import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
	integrations: [mdx(), svelte(), tailwind()],
});
