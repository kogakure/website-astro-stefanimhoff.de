---
# SI-aslg
title: Check which styles of SimpleLayout are needed
status: completed
type: task
priority: high
created_at: 2026-04-25T14:46:56Z
updated_at: 2026-04-26T07:19:40Z
---

## Problem

MDX pages using `SimpleLayout` (`imprint`, `libertarianism`, `life-rules`, `now`, `tools`) render hyperlinks with double underline. The new `TextLink` component uses an animated background-gradient underline plus `no-underline`, but `SimpleLayout.astro:97-99` still applies `.simple-content a { @apply text-beni underline ... }` which adds CSS `text-decoration: underline` on top of the gradient.

The same redundancy exists for other elements: `p`, `ul`, `ol`, `li`, `hr`, `blockquote`, `code` are all mapped to UI/content components in `src/mdx-components.ts`, yet `SimpleLayout` still ships pre-component element styles for them.

## Plan

Trim `<style is:global>` block in `src/layouts/SimpleLayout.astro` (lines 47–124).

### Keep

- `.simple-content > *` (grid col-span)
- `.simple-content > h2`, `> h2:first-child`, `> h2 + *`, `> h2:first-child + *` (intentional side-column label re-skin + grid alignment)
- `.simple-content > h3` (intentional smaller h3 in this layout)
- `.simple-content strong`, `.simple-content em` (no UI components for these)
- `.simple-content pre` (`pre` not mapped)

### Remove

- `.simple-content a` — **primary fix**: causes double underline vs TextLink gradient
- `.simple-content > p, .simple-content p` — Text component covers it
- `.simple-content > ul, > ol` and the `> ul`/`> ol` padding rules — UnorderedList/OrderedList cover it
- `.simple-content li` — list components use `gap-1`
- `.simple-content > hr` — Divider covers it
- `.simple-content blockquote` — Blockquote content component covers it
- `.simple-content code:not(pre code)` — InlineCode covers it

## Tasks

- [x] Trim `src/layouts/SimpleLayout.astro` style block per plan
- [x] Verify each affected page in browser (imprint, libertarianism, life-rules, now, tools)
- [x] Verify hover animation on links

## Summary of Changes

Trimmed `<style is:global>` block in `src/layouts/SimpleLayout.astro` to remove rules that duplicated or conflicted with mapped UI/content components. Removed:

- `.simple-content a` (primary fix — was adding `text-decoration: underline` on top of TextLink's gradient underline, producing double styling)
- `.simple-content > p, .simple-content p` (Text covers it)
- `.simple-content > ul, > ol` + padding rules (UnorderedList/OrderedList cover it)
- `.simple-content li` (list components use `gap-1`)
- `.simple-content > hr` (Divider covers it)
- `.simple-content blockquote` (Blockquote content component covers it)
- `.simple-content code:not(pre code)` (InlineCode covers it)

Kept layout-specific rules: grid `> *` col-span, `> h2` side-column label re-skin and adjacent-sibling alignment, `> h3` smaller-h3 override, `strong`, `em`, and `pre` (none of which have mapped components).

Verified via Playwright that all five MDX pages (`/imprint/`, `/libertarianism/`, `/life-rules/`, `/now/`, `/tools/`) now show `text-decoration: none` with the gradient underline at `0% 1px` at rest and `100% 1px` on hover.

Note: `pnpm build` currently fails due to an unrelated missing import (`DoughnutChart.tsx` in a 2024 journal post) — not caused by this change.
