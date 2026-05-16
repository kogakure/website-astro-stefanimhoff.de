---
# SI-5mp9
title: Analytics strategy with Umami
status: completed
type: epic
priority: normal
created_at: 2026-04-16T13:09:24Z
updated_at: 2026-05-16T18:44:24Z
---

The website already uses Umami for analytics, but it needs a more thought through strategy to make the most of it. The task involves looking at the current implementation, identifying gaps in the data collection, and setting up a comprehensive analytics strategy that aligns with the website's goals. This includes defining key performance indicators (KPIs) and setting up custom events. The goal is to leverage Umami to gain insights into user behavior and make informed decisions to improve the website and its content.

## Summary of Changes

Completed via SI-tijj. See that ticket for full detail. The Umami implementation now has:

- A documented analytics strategy (docs/analytics.md) with goals, KPIs, privacy principles, and validation guide.
- A privacy-preserving event taxonomy: search queries bucketed (length + result count), never raw text.
- A safe JS helper (src/utils/analytics.ts) with 17 passing unit tests.
- Targeted custom events on all major React interactive surfaces (CommandMenu, WritingPage, TOC, SeriesStepper, PrevNext, LatestEssays, homepage CTAs, RSS).
