---
# SI-e1sq
title: Playwright E2E framework
status: todo
type: feature
priority: normal
created_at: 2026-05-17T12:19:54Z
updated_at: 2026-05-17T12:19:54Z
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
