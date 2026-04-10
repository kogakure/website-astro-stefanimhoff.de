---
# SI-e0w1
title: 'Phase 5A: Base Layout — Header, Footer & Page Structure'
status: completed
type: feature
priority: normal
created_at: 2026-04-09T21:31:25Z
updated_at: 2026-04-09T21:42:00Z
---

Redesign the base layout to match the new design system. This is the foundation all other pages build on.

Reference designs: `specs/designs/Homepage.webp`, `specs/designs/Homepage - Grid-Spacing.webp`

## Tasks

### Header (PageHeader.astro)
- [x] Logo: circular Japanese icon (top-left), links to homepage
- [x] Nav links: About · Work · Writing (centered dot separators, right-aligned)
- [x] Search icon (CMDK trigger) + theme toggle icon (right side)
- [x] Fixed/sticky header with 32px horizontal padding
- [x] Active page highlighted in nav

### Footer (PageFooter.astro)
- [x] Centered social icons: X (Twitter), Instagram, GitHub
- [x] Remove old footer content (copyright text, links)
- [x] Adequate top padding before icons

### Base page structure (BaseLayout.astro)
- [x] Remove `h-screen` from html — let page scroll naturally
- [x] Max-width container with 32px side margins (no inner grid needed)
- [x] Body background: shibui-100 light / shibui-900 dark (already set)
- [x] Consistent vertical rhythm via spacing tokens

### Two-column section layout pattern
- [x] Create reusable `PageSection.astro` or CSS pattern: left label (uppercase, muted, ~160px) + right content (flex-1)
- [x] Used across: About, Work, Writing labels on homepage and inner pages
- [x] Section label: text-2 uppercase tracking-widest text-nezumi

## Summary of Changes

Redesigned the base layout to match the new design system:
- **PageHeader**: Simplified from complex grid to flex layout with logo left, nav+icons right. Nav uses CSS `::before` pseudo-elements for dot separators. Active page detected via `Astro.url.pathname` and shown with underline.
- **PageFooter**: Replaced complex multi-section footer with simple centered X/Instagram/GitHub icons.
- **BaseLayout**: Removed `h-screen` constraints so pages scroll naturally.
- **MainNavigation**: Added dot separators and active state detection.
- **PageSection.astro**: New reusable two-column layout component (label + content).
- **navigation.json**: Fixed order to About, Work, Writing.
