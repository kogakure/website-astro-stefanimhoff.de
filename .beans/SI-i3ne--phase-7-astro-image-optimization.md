---
# SI-i3ne
title: "Phase 7: Astro Image Optimization"
status: in-progress
type: epic
priority: normal
created_at: 2026-04-09T12:14:46Z
updated_at: 2026-05-16T19:44:00Z
---

## Phase 7 — Astro Image Optimization

**Goal:** Move from unoptimized images to Astro's image optimization.

The previous website used only unoptimized images, because the image generation on the VPS took far over 20 minutes and was not feasable. I use a self-hosted Coolify instance on a Hetzner VPS (4 vCPU, 8 GB RAM, 40 GB Disk) and the future solution should either cache the image directory and/or generate images on the fly when the user first visits a page to prevent long build times.

---

## Phase 7a — Covers + Work ✅ COMPLETE (2026-05-16)

**Scope:** Writing cover images (95 files) and work images (20 files).

### Changes made

- [x] Moved `public/assets/images/cover/` → `src/assets/images/cover/` (99 files via git mv)
- [x] Moved `public/assets/images/work/` → `src/assets/images/work/` (20 files via git mv)
- [x] `src/content.config.ts` — writing + work schemas use `image()` helper; wrapped in `({ image }) =>`
- [x] Bulk-rewrote `cover:` frontmatter paths in 95 writing MDX files (relative paths 3 levels deep)
- [x] Bulk-rewrote `image.src`/`images[].src` frontmatter paths in 11 work MDX files
- [x] Created `src/components/site/CoverImage.astro` — wraps `<Image>` with AVIF/WebP responsive output; `widths=[400,800,1200,1600,2400]`, `fetchpriority="high"`, `loading="eager"`
- [x] `src/pages/writing/[slug].astro` — swapped raw `<img>` for `<CoverImage>`; derive OG URL from cover basename (not path string replace)
- [x] Created `src/components/site/work/WorkImageOptimized.astro` — calls `getImage()`, renders React `WorkImage` with resolved `src`/`srcset`/`sizes`/`width`/`height`
- [x] `src/components/site/work/WorkImage.tsx` — interface extended with `srcset`, `sizes`, `width`, `height`; renders `<img srcSet={srcset} sizes={sizes}>`
- [x] All 7 WorkItem variant `.astro` files — swapped `WorkImage client:visible` → `WorkImageOptimized` with correct `sizes` per layout variant
- [x] `astro.config.mjs` — explicit `image.service` sharp entrypoint
- [x] `Dockerfile` — BuildKit `--mount=type=cache,id=astro-assets,target=/app/node_modules/.astro` on build RUN
- [x] `scripts/og-generate.cjs` + `scripts/preview-generate.cjs` — input path updated to `./src/assets/images/cover/`
- [x] `src/pages/rss.xml.js` — derive OG/preview URLs from `cover.src` basename (was string startsWith check)
- [x] `src/utils/preview-url.ts` — accepts `ImageMetadata | string | undefined`
- [x] `src/components/interactive/WritingPage.tsx` — `PostItem.cover` typed `ImageMetadata | string`
- [x] `src/pages/libertarianism.astro` — ESM import + `<Image>` with responsive sizes
- [x] `src/pages/design-system/index.astro` — ESM import for cover image
- [x] Created `docs/coolify-image-cache.md` — BuildKit cache mount instructions + Coolify Persistent Storage fallback

### Build results

- Cold build: 122 pages, ~27s, 500+ image variants generated (AVIF + WebP, 5 widths each)
- HTML output: `<picture>` with AVIF + WebP sources, `srcset` multiple widths, `fetchpriority="high"`, `view-transition-name` preserved on writing covers

### Not changed (Phase 7b scope)

- `src/components/content/Image.tsx`, `MarkdownImage.tsx`, `Figure.tsx`
- `public/assets/images/posts/` (155+ MDX in-body image calls)
- `public/assets/images/{books,audiobooks,podcasts,videos,template,favicons}/`

---

## Phase 7b — MDX In-Body Images (TODO)

**Scope:** `<Image>`, `<MarkdownImage>`, `<Figure>` inside MDX content; migrate `public/assets/images/posts/` → `src/assets/images/posts/`.

- [ ] Audit all `<Image src="...">` calls in MDX files (155+ uses)
- [ ] Migrate `public/assets/images/posts/` → `src/assets/images/`
- [ ] Update `Image.tsx`, `MarkdownImage.tsx`, `Figure.tsx` to accept `ImageMetadata`
- [ ] Rewrite MDX frontmatter/body paths for posts images
- [ ] Verify build + warm cache

---

## Coolify Cache Configuration

See `docs/coolify-image-cache.md` for full instructions.

**Primary:** BuildKit cache mount on `RUN pnpm build` in Dockerfile (already implemented).

**Fallback:** Coolify dashboard → Application → Storages → Add Storage → Volume Mount → name `astro-image-cache` → mount path `/app/node_modules/.astro`.
