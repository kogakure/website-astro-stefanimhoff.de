---
# SI-81ng
title: Enable remark-gfm in astro.config.mjs
status: todo
type: task
priority: normal
created_at: 2026-04-26T07:36:13Z
updated_at: 2026-04-26T07:36:30Z
parent: SI-0ph1
blocked_by:
  - SI-przn
---

pnpm add -D remark-gfm. Add remarkGfm to remarkPlugins array in astro.config.mjs:24-29 (alongside existing remarkReadingTime, remarkWidont). Enables GFM parsing: tables, strikethrough, task lists, footnotes.
