---
# SI-s9mq
title: Inpage search color
status: completed
type: task
priority: normal
created_at: 2026-04-16T13:04:08Z
updated_at: 2026-04-29T13:56:34Z
parent: SI-ec1h
---

The inpage search results should use a color that fits in the overall design system.

Inpage search color `::search-text` – [CSS Tricks](https://www.youtube.com/watch?v=-OYOxjM5lww)

## Summary of Changes

Added `::search-text` and `::search-text:current` pseudo-element rules in `src/styles/global.css` using design system tokens:

- Light mode non-current: `--color-usuzumi` bg (#C8C8C4), `--color-sumi` text
- Light mode current: `--color-hai` bg (#A0A09C), `--color-sumi` text
- Dark mode non-current: `--color-nezumi` bg, `--color-washi` text
- Dark mode current: `--color-usuzumi` bg, `--color-sumi` text
