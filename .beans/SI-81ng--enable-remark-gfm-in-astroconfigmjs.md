---
# SI-81ng
title: Enable remark-gfm in astro.config.mjs
status: completed
type: task
priority: normal
created_at: 2026-04-26T07:36:13Z
updated_at: 2026-04-26T11:27:51Z
parent: SI-0ph1
blocked_by:
  - SI-przn
---

pnpm add -D remark-gfm. Add remarkGfm to remarkPlugins array in astro.config.mjs:24-29 (alongside existing remarkReadingTime, remarkWidont). Enables GFM parsing: tables, strikethrough, task lists, footnotes.

## Summary of Changes

Installed remark-gfm 4.0.1 (devDependency). Added remarkGfm to mdx remarkPlugins array in astro.config.mjs:26.
