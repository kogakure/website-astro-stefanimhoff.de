---
# SI-4h3e
title: Fix dark-mode Beni contrast + allow red logo on dark
status: completed
type: bug
priority: normal
created_at: 2026-05-11T18:21:10Z
updated_at: 2026-05-11T18:25:17Z
---

Several components on the homepage use bare text-beni/fill-beni on Yoru background (2.08:1 — fails WCAG). Add dark:\*-beni-light variants to match the established codebase pattern. Also update design-system logo rule to allow Beni Light on dark backgrounds (previously required Washi only).

## Summary of Changes

- Logo.astro: fill-beni → fill-beni dark:fill-beni-light
- MoreLink.tsx: added dark:hover:text-beni-light, dark:text-beni-light on arrow
- TextLink.tsx: added dark:text-beni-light, dark:hover:text-beni-light
- EmailLink.tsx: added dark:hover:text-beni-light, dark:text-beni-light on arrow
- JapanesePoem.tsx: added dark:text-beni-light
- MainNavigation.astro: added dark:decoration-beni-light, dark:hover:text-beni-light
- index.astro: inline Hamburg dash span gets dark:text-beni-light
- 3-logo.mdx: updated table; Beni Light primary + Washi alternate on Yoru; updated philosophy line
- LogoSpecimen.tsx: On Sumi → On Yoru, fill #E6E6E6 → #B83A4E, simplified label color expression
- DESIGN.md: added Beni Light on Yoru contrast row; added dark mode pattern to Links section

- EssayLink.tsx: added dark:hover:text-beni-light\n- UnorderedList.tsx: added [&>li]:before:dark:text-beni-light for dash markers
