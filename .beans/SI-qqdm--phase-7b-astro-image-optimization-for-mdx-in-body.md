---
# SI-qqdm
title: "Phase 7b: Astro Image Optimization for MDX in-body images"
status: todo
type: feature
created_at: 2026-05-17T13:14:26Z
updated_at: 2026-05-17T13:14:26Z
---

## Context

Phase 7a is complete (SI-i3ne, closed 2026-05-17). This ticket covers Phase 7b: migrating in-body MDX images to Astro's native image optimization.

**Decision trigger:** Check build times after the relaunch PR merges. If the BuildKit cache mount (`Dockerfile RUN --mount=type=cache,id=astro-assets,...`) keeps warm-build times under ~2 minutes, proceed with Phase 7b. If too slow, re-evaluate the Coolify Persistent Storage fallback first (note: that fallback mounts at runtime, not during `docker build` — verify before relying on it; see `docs/coolify-image-cache.md`).

---

## Already accomplished (Phase 7a)

- `public/assets/images/cover/` → `src/assets/images/cover/` (99 files, git mv)
- `public/assets/images/work/` → `src/assets/images/work/` (20 files, git mv)
- `src/content.config.ts` — writing + work schemas use `image()` helper
- 95 writing MDX cover frontmatter paths bulk-rewritten
- 11 work MDX image frontmatter paths bulk-rewritten
- `src/components/site/CoverImage.astro` — wraps `<Image>`, AVIF/WebP, 5 widths, fetchpriority
- `src/pages/writing/[slug].astro` — uses `<CoverImage>`, OG URL from cover basename
- `src/components/site/work/WorkImageOptimized.astro` — calls `getImage()`, passes resolved props to React `WorkImage`
- `src/components/site/work/WorkImage.tsx` — extended with srcset/sizes/width/height
- All 7 WorkItem variant `.astro` files use `WorkImageOptimized`
- `astro.config.mjs` — explicit `image.service` sharp entrypoint
- `Dockerfile` — BuildKit `--mount=type=cache,id=astro-assets,target=/app/node_modules/.astro`
- `scripts/og-generate.cjs` + `scripts/preview-generate.cjs` — input paths updated
- `docs/coolify-image-cache.md` — cache strategy documentation

---

## Outstanding work (Phase 7b)

- [ ] Audit all `<Image src="...">` calls in MDX files (155+ uses in `src/content/writing/`)
- [ ] Migrate `public/assets/images/posts/` → `src/assets/images/posts/`
- [ ] Update `src/components/content/Image.tsx`, `MarkdownImage.tsx`, `Figure.tsx` to accept `ImageMetadata`
- [ ] Rewrite MDX body image paths (relative imports or glob loader approach)
- [ ] Verify build time + warm cache validity
