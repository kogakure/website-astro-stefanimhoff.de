## Key Files

- `astro.config.mjs` - Astro configuration, integrations
- `src/styles/global.css` - Tailwind v4 `@theme` tokens, `@utility` blocks, `@variant dark` config
- `src/content.config.ts` - Content collection definitions (11 collections, inlined schemas)
- `src/mdx-components.ts` - Maps HTML elements to custom components (mapping object ~line 95+)
- `src/utils/format-posts.ts` - Content filtering/sorting logic
- `src/utils/remark-reading-time.ts` - Reading time calculation plugin
- `src/utils/remark-widont.ts` - Typography widow prevention
- `src/pages/writing/[slug].astro` - Dynamic route handler for writing posts
