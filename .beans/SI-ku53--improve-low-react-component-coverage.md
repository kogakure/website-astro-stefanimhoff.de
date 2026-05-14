---
# SI-ku53
title: Improve low React component coverage
status: completed
type: task
priority: normal
created_at: 2026-05-14T13:25:23Z
updated_at: 2026-05-14T13:30:28Z
---

Run coverage and add focused tests for React components with weak coverage after SI-gr3h.

## Checklist

- [x] Run pnpm test:coverage and identify weakly covered components
- [x] Add focused tests for the lowest-value gaps
- [x] Re-run coverage and type checks
- [x] Summarize results

## Summary of Changes

- Re-ran pnpm test:coverage and identified the weakest React component coverage in DoughnutChart, HoverPreview, CommandMenu, EasingCurvePlot, FocusRingDemo, and MotionDemo.
- Added focused tests for Recharts tooltip/legend paths, hover preview lifecycle branches, command menu keyboard/open-search branches, and design-system animation/focus interactions.
- Improved overall coverage from 84.38% statements / 86.74% lines to 89.53% statements / 92.03% lines.
- Notable component gains: DoughnutChart 46.66% → 86.66% statements, HoverPreview 59.49% → 88.6%, CommandMenu 69.72% → 79.81%, EasingCurvePlot 69.23% → 98.07%, FocusRingDemo 73.68% → 94.73%, MotionDemo 77.77% → 97.22%.

## Validation

- pnpm test:coverage
- pnpm exec tsc --noEmit
