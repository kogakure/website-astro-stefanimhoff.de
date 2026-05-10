---
# SI-i3ne
title: "Phase 7: Astro Image Optimization"
status: todo
type: epic
priority: normal
created_at: 2026-04-09T12:14:46Z
updated_at: 2026-04-16T13:02:19Z
---

## Phase 7 — Astro Image Optimization

**Goal:** Move from unoptimized images to Astro's image optimization.

### Decision: Static + persistent cache volume

Recommended approach: Keep `output: 'static'` (simpler Docker image, nginx serving) and persist `.cache/astro-images` as a Docker volume in Coolify. This avoids server-side rendering complexity while enabling optimization.

### Steps

1. Configure Astro's `image` service in `astro.config.mjs`:
   ```js
   image: {
     service: sharpImageService(),
     cacheDir: './.cache/astro-images',
   }
   ```
2. Convert `<Image>` in `src/components/` to use `<Image>` from `astro:assets`
3. Update `src/components/mdx/ArticleImage.tsx` — wrap Astro's Image
4. Cover images: use `widths=[400, 800, 1200]` with `sizes` attribute
5. Work images: similar responsive treatment
6. Update `Dockerfile`:
   - Add VOLUME instruction for `.cache/astro-images`
   - Or configure in Coolify's persistent storage section
7. Update `docker-compose.yml` (if exists) with cache volume

**Critical files:** `astro.config.mjs`, `Dockerfile`, `src/components/mdx/ArticleImage.tsx`
