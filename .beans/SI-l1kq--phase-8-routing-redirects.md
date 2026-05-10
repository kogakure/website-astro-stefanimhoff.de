---
# SI-l1kq
title: "Phase 8: Routing & Redirects"
status: todo
type: epic
priority: normal
created_at: 2026-04-09T12:14:47Z
updated_at: 2026-04-16T13:02:23Z
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
