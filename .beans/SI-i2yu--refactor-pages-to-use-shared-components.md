---
# SI-i2yu
title: Refactor pages to use shared components
status: completed
type: task
priority: normal
created_at: 2026-04-10T12:45:31Z
updated_at: 2026-04-14T18:32:01Z
---

Replace raw HTML elements (h1, p, a, ul, ol) in pages with reusable components. Create PageHeading, DisplayHeadline, SectionLabel, DashList/DashListItem, update TextLink/MoreLink.

## Summary of Changes

Replaced raw HTML elements with UI components across all page files:

- haiku.astro: p -> Text, hr -> Divider, removed redundant text-3 from wrapper
- writing.astro: p -> Text
- work.astro: all p -> Text (intro, category label, project intro)
- index.astro: h1 -> PageHeading, section p -> Text
- about.astro: all p -> Text, removed redundant text-3 from wrapper
- colophon.astro: all p -> Text, removed redundant text-3 from wrappers
- design-system.astro: h1 -> PageHeading, h2 -> DisplayHeadline, h3 -> Subsubheadline, h4 -> Subsubheadline, p -> Text, nav label -> SectionLabel, li -> ListItem, a -> TextLink

Also added Components-First Rule to CLAUDE.md and memory.
