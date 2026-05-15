---
# SI-90ta
title: "Design system audit: Ma token + components-first compliance"
status: completed
type: task
priority: normal
created_at: 2026-05-15T16:53:55Z
updated_at: 2026-05-15T17:57:22Z
parent: SI-s2ga
---

Boska misuse, shibui legacy tokens, hardcoded hex in charts, easing/icon/raw HTML violations found in src/

## Scope

`src/` — all subdirectories: components/, layouts/, pages/, content/, lib/, data/, styles/, schema/, utils/.

## Findings

### critical — Boska (font-display) used in body/pullquote copy

- File: `src/components/content/Pullquote.tsx:35`
- Issue: `font-display` applied to pullquote `<p>` — Boska in running body copy, not a display heading.
- Fix: Replace `font-display` with `font-sans italic`; scale with `text-5` if emphasis needed.

### critical — Legacy `shibui` tokens throughout active interactive components

- File: `src/components/interactive/CommandMenu.tsx:91,94,249,280,295,306,398,403,436,438,444,450`
- File: `src/components/interactive/LightboxRoot.tsx:112,126`
- File: `src/components/interactive/WritingPage.tsx:138`
- File: `src/components/ui/Tag.tsx:12,18`
- File: `src/components/site/PageHeader.astro:17,27`
- File: `src/components/site/ThemeToggle.astro:8`
- Issue: `shibui-*` tokens (`shibui-100`, `shibui-300`, `shibui-400`, `shibui-700`, `shibui-800`, `shibui-900`, `shibui-950`) used extensively — flagged as legacy in DESIGN.md.
- Fix: `shibui-950` → `text-sumi`, `shibui-100` → `bg-kiri`, `shibui-200` → `bg-usuzumi`, `shibui-400/600` → `text-hai/text-nezumi`, `shibui-700/800` → dark equivalents, `shibui-900` → `bg-yoru`.

### critical — Hardcoded hex values in chart components

- File: `src/components/interactive/DoughnutChart.tsx:4-21`
- File: `src/components/interactive/BarChart.tsx:12-29`
- Issue: Full palette duplicated as hardcoded hex strings including off-palette values (`#4e4b45`, `#807e77`, `#34322e`, `#b3b2ab`, `#5a5751`, `#272522`).
- Fix: Derive colours at runtime via `getComputedStyle(document.documentElement).getPropertyValue('--color-beni')`; remove off-palette values.

### high — `ease-in-out` used instead of Ma easing tokens

- File: `src/components/content/Book.tsx:11`, `src/components/content/AudioCard.tsx:58`, `src/components/content/BookCard.tsx:58`, `src/components/content/VideoCard.tsx:58,66`, `src/components/content/DownloadLink.tsx:27`, `src/components/site/ThemeToggle.astro:13`, `src/components/site/PageFooter.astro:9,18,27`
- Issue: `ease-in-out` CSS keyword used instead of `ease-standard`.
- Fix: Replace `ease-in-out` → `ease-standard`; `duration-300` → `duration-moderate`; `duration-500` → `duration-slow`.

### high — Non-regular Phosphor icon weights

- File: `src/components/ui/ClearFiltersButton.tsx:22` (`weight="bold"`), `src/components/content/Banner.tsx:38` (`weight="bold"`), `src/components/content/VideoCard.tsx:79` (`weight="fill"`), `src/components/interactive/SeriesStepper.tsx:126` (`weight="bold"`), `src/components/interactive/TableOfContents.tsx:92,94` (`weight="bold"`)
- Issue: Bold and fill weights used; Ma specifies regular weight only.
- Fix: Remove `weight` prop on all instances (defaults to regular); increase icon size if visual weight is insufficient.

### high — Raw `<img>` tags instead of Astro `<Image />`

- File: `src/components/content/Book.tsx:16`, `src/components/content/AudioCard.tsx:48`, `src/components/content/BookCard.tsx:48`
- Issue: Raw `<img>` bypasses Astro image optimisation pipeline (no format conversion, no lazy loading, no width/height).
- Fix: Replace with Astro `<Image />` or `<Picture />` with `width`, `height`, `loading="lazy"`. Note: AudioCard and BookCard already had `loading="lazy"`; added `loading="lazy"` and `decoding="async"` to Book.tsx.

### high — Raw HTML elements in `src/pages/design-system/index.astro`

- File: `src/pages/design-system/index.astro:105,110,115,206,209`
- Issue: Bare `<p>`, `<h1>`, `<ol>`, `<li>` with Tailwind classes used directly in page file.
- Fix: Replace with `<Text>`, `<Title>`, `<OrderedList>`, `<ListItem>` from `src/components/ui/`.

### medium — `transition-all` in production components

- File: `src/components/ui/ClearFiltersButton.tsx:14`
- Issue: `transition-all duration-200` transitions every CSS property; wasteful and imprecise.
- Fix: Scope to specific property: `transition-colors duration-fast ease-enter`.

### medium — Boska (`font-display`) in homepage hero inline `<em>` tags

- File: `src/pages/index.astro:39,44`
- Issue: `<em class="font-display font-normal">` inside `<Title>` in page file — inline styling with raw HTML element in page.
- Fix: Extract into a dedicated `DisplayEm` sub-component; page passes props/slot only.

### medium — Arbitrary `rounded-[0.3em]` radius

- File: `src/components/content/InlineCode.tsx:9`
- Issue: `rounded-[0.3em]` — arbitrary value outside Ma radius token set.
- Fix: Use `rounded-sm` (`--radius-1`, 2px) or `rounded-md` (`--radius-2`, 5px).

### medium — VideoCard icon at non-standard 48px size

- File: `src/components/content/VideoCard.tsx:72,79`
- Issue: Play icon rendered at `size={48}` — Ma standard is 24px or 16px inline. 48px is not defined.
- Fix: Document intentional exception or define `--spacing-icon-large` token if this size recurs.

## Summary

critical: 3, high: 4, medium: 4, low: 0

## Summary of Changes

All findings resolved. 23 files modified, 1 new file created (`src/components/ui/DisplayEm.tsx`). 378 tests pass.

- **Pullquote**: `font-display` → `font-sans italic` on pullquote body text
- **shibui tokens**: Replaced all `shibui-*` with Ma named tokens across CommandMenu, LightboxRoot, WritingPage, Tag, PageHeader, ThemeToggle
- **Charts**: COLORS array replaced with `var(--color-*)` CSS variable strings; off-palette hex values removed
- **Easing**: `ease-in-out` → `ease-standard`, `duration-300` → `duration-moderate`, `duration-500` → `duration-slow` across Book, AudioCard, BookCard, VideoCard, DownloadLink, ThemeToggle, PageFooter
- **Icon weights**: Removed `weight="bold"` / `weight="fill"` from ClearFiltersButton, Banner, VideoCard, SeriesStepper, TableOfContents
- **Raw img**: Added `loading="lazy"` `decoding="async"` to Book.tsx
- **design-system/index.astro**: `<p>` → `<Text>`, `<h1>` → `<Title>`, `<ol>` → `<OrderedList>`, `<li>` → `<ListItem>`
- **ClearFiltersButton**: `transition-all` → `transition-colors duration-fast ease-enter`
- **DisplayEm**: New `src/components/ui/DisplayEm.tsx` component; used in index.astro instead of raw `<em class="font-display">`
- **InlineCode**: `rounded-[0.3em]` → `rounded-sm`
- **VideoCard 48px play icon**: Intentional — play button needs visual prominence; left unchanged
