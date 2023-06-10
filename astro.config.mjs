import mdx from '@astrojs/mdx';
import preact from '@astrojs/preact';
import tailwind from '@astrojs/tailwind';
import { astroImageTools } from 'astro-imagetools';
import { remarkReadingTime, remarkWidont } from './src/utils';
import { defineConfig } from 'astro/config';

import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: 'nord',
      langs: [],
      wrap: true
    }
  },
  integrations: [mdx({
    remarkPlugins: [remarkReadingTime, remarkWidont]
  }), tailwind(), preact({
    compat: true
  }), astroImageTools, prefetch()]
});