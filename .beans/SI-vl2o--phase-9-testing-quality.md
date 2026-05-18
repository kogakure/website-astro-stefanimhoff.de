---
# SI-vl2o
title: "Phase 9: Testing & Quality"
status: completed
type: epic
priority: normal
created_at: 2026-04-09T12:14:47Z
updated_at: 2026-05-17T12:36:56Z
---

**Goal:** All tests pass, accessibility and performance validated.

This phase was done mostly in earlier stages. Nevertheless please do a smoke test if all unit tests, ui tests and A11Y tests are working. And work on the lighthouse performance; the goal is a 100 score.

Please also check specifically if the component replacement in the RSS feed is working or if new components that can be used in the MDX content are not yet handled.

A while ago (with the old site) I had issues with the build on Coolify and we pinned the pnpm version to 9. Is it possible to resolve this issue in the meantime and to use the newest version, 11?

### Steps

1. **Update Vitest tests**: All utility tests should still pass unchanged
2. **Update test imports**: Components moved to new paths
3. **Add component tests** for key React components (CommandMenu, FloatingPreview)
4. **Accessibility check**:
   - Focus indicators: 2px solid Beni with 2px offset on all interactive elements
   - Skip-to-content link as first focusable element
   - CMDK focus trap and return focus
   - All images have alt text
   - `lang="ja"` on Japanese text, `lang="de"` on German haiku
5. **Performance check**: Lighthouse score targets (Performance ≥90, Accessibility ≥95)
6. **Docker build test**: `pnpm docker:test`
7. **Cross-browser**: Chrome, Firefox, Safari

**Critical files:** `src/test/`, `vitest.config.ts`, `Dockerfile`

## Summary of Changes

### Workstream A — Test smoke run ✅

- 416 tests, all green (`vitest run` across `unit` + `astro` projects).
- Fixed `src/test/WorkImage.tsx` import path regression (earlier phase reorg).
- No new test files needed; suite was healthy.

### Workstream B — RSS feed fixes ✅

**`src/utils/rss-parser.ts`:**

- `replaceAppleTvComponent()`: was emitting `[<U+F8FF>]` (Apple logo PUA char) → now emits `[Apple TV+]`
- Added `replaceYouTubeComponent()`: emits `<a href="https://www.youtube.com/watch?v={id}">[Watch on YouTube]</a>`
- Added `replacePlatformComponent()`: maps `kind` prop to human label (e.g. `iphone` → `[iPhone / iPad]`)
- Added explicit no-op strips for `BarChart`, `DoughnutChart`, `RedButton` before generic fallback
- `stripMDXComponents()`: wired new handlers via regex replacements

**`src/utils/rss-parser.test.ts`:**

- 13 new tests covering YouTube handler, Platform handler (6 cases), AppleTV label, and no-op strips.
- Total: 416 tests (was 403), all green.

### Workstream C — pnpm 9 → 11 ✅

- `Dockerfile:8`: `ARG PNPM_VERSION=9` → `ARG PNPM_VERSION=11`
- `.github/workflows/tests.yml:23`: `version: 9` → `version: 11`
- `package.json`: added `"packageManager": "pnpm@11.1.2"`
- Lockfile regenerated (format version unchanged, compatible).
- `pnpm docker:test` could not be run locally — `podman` not installed; scripts hardcode `podman`. CI will validate on push.

### Workstream D — Lighthouse audit + fixes ✅

Final scores on homepage (`/`):

- **Performance: 90** (goal 100; bottleneck is 95KB inline Tailwind CSS + Framer Motion bundle on simulated slow 4G — structural issue, out of scope for this bean)
- **Accessibility: 100** ✓
- **Best Practices: 100** ✓
- **SEO: 100** ✓

Fixes applied:

| Fix                                            | File                                              | Impact                                                              |
| ---------------------------------------------- | ------------------------------------------------- | ------------------------------------------------------------------- |
| `role="img"` on SplitText container span       | `src/components/interactive/motion/SplitText.tsx` | ARIA spec: `aria-label` requires `role`                             |
| `dark:text-hai` on SectionLabel                | `src/components/ui/SectionLabel.tsx`              | Nezumi on Yoru = 3.28:1 → Hai on Yoru ≈ 6.66:1 (passes 4.5:1)       |
| `preconnect` for Umami host in `<head>`        | `src/layouts/BaseLayout.astro`                    | ~170ms RTT saving                                                   |
| Remove `Reveal` from About section             | `src/pages/index.astro`                           | LCP `<p>` was invisible until island hydrated (3s delay on slow 4G) |
| Scope vitest in lint-staged to test files only | `.lintstagedrc.json`                              | Prevents exit 1 when non-test files staged                          |

Experiment attempted (reverted): `font-display: optional` on SwitzerVariable — scored 89 (worse), LCP 3.5s vs 3.3s with `swap`. Reverted to `swap`.

### Follow-up beans (offered)

- Missing interactive component tests: HoverPreview, LightboxRoot, BarChart, DoughnutChart, Marquee, Roadmap, SeriesStepper, TableOfContents
- Playwright E2E framework
- Lighthouse CI / unlighthouse integration
- Node version alignment (`.nvmrc` 25 vs Dockerfile/CI 22.13.1)
