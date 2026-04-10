---
# SI-xpz4
title: 'Task: Haiku marquee — scroll-linked to viewport entry/exit'
status: todo
type: task
created_at: 2026-04-10T07:33:21Z
updated_at: 2026-04-10T07:33:21Z
---

The Japanese poem marquee on the homepage should NOT run continuously. Instead it should:
- Start scrolling when the element enters the viewport
- Complete (showing all text) just before it exits the viewport
- Use scroll-driven animation (CSS @scroll-timeline or IntersectionObserver + CSS animation play state)

Preferred approach: CSS scroll-driven animations with animation-timeline: scroll() or view() — supported in modern browsers. Fallback: IntersectionObserver to play/pause the CSS animation.

File: src/pages/index.astro (marquee style block)
