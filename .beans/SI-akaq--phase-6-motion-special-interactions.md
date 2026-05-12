---
# SI-akaq
title: "Phase 6: Motion & Special Interactions"
status: in-progress
type: feature
priority: normal
created_at: 2026-04-09T12:14:46Z
updated_at: 2026-05-12T16:53:27Z
---

## Phase 6 — Motion & Special Interactions

**Goal:** Implement Framer Motion animations per the Ma spec.

### Page transitions

- Astro view transitions (already enabled) — keep or replace with Framer Motion `AnimatePresence`
- Decision: use Astro view transitions for page-to-page, Framer Motion for component-level

### State animations

- Underline draw on text links: CSS `clip-path` or `scaleX` on `::after` pseudo-element, 200ms
- Arrow translate on CTA links: `translateX(4px)`, 200ms
- Seal mark (logo) rotation: 2-3° on hover, 300ms
- Modal open: opacity + translateY(8px→0), 300ms

### Reduced motion

- All Framer Motion animations use `useReducedMotion()` hook
- Fallback: opacity fade only or no animation

**Critical files:** New `src/components/` motion components
