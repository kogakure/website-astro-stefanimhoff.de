---
# SI-xh46
title: 'Task: Implement CSS grid layout per design spec'
status: completed
type: task
priority: normal
created_at: 2026-04-10T07:33:15Z
updated_at: 2026-04-10T07:46:34Z
---

The design uses a CSS grid layout visible in specs/designs/Homepage - Grid-Spacing.webp. The grid should be applied to the main page wrapper to align content columns consistently across all pages.

From the grid spec image:
- 32px margins on left and right
- Content columns with consistent gutter spacing
- Section content (label + body) aligned to grid columns

The current layout uses ad-hoc flexbox/padding. Replace the outer page content wrapper in BaseLayout or page-level containers with a proper CSS grid using the design token --spacing-column (6.9375vw) and --spacing-gap values.

Reference: specs/designs/Homepage - Grid-Spacing.webp, specs/design-system/6 - Layout and Grids.md
