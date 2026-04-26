---
# SI-0ph1
title: Centralize HTML→component mapping (mdx-components.ts as single source of truth)
status: todo
type: epic
created_at: 2026-04-26T07:35:25Z
updated_at: 2026-04-26T07:35:25Z
---

Make src/mdx-components.ts the single source of truth for every standard-markdown and GFM-produced HTML element. Add missing UI components (Strong, Em, br, del, sup, sub, pre, table family, task checkbox, footnote section), wire them in mdx-components.ts, remove redundant global element styles from SimpleLayout.astro, and replace remaining raw HTML in Astro/TSX files. See plan: ~/.claude/plans/context-ref-file-users-kogakure-code-pe-linear-spring.md
