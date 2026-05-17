---
# SI-l1kq
title: "Phase 8: Routing & Redirects"
status: completed
type: epic
priority: normal
created_at: 2026-04-09T12:14:47Z
updated_at: 2026-05-16T19:08:00Z
---

## Phase 8 — Routing & Redirects

**Goal:** Update nginx.conf and Astro routing for URL changes.

### Steps

1. Add redirects in `nginx.conf`:

   ```nginx
   # Journal → Writing
   rewrite ^/journal/(.*)$ /writing/$1 permanent;
   rewrite ^/journal$ /writing permanent;

   # Projects → Work
   rewrite ^/projects/(.*)$ /work permanent;
   rewrite ^/projects$ /work permanent;

   # Tag pages → Writing with filter
   rewrite ^/tag/(.*)$ /writing?tag=$1 permanent;

   # Haiku individual → Haiku listing
   rewrite ^/haiku/(.*)$ /haiku permanent;
   ```

2. Update `@astrojs/sitemap` excludes list
3. Update all internal links in content (search for `/journal/`, `/projects/`)
4. Update RSS feed URLs
5. Update schema JSON-LD breadcrumbs

**Critical files:** `nginx.conf`, `astro.config.mjs`, RSS feed generators

## Summary of Changes

- **nginx.conf**: Added slug-preserving `/journal/(.*)` → `/writing/$1` rewrite; new redirect blocks for `/projects/*` → `/work`, `/tag/*` → `/writing?tag=*`, `/haiku/<slug>` → `/haiku`
- **src/data/**: Renamed `journal/` → `writing/`; updated import paths in 2 MDX files
- **MDX content**: Fixed 7 files with stale `/journal/`, `/projects/*`, `/haiku/<slug>` links; removed 3 dead project-specific links from new-website-2020-inspiration.mdx
- **HaikuItem.tsx**: Added `scroll-mt-20` for anchor scroll offset; `id` passes through `...props` (HTMLAttributes)
- **haiku.astro**: Pass `id={`haiku-${slug}`}` to each HaikuItem for anchor targeting
- **rss.xml.js + rss-haiku.xml.js**: Updated haiku item links from `/haiku/<slug>/` to `/haiku/#haiku-<slug>`
- **writing/[slug].astro**: Added `BreadcrumbList` JSON-LD (Home → Writing → Post) alongside existing Article schema
- **CommandMenu.tsx**: Updated mock haiku URL from `/haiku/morning-mist/` to `/haiku/`
- Build: 122 pages, clean
