---
# SI-9q52
title: Fix haiku marquee scroll-driven animation timing
status: todo
type: bug
priority: normal
created_at: 2026-04-10T09:11:21Z
updated_at: 2026-04-25T15:31:02Z
parent: SI-to2g
---

The scroll-driven animation doesn't work as well as thought. I want to change it back to the earlier implementation using a slow smooth animation band that continuesly scrolls the text through the viewport. There should be no jumps in the animation when the one quote ends and the next one starts. At the moment, the animation is build to just show the same quote, but it should work with different quote components as well. If there are multiple quote components, it should cycle through them and then start again with the first one.
