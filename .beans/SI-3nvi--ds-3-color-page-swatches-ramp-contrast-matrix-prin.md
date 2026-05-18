---
# SI-3nvi
title: "DS-3: Color page — swatches, ramp, contrast matrix, print spec"
status: completed
type: task
priority: normal
created_at: 2026-05-02T17:57:41Z
updated_at: 2026-05-02T18:11:52Z
parent: SI-p04a
---

Rewrite src/content/design-system/4-color.mdx. New components: ColorRamp.tsx, RatioBar.tsx, ContrastBadge.tsx, ContrastMatrix.tsx (add getContrastRatio util), PrintSpec.tsx. Reuse existing ColorSwatchPrimary×3, ColorStack. Add kanji/principle/group frontmatter.

## Summary of Changes

- Created ColorRamp.tsx (Beni 5-tint scale horizontal strip with hex + role labels)
- Created RatioBar.tsx (70/25/5 stacked bar with legend and Hanko caption)
- Created ContrastBadge.tsx (pill showing ratio + AA/AAA pass/fail, computed from hex)
- Created ContrastMatrix.tsx (5×4 fg/bg grid using ContrastBadge, auto-computed ratios)
- Created PrintSpec.tsx (CMYK/Pantone table for Beni/Sumi/Washi)
- Added getContrastRatio() to src/lib/color-contrast.ts
- Rewrote 4-color.mdx using all new viz components + added kanji/principle/group frontmatter
