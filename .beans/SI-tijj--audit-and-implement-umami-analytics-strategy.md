---
# SI-tijj
title: Audit and implement Umami analytics strategy
status: completed
type: task
priority: normal
created_at: 2026-05-16T18:07:42Z
updated_at: 2026-05-16T18:44:16Z
parent: SI-5mp9
---

Parent: SI-5mp9

Concrete implementation task for the analytics strategy epic.

- [x] Audit current Umami implementation
- [x] Define analytics strategy/KPIs and event taxonomy
- [x] Implement targeted Umami custom events
- [x] Document analytics strategy and validation steps

## Summary of Changes

- Added `src/utils/analytics.ts`: `trackEvent()` helper (SSR-safe, error-swallowing), plus `queryLengthBucket()` and `resultCountBucket()` to avoid logging raw query text.
- Added `src/utils/analytics.test.ts`: 17 vitest tests (all green).
- Added `docs/analytics.md`: goals, KPIs, full event taxonomy, privacy principles, dashboard cadence, validation guide.
- Fixed naming-convention: `"Command Menu"` → `"Command Menu: Open (button)"` in PageHeader; `"Switch color theme"` replaced with programmatic `Theme: Switch { to }` in ThemeToggle.
- CommandMenu: open path (hotkey/event), view transitions, search (bucketed), search result click, menu navigation, in-menu theme toggle.
- WritingPage: tag filter toggle, clear filters, essay click with filtered flag.
- TableOfContents: heading click, mobile toggle (silent at ≥1280px).
- SeriesStepper: expand/collapse toggle, step click with from/to/total.
- PrevNextNavigation: declarative `PrevNext: Prev` / `PrevNext: Next` attrs.
- LatestEssaysList: `Home: Essay Click { position }`.
- index.astro: `Home CTA: About/Work/Writing` and `Subscribe: RSS` on MoreLink elements.
