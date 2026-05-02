---
# SI-ddkv
title: "DS-1: Foundations — schema, layout, dynamic route, sidebar nav"
status: completed
type: task
priority: normal
created_at: 2026-05-02T17:57:41Z
updated_at: 2026-05-02T18:04:08Z
parent: SI-p04a
---

Extend designSystem schema in src/content.config.ts (add slug/kanji/principle/group/parent). Delete dormant src/schema/design-system.ts. Create DesignSystemLayout.astro (sidebar+article+right-rail). Create src/pages/design-system/[slug].astro dynamic route. Create src/data/design-system-nav.ts. Retire src/pages/design-system.astro after parity.

## Summary of Changes

- Extended designSystem schema in src/content.config.ts (added slug, kanji, principle, group, parent fields)
- Deleted dormant src/schema/design-system.ts
- Created src/data/design-system-nav.ts (sidebar nav structure with 4 groups, 11 items, kanji glyphs)
- Created src/layouts/DesignSystemLayout.astro (hero strip, 3-col grid: sidebar/article/TOC rail, prev/next stepper)
- Created src/components/site/DesignSystemNav.astro (persistent sidebar with group labels and active state)
- Created src/pages/design-system/[slug].astro (dynamic route over collection, slug derived from filename)
- All 9 existing design-system pages now render at /design-system/<slug>/
- Build clean, all nav/hero/prev-next/TOC elements verified
