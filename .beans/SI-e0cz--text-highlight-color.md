---
# SI-e0cz
title: Text highlight color
status: completed
type: task
priority: normal
created_at: 2026-04-16T13:05:21Z
updated_at: 2026-04-29T10:29:25Z
parent: SI-ec1h
---

When the user selects text, this is currently some light pink color. But it should be a color that fits into the overall color scheme of the design system.

## Summary of Changes

Changed `::selection` background from `--color-beni-pale` (#F2D5DA, light pink) to `--color-usuzumi` (#C8C8C4, warm diluted ink gray) in `src/styles/global.css`. Added `.dark ::selection` override using `--color-nezumi` bg with `--color-washi` text for proper dark mode support.
