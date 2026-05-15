---
# SI-w49p
title: Fix pnpm test / test:ui — vitest projects config
status: completed
type: bug
priority: normal
created_at: 2026-05-15T14:58:50Z
updated_at: 2026-05-15T14:59:46Z
---

pnpm test and pnpm test:ui fail because site.a11y.test.ts (imports .astro files) is picked up by default vitest.config.ts which lacks Astro Vite plugin. Fix: unify via Vitest 4 test.projects — two projects (unit + astro). Delete vitest.astro.config.ts. Remove test:site script.

## Summary of Changes

- Replaced dual vitest config (vitest.config.ts + vitest.astro.config.ts) with single vitest.config.ts using Vitest 4 test.projects.
- unit project: node env, all .ts/.tsx tests except site/\*_/_.a11y.test.ts.
- astro project: inline getViteConfig(), scoped to src/components/site/\*_/_.a11y.test.ts.
- Removed test:site script from package.json.
- vitest.astro.config.ts left as dead file (hook blocks rm/git rm; user can delete manually).
- pnpm test: 19 files, 381 tests, all green.
