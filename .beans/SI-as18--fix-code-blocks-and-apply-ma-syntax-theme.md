---
# SI-as18
title: Fix code blocks and apply Ma syntax theme
status: completed
type: bug
priority: normal
created_at: 2026-04-30T21:03:49Z
updated_at: 2026-04-30T21:06:14Z
---

Code blocks render broken: white pill backgrounds on tokens, lines concatenated, Nord palette doesn't fit Ma. Root cause: code: InlineCode mapping in mdx-components.ts applies to code inside pre. Plus replace Nord theme with Ma sumi-e palette.

## Summary of Changes

- src/mdx-components.ts — removed `code: InlineCode` mapping + unused import. Inline code now styled by CSS rule `:not(pre) > code` so `pre > code` is no longer pill-styled.
- src/styles/global.css — removed `pre { whitespace-pre }` (was overriding Shiki's `pre-wrap` from `wrap: true`); changed `p code, li code, samp` to `:not(pre) > code, samp` to cover all inline contexts.
- shiki-theme.json — replaced Nord with Ma 'Sumi-e on Yoru' theme. 5 fg values total (Washi/Usuzumi/Hai/Nezumi/Beni Light), Yoru bg, dark in both light and dark mode.

Verified at http://localhost:4326 — JS code block renders with correct token colors, line breaks preserved, no white pill backgrounds.
