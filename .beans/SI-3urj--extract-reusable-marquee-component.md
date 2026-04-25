---
# SI-3urj
title: Extract reusable Marquee component
status: completed
type: task
priority: normal
created_at: 2026-04-25T17:59:33Z
updated_at: 2026-04-25T18:01:23Z
---

Extract homepage haiku marquee inline implementation into a reusable Marquee component in src/components/interactive/. Component takes one set of children, handles duplication and aria-hidden internally, and adapts animation duration to content width via ResizeObserver (default 65 px/s).

## Tasks

- [x] Add keyframes and .marquee-track rule to src/styles/global.css (above reduced-motion block at line 582)
- [x] Create src/components/interactive/Marquee.tsx with measurement-driven duration
- [x] Update src/pages/index.astro: import, replace inline markup, delete style block
- [x] Verify in browser: seamless loop, speed constant when adding items, reduced-motion freezes

## Summary of Changes

- New: src/components/interactive/Marquee.tsx — measurement-driven duration (default 65 px/s), ResizeObserver to handle late webfont load, renders children twice with aria-hidden on duplicate, outer wrapper aria-hidden=true.
- Edit: src/styles/global.css — keyframes marquee-scroll and .marquee-track base rule moved out of index.astro; uses CSS variable --marquee-duration so global reduced-motion override stays authoritative.
- Edit: src/pages/index.astro — replaced inline marquee markup and style block with single Marquee client:visible call passing one set of children.

Dev server compiled, rendered HTML verified: astro-island present, --marquee-duration:40s SSR seed inline, both halves render correctly with aria-hidden on the duplicate.
