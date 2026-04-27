---
# SI-aa24
title: Redesign ColorSwatch component system — 3 variants
status: completed
type: feature
priority: high
created_at: 2026-04-27T13:24:49Z
updated_at: 2026-04-27T13:27:49Z
parent: SI-tfhf
---

Redesign the color swatch system from a single flippable ColorSwatch into three purpose-built variants. The Japanese colors page showcases 250 colors with kanji/hiragana/description data that the current component doesn't fully utilize.

## Variants

### 1. ColorSwatchPrimary — Large variant

- Color field with prominent kanji centered, auto-contrast text (black/white via WCAG luminance)
- Below: name, kanji, hiragana, hex, description
- Used on traditional-colors-of-japan page

### 2. ColorSwatch — Secondary variant (backward-compatible rewrite)

- Smaller color field, slightly rounded corners
- Below: name + kanji, hex, optional description
- Keeps `title` prop for MDX backward compat
- No flip animation, no client hydration

### 3. ColorSwatchMini — Inline mini

- Tiny color square shown inline
- Slightly rounded borders, border on light colors

## Files to Create

- `src/lib/color-contrast.ts` — shared WCAG luminance utility
- `src/components/content/ColorSwatchPrimary.tsx`
- `src/components/content/ColorSwatchMini.tsx`

## Files to Modify

- `src/components/content/ColorSwatch.tsx` — rewrite as secondary
- `src/pages/traditional-colors-of-japan.astro` — use Primary variant
- `src/mdx-components.ts` — register new components
- `src/pages/design-system.astro` — show all three variants
- `src/utils/rss-parser.ts` — handle new component names
- `src/utils/rss-parser.test.ts` — add test cases

## Todo

- [x] Create `src/lib/color-contrast.ts` (luminance, contrast color, light detection)
- [x] Rewrite `src/components/content/ColorSwatch.tsx` (secondary, backward-compat)
- [x] Create `src/components/content/ColorSwatchPrimary.tsx`
- [x] Create `src/components/content/ColorSwatchMini.tsx`
- [x] Update `src/mdx-components.ts` — register new components
- [x] Update `src/pages/traditional-colors-of-japan.astro` — use Primary
- [x] Update `src/pages/design-system.astro` — preview all variants
- [x] Update `src/utils/rss-parser.ts` + tests
- [x] Visual test: dev server, check all pages

## Design Decisions

- Drop flip animation — removes client hydration for 250+ instances
- Auto-contrast uses CSS vars: `var(--color-sumi)` / `var(--color-washi)`
- Light color border auto-detected via luminance > 0.85
- RGB/CMYK skipped for now (data available in JSON)
