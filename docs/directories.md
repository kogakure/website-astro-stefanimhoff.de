## Key Directories

```
src/
├── assets/         # Source images for Astro image optimization (covers, work)
├── components/     # Reusable UI components (Astro/React)
├── content/        # Content collections (writing/, haiku/, work/, books/, etc.)
├── data/           # Site config, navigation, colors (src/data/site.ts)
├── layouts/        # Page templates (BaseLayout → specialized layouts)
├── lib/            # Shared utilities (cn(), etc.)
├── pages/          # File-based routing
├── styles/         # Global CSS (Tailwind v4 @theme + @utility tokens)
├── test/           # Test setup and shared fixtures
└── utils/          # Pure functions (formatPosts, sortByDate, remark plugins)

scripts/            # Asset generation scripts (OG images, image conversion)
Root:               # plopfile.cjs only (no *.cjs generators at root)
```
