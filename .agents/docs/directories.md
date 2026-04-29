## Key Directories

```
src/
├── components/     # Reusable UI components (Astro/React)
├── content/        # Content collections (journal/, haiku/, projects/)
├── schema/         # Zod schemas for content validation (src/schema/*.ts)
├── layouts/        # Page templates (BaseLayout → specialized layouts)
├── pages/          # File-based routing + dynamic [...slug].astro
├── utils/          # Pure functions (formatPosts, sortByDate, remark plugins)
├── data/           # Site config, navigation, colors (src/data/site.ts)
├── icons/          # SVG icons (generated from source via icons:generate)
├── styles/         # Global CSS
└── text/           # Static page content

Root scripts: *.cjs files for asset generation (OG images, thumbnails, icons)
```
