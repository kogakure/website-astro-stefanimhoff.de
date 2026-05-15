---
# SI-xskn
title: A11y axe coverage for Astro site/ components
status: completed
type: feature
priority: normal
created_at: 2026-05-15T14:29:27Z
updated_at: 2026-05-15T18:29:00Z
---

Unit tests for the 21 Astro-only components in site/. Vitest cannot natively render .astro files. Options: (a) Playwright + @axe-core/playwright against pnpm preview, (b) Astro Container API to render to HTML strings + axe in happy-dom. Blocked until approach is decided.
