---
# SI-9q52
title: Fix haiku marquee scroll-driven animation timing
status: todo
type: bug
created_at: 2026-04-10T09:11:21Z
updated_at: 2026-04-10T09:11:21Z
---

The scroll-driven animation for the Japanese haiku marquee band on the homepage is not behaving correctly. The start and end points of the animation need to be tuned.

## Problems

- Start position is off — animation begins too early or too late relative to the marquee entering the viewport
- End position is off — animation finishes too late (after the visible content ends)

## Desired behavior

- Animation should start when the marquee is roughly 75% entered from the bottom of the viewport
- Animation should finish (show last character) near the bottom of the page content, not at absolute scroll 100%
- No repeat/loop

## Current implementation

Uses `scroll(root block)` timeline with JS-computed `animation-range` set via `track.style.animationRange`. The start % is computed from `getBoundingClientRect` but may be unreliable due to layout timing.

## Fix in

`src/pages/index.astro` — revisit during Phase 6 (Motion & Special Interactions, SI-akaq)
