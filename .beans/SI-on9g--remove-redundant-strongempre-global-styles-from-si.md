---
# SI-on9g
title: Remove redundant strong/em/pre global styles from SimpleLayout.astro
status: completed
type: bug
priority: normal
created_at: 2026-04-26T07:36:13Z
updated_at: 2026-04-26T11:27:51Z
parent: SI-0ph1
blocked_by:
  - SI-przn
---

src/layouts/SimpleLayout.astro lines 75–85 contain global element selectors styling <strong>, <em>, <pre>. These are band-aids for missing components. Once Strong/Em/CodeBlock exist and are mapped, delete these CSS rules. Keep only the .simple-content grid + h2/h3 layout-specific rules.

## Summary of Changes

Removed redundant .simple-content strong/em/pre global CSS rules (lines 75–85) from src/layouts/SimpleLayout.astro. Components now own their styling via mdx-components mapping.
