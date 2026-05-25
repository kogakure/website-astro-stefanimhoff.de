## Build Features

Configured in `astro.config.mjs`:

- MDX with custom remark plugins (reading time, widont)
- Pagefind integration for search
- Service worker (caches fonts/images)
- Sitemap generation (excludes /cv/, /imprint/)
- Web manifest for PWA support
- View transitions (via `<ViewTransitions />` component in `src/layouts/BaseLayout.astro`)
