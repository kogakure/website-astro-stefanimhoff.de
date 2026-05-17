---
# SI-e1sq
title: Playwright E2E framework
status: completed
type: feature
priority: normal
created_at: 2026-05-17T12:19:54Z
updated_at: 2026-05-17T13:14:02Z
---

**Goal:** Add Playwright for end-to-end tests covering critical user flows.

### Rationale

Vitest + axe covers units and accessibility. Playwright covers integration: navigation, search (Pagefind), theme toggle, command menu (CMDK), hover preview, lightbox, RSS feed output. These cannot be tested at the unit level.

### Scope

Priority flows:

1. Homepage renders, hero animates (reduced-motion variant), About section visible without JS island
2. Writing page: tag filter works, search results appear
3. Single post: series stepper navigates, TOC links scroll, lightbox opens image
4. Command menu: opens via keyboard (⌘K), navigates, closes on Escape
5. Theme toggle: persists across navigation
6. RSS feed: `/rss.xml` returns valid XML with no empty link labels

### Setup

- `pnpm add -D @playwright/test`
- `playwright.config.ts` — test against `pnpm preview` (built site)
- `tests/e2e/` directory
- Add `test:e2e` script to `package.json`
- CI: add step in `.github/workflows/tests.yml` after build

### Notes

- Run against production build only (not dev server) to catch Astro SSG edge cases.
- Use `webServer` config to auto-start `pnpm preview`.
- No Playwright in pre-commit hook — too slow; CI only.

## Summary of Changes

- `playwright.config.ts` — Chromium only, `pnpm exec astro preview` webServer, `tests/e2e/` dir
- `tests/e2e/homepage.spec.ts` — title, About section (no island dependency), nav links, skip-link focus
- `tests/e2e/writing.spec.ts` — page loads, tag filter (with `networkidle` for client:visible hydration), clear filter
- `tests/e2e/post.spec.ts` — heading/content, series stepper nav, TOC at 1024px viewport (avoids xl pointer-events-none), prev/next nav
- `tests/e2e/command-menu.spec.ts` — opens/closes Escape, navigates Writing (role=option), search mode input; polls `window.openCommandMenu` for client:idle hydration
- `tests/e2e/theme.spec.ts` — toggle persists, dark/light class applied
- `tests/e2e/rss.spec.ts` — /rss.xml valid XML, no empty `[]` anchor text, /rss-haiku.xml valid
- `.github/workflows/tests.yml` — added `e2e` job after build; uploads Playwright report artifact on failure
- `package.json` — added `test:e2e` and `test:e2e:ui` scripts, `@playwright/test` devDependency

All 19 E2E tests green.
