---
# SI-vqr1
title: "Phase 5H: Writing Detail Page Redesign"
status: in-progress
type: feature
priority: normal
created_at: 2026-04-25T14:56:34Z
updated_at: 2026-04-30T10:11:40Z
---

The detail page for each blog post needs to be redesigned according to the spec sheet in ./specs/designs/

- Writing - Post (cover).webp
- Writing - Post (cover) - grid.webp
- Writing - Post (no cover).webp
- Writing - Post (no cover) - grid.webp

Currently the grid is wrong, the headline and subheadline is wrong, the article headlines use the wrong font, the tags can be removed, the meta data should go in the other sidebar. I want to stop using images that go out of the grid (variants "fullsize" and "wide") and instead develop later a zoom feature for article images.

Additionally, all internal components need to be adjusted to fit the new design system.

## Changes Completed (Phase 1: Grid, Layout, Components)

- [x] Blog title: changed from text-9 (144px) to text-8 (96px) Boska with tracking-[-0.15em]
- [x] Subtitle: upgraded from body text to text-5 (40px) Switzer with tracking-[-0.05em] and Hai color
- [x] Article H2: removed font-display (Boska), now uses Switzer with letter-spacing -0.05em
- [x] Article H3: fixed letter-spacing to -0.02em
- [x] Legacy shibui color tokens replaced with Ma tokens throughout (border, inline code, hr, footnotes, prev/next nav)
- [x] Image/Figure components: wide/fullsize variants silently removed (CSS classes never existed; props kept for backward compat)
- [x] PageTitle: added titleClass prop for per-page title customization

## Still Pending (separate subtickets)

- [ ] SI-mebe: Table of Contents in sidebar
- [ ] SI-rj73: Next/Previous links redesign
