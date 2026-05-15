---
# SI-fu24
title: A11y unit tests per component (axe-core)
status: completed
type: feature
priority: normal
created_at: 2026-05-15T14:21:25Z
updated_at: 2026-05-15T14:29:27Z
---

Adds vitest-axe-based per-component a11y suites for ui/, content/, interactive/, design-system/, icons/. Astro site/ deferred to follow-up bean.

## Summary of Changes

- Installed `vitest-axe@0.1.0` and `axe-core@4.11.4` (devDependencies).
- Created `src/test/a11y.ts` — registers `toHaveNoViolations` matcher and exports an `axe()` wrapper with `iframes: false` default (cross-frame postMessage fails in happy-dom).
- Updated `src/test/setup.ts` — dynamic-imports the a11y helper inside the DOM-env guard so matchers are available in every happy-dom test.
- Added 5 new a11y suites (113 components total, one `it()` block per component):
  - `src/components/icons/icons.a11y.test.tsx` (2 tests)
  - `src/components/ui/ui.a11y.test.tsx` (40 tests)
  - `src/components/content/content.a11y.test.tsx` (33 tests)
  - `src/components/interactive/interactive.a11y.test.tsx` (11 tests)
  - `src/components/design-system/design-system.a11y.test.tsx` (28 tests)
- Fixed real a11y violation in `src/components/design-system/ReducedMotionDemo.tsx`: added `aria-label="Simulate prefers-reduced-motion"` to the unlabelled `<Switch>`.
- All 358 tests pass.
