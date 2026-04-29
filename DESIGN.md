---
version: "alpha"
name: "Ma (間) Design System"
description: "The space between. A design system built on restraint, meaningful emptiness, and the seven principles of Japanese aesthetics. The empty space is the design."

colors:
  # Primary Palette
  beni: "#900B20"
  sumi: "#0E0D0C"
  washi: "#E6E6E6"

  # Secondary / Neutral Palette
  kiri: "#F2F2F0"
  usuzumi: "#C8C8C4"
  hai: "#A0A09C"
  nezumi: "#6B6B67"
  yoru: "#1A1918"

  # Beni Scale (Interactive States)
  beni-light: "#B83A4E"
  beni-muted: "#C75566"
  beni-pale: "#F2D5DA"
  beni-dark: "#6A0818"

  # Semantic (shadcn/ui mapping — light mode)
  background: "{colors.washi}"
  foreground: "{colors.sumi}"
  card: "{colors.kiri}"
  card-foreground: "{colors.sumi}"
  popover: "{colors.washi}"
  popover-foreground: "{colors.sumi}"
  primary: "{colors.beni}"
  primary-foreground: "#FFFFFF"
  secondary: "{colors.kiri}"
  secondary-foreground: "{colors.sumi}"
  muted: "{colors.kiri}"
  muted-foreground: "{colors.hai}"
  accent: "{colors.kiri}"
  accent-foreground: "{colors.sumi}"
  destructive: "{colors.beni}"
  border: "{colors.usuzumi}"
  input: "{colors.usuzumi}"
  ring: "{colors.beni}"

typography:
  h0-hero:
    fontFamily: "Boska Variable"
    fontSize: 516px
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: -0.50em
  h1-page-title:
    fontFamily: "Boska Variable"
    fontSize: 144px
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: -0.25em
  h1-blog-title:
    fontFamily: "Boska Variable"
    fontSize: 72px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: -0.15em
  h2-section:
    fontFamily: "Switzer Variable"
    fontSize: 72px
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: -0.10em
  h2-blog:
    fontFamily: "Switzer Variable"
    fontSize: 40px
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: -0.05em
  h3-subsection:
    fontFamily: "Switzer Variable"
    fontSize: 48px
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: -0.05em
  h3-blog:
    fontFamily: "Switzer Variable"
    fontSize: 28px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: -0.02em
  h4-tertiary:
    fontFamily: "Switzer Variable"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0em
  blog-subtitle:
    fontFamily: "Switzer Variable"
    fontSize: 24px
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: -0.05em
  body:
    fontFamily: "Switzer Variable"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: -0.02em
  caption:
    fontFamily: "Switzer Variable"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0em
  footnote:
    fontFamily: "Switzer Variable"
    fontSize: 10px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0em
  code:
    fontFamily: "Fira Code"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: 0em

spacing:
  space-0: 0px
  space-1: 4px
  space-2: 8px
  space-3: 12px
  space-4: 16px
  space-5: 20px
  space-6: 24px
  space-7: 28px
  space-8: 32px
  space-9: 36px
  space-10: 40px
  space-11: 44px
  space-12: 48px
  space-13: 52px
  space-14: 56px
  space-15: 60px
  space-16: 64px
  space-17: 68px
  space-18: 72px
  space-19: 76px
  space-20: 80px
  space-24: 96px
  space-32: 128px

rounded:
  none: 0px
  sm: 2px
  md: 5px
  lg: 8px
  xl: 25px
  full: 9999px

components:
  # Buttons
  button-primary:
    backgroundColor: "{colors.beni}"
    textColor: "{colors.primary-foreground}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "{spacing.space-3} {spacing.space-6}"
  button-primary-hover:
    backgroundColor: "{colors.beni-light}"
    textColor: "{colors.primary-foreground}"
  button-primary-active:
    backgroundColor: "{colors.beni-dark}"
    textColor: "{colors.primary-foreground}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.sumi}"
    rounded: "{rounded.lg}"
    padding: "{spacing.space-3} {spacing.space-6}"
  button-secondary-hover:
    backgroundColor: "{colors.kiri}"
    textColor: "{colors.sumi}"

  # Links
  link:
    textColor: "{colors.beni}"
  link-hover:
    textColor: "{colors.beni-light}"
  link-visited:
    textColor: "{colors.beni-muted}"

  # Cards
  card:
    backgroundColor: "{colors.kiri}"
    textColor: "{colors.sumi}"
    rounded: "{rounded.lg}"
    padding: "{spacing.space-6}"
  card-journal:
    backgroundColor: "{colors.kiri}"
    textColor: "{colors.sumi}"
    rounded: "{rounded.lg}"

  # Inputs
  input:
    backgroundColor: "{colors.washi}"
    textColor: "{colors.sumi}"
    rounded: "{rounded.lg}"
    padding: "{spacing.space-3} {spacing.space-4}"
  input-border:
    backgroundColor: "{colors.input}"
    textColor: "{colors.sumi}"
  input-focus:
    backgroundColor: "{colors.washi}"
    textColor: "{colors.sumi}"

  # Tags
  tag:
    backgroundColor: "{colors.beni-pale}"
    textColor: "{colors.sumi}"
    rounded: "{rounded.sm}"
    padding: "{spacing.space-1} {spacing.space-2}"

  # Selection
  selection:
    backgroundColor: "{colors.usuzumi}"
    textColor: "{colors.sumi}"

  # Divider / Border
  divider:
    backgroundColor: "{colors.border}"
    height: 1px

  # Caption / Muted Text
  caption:
    backgroundColor: "transparent"
    textColor: "{colors.muted-foreground}"
    typography: "{typography.caption}"

  # Disabled State
  disabled:
    backgroundColor: "{colors.kiri}"
    textColor: "{colors.nezumi}"

  # Navigation
  nav-seal:
    backgroundColor: "transparent"
    textColor: "{colors.beni}"
    size: 24px
  nav-seal-hover:
    textColor: "{colors.beni-light}"
  nav-active:
    textColor: "{colors.beni}"

  # Footer
  footer:
    backgroundColor: "{colors.yoru}"
    textColor: "{colors.washi}"
    padding: "{spacing.space-16} {spacing.space-8}"
  footer-border:
    backgroundColor: "{colors.nezumi}"
    height: 1px

  # Code Block
  code-block:
    backgroundColor: "{colors.yoru}"
    textColor: "{colors.washi}"
    typography: "{typography.code}"
    rounded: "{rounded.lg}"
    padding: "{spacing.space-4}"
  code-block-border:
    backgroundColor: "{colors.nezumi}"

  # Inline Code
  code-inline:
    backgroundColor: "{colors.kiri}"
    textColor: "{colors.sumi}"
    typography: "{typography.code}"
    rounded: "{rounded.md}"
    padding: "{spacing.space-1} {spacing.space-2}"
---

# Ma (間) Design System

## Overview

Ma (間) — the space between. Two letters. The entire design system is built on the idea that the empty space _is_ the design. The kanji 間 means "gate with light passing through," which is literally what a well-designed interface does.

The system is governed by seven principles:

- **Asymmetry (Fukinsei 不均齊)** — A 12-column grid is not a cage but a field of tension; the interesting decisions happen where the grid is deliberately broken.
- **Simplicity (Kanso 簡素)** — Exclude the non-essential. Clarity is not the absence of complexity; it is the resolution of it.
- **Austerity (Koko 考古)** — Let the work weather. Favor decisions that age well over those that trend well.
- **Naturalness (Shizen 自然)** — Code that reads cleanly, type that is set with care, photographs that are not over-processed.
- **Subtlety (Yūgen 幽玄)** — Work that suggests rather than declares, that reveals new layers over time.
- **Detachment (Datsuzoku 脱俗)** — The controlled exception that makes the convention visible.
- **Tranquility (Seijaku 静寂)** — White space is not empty; it is ma — the substance between things.

The voice is calm, direct, and considered. It does not perform enthusiasm. It does not hedge. Short, declarative sentences preferred. No filler. Each sentence earns its place.

### Technical Context

- **Framework:** Astro with React islands
- **Styling:** Tailwind CSS v4 with `@theme` directive
- **Component library:** shadcn/ui, customised to Ma tokens
- **Dark mode:** Class-based (`.dark` class on root element)
- **CSS architecture:** `global.css` defines all tokens; components use Tailwind utilities referencing these tokens
- **All sizes are fluid:** Font sizes and spacing use `clamp()` with `vw` units, capped at their spec maximum

## Colors

The palette is austere by design — Koko. Like sumi ink on handmade paper, the system finds its richness in restraint: a single hue (crimson), a near-black, and a warm-neutral ground.

### Primary

- **Beni 紅** (#900B20): Crimson. The single point of colour in the system. Accent, logo, links, emphasis. Use sparingly — like the seal of a Hanko pressed once onto a page. CSS: `var(--color-beni)`.
- **Sumi 墨** (#0E0D0C): Ink. Primary text, headings, high-contrast elements. Not a pure black — it carries the warmth of aged ink. CSS: `var(--color-sumi)`.
- **Washi 和紙** (#E6E6E6): Japanese paper. Primary background. The colour of unbleached paper under soft light. CSS: `var(--color-washi)`.

### Secondary / Neutral

- **Kiri 霧** (#F2F2F0): Fog. Lighter background for cards, alternating sections, hover states. CSS: `var(--color-kiri)`.
- **Usuzumi 薄墨** (#C8C8C4): Thin ink. The pale grey left when sumi is heavily diluted with water on washi. CSS: `var(--color-usuzumi)`.
- **Hai 灰** (#A0A09C): Ash. Muted text, captions, disabled states. Use only for large text (≥ 18px) — fails 4.5:1 on Washi at ~2.7:1. CSS: `var(--color-hai)`.
- **Nezumi 鼠** (#6B6B67): Mouse. Mid-tone for borders, dividers, subtle UI elements. CSS: `var(--color-nezumi)`.
- **Yoru 夜** (#1A1918): Night. Dark surface for inverted sections, footer, dark-mode base. CSS: `var(--color-yoru)`.

### Beni Scale (Interactive States)

- **Beni Light 薄紅** (#B83A4E): Hover state for links on light backgrounds. Dark-mode primary accent. CSS: `var(--color-beni-light)`.
- **Beni Muted 渋紅** (#C75566): Visited links, secondary buttons, inactive accent states. CSS: `var(--color-beni-muted)`.
- **Beni Pale 紅白** (#F2D5DA): Selection background, tag backgrounds, subtle highlight. CSS: `var(--color-beni-pale)`.
- **Beni Dark 深紅** (#6A0818): Active/pressed state, dark-mode accent. CSS: `var(--color-beni-dark)`.

### shadcn/ui Semantic Mapping

The Ma palette maps to shadcn/ui's semantic variables in `global.css`. These are the bridge between Ma tokens and shadcn/ui components:

| Semantic Variable        | Light Mode | Dark Mode  |
| ------------------------ | ---------- | ---------- |
| `--background`           | Washi      | Yoru       |
| `--foreground`           | Sumi       | Washi      |
| `--card`                 | Kiri       | Sumi       |
| `--card-foreground`      | Sumi       | Washi      |
| `--popover`              | Washi      | Sumi       |
| `--popover-foreground`   | Sumi       | Washi      |
| `--primary`              | Beni       | Beni Light |
| `--primary-foreground`   | White      | Yoru       |
| `--secondary`            | Kiri       | Sumi       |
| `--secondary-foreground` | Sumi       | Washi      |
| `--muted`                | Kiri       | Sumi       |
| `--muted-foreground`     | Hai        | Nezumi     |
| `--accent`               | Kiri       | Sumi       |
| `--accent-foreground`    | Sumi       | Washi      |
| `--destructive`          | Beni       | Beni Light |
| `--border`               | Usuzumi    | Nezumi     |
| `--input`                | Usuzumi    | Nezumi     |
| `--ring`                 | Beni       | Beni Light |

### Usage Ratio: 70 / 25 / 5

- **70%** — Washi or Kiri as the dominant ground.
- **25%** — Sumi for text and structural elements.
- **5%** — Beni as the sole chromatic accent.

### Contrast Rules (WCAG 2.1)

- Sumi on Washi: 15.5:1 — passes AAA.
- Beni on Washi: 7.46:1 — passes AAA.
- Sumi on Kiri: ~16.8:1 — passes AAA.
- Beni on Kiri: ~8.1:1 — passes AAA.
- Washi on Yoru: ~13.4:1 — passes AAA.
- Beni on Sumi: 2.08:1 — **fails all levels. Never use this pairing.**
- Hai on Washi: ~2.7:1 — **fails for body text. Large text (≥ 18px) or decorative only.**
- For crimson-on-dark contexts, use Beni Light (#B83A4E) or switch to Washi text.

### Legacy Colours (To Be Removed)

The following tokens exist in `global.css` for backward compatibility and should be migrated:

- `--color-shibui-*` (50–950 scale) — replace with Ma named tokens. `shibui-950` = Sumi, `shibui-50` ≈ Kiri.
- `--color-marked: #e6f028` — yellow-green highlight for `<mark>` elements. Not a Ma colour. Consider replacing with Beni Pale or Usuzumi.
- `--color-code-1: #1e2229` and `--color-code-2: #abb2bf` — code block colours. Replace with Yoru (background) and Washi/Hai (text) for dark code blocks.
- `--color-accent: #900b20` — legacy hex duplicate of Beni. Replace references with `var(--color-beni)`.
- Hardcoded hex values in `kbd` styles (`#ccc`, `#f7f7f7`, `#333`) — replace with Ma tokens.

## Typography

Two typefaces. One tension. Plus a monospace for code.

**Boska Variable** (Barbara Bigosińska, Fontshare/ITF) is a high-contrast Didone with calligraphic ink traps that evoke the pressure variation of a sumi-e brush. It carries the emotional register of the brand. Reserved exclusively for display headlines (H0, H1).

**Switzer Variable** (Jérémie Hornus, ITF/Fontshare) is a neo-grotesque descended from the Swiss International Style. It holds the system together. Used for everything else — headings H2–H4, body text, captions, UI elements, navigation.

**Fira Code** — monospace for code blocks, inline code, and keyboard shortcuts. The only permitted monospace.

**Japanese text** uses a dedicated serif stack: Toppan Bunkyu Midashi Mincho, YuMincho, Hiragino Mincho ProN, BIZ UDPMincho, MS PMincho, Noto Serif JP — echoing Boska's calligraphic DNA.

### Font Stacks (CSS)

```css
--font-display: "BoskaVariable", Georgia, "Times New Roman", serif;
--font-sans: "SwitzerVariable", "Helvetica Neue", Helvetica, Arial, sans-serif;
--font-mono: "Fira Code", Operator, Hasklig, Monoid, monospace;
--font-japanese: "Toppan Bunkyu Midashi Mincho", "YuMincho", "Hiragino Mincho ProN",
  "Hiragino Mincho Pro", "BIZ UDPMincho", "MS PMincho", "Noto Serif JP", serif;
```

### Fluid Type Scale

All font sizes use `clamp()` for fluid scaling. The `vw` value is calculated as `max_px / 1440 * 100`. Sizes cap at their spec maximum on wide viewports.

| Token     | Role                         | Max Size | Line Height | Tracking | CSS Variable  |
| --------- | ---------------------------- | -------- | ----------- | -------- | ------------- |
| text-9    | H1 Page Title (Boska)        | 144px    | 0.95        | −25%     | `--text-9`    |
| text-8    | Blog Title (Boska)           | 96px     | 1.0         | −15%     | `--text-8`    |
| text-7    | H2 Section (Switzer)         | 72px     | 1.1         | −10%     | `--text-7`    |
| text-6    | H3 Section (Switzer)         | 48px     | 1.15        | −5%      | `--text-6`    |
| text-5    | H2 Blog / Subtitle (Switzer) | 40px     | 1.15        | −5%      | `--text-5`    |
| text-4    | H3 Blog (Switzer)            | 28px     | 1.2         | −2%      | `--text-4`    |
| text-3    | Paragraph (Switzer)          | 18px     | 1.55        | −2%      | `--text-3`    |
| text-2    | Caption / Footnote (Switzer) | 14px     | 1.4         | 0        | `--text-2`    |
| text-1    | Sub-element relative         | 0.65em   | —           | —        | `--text-1`    |
| text-code | Code (Fira Code)             | 15px     | 1.625       | 0        | `--text-code` |

### Rules

- **Two display typefaces only.** Boska and Switzer. No third-party fonts. Fira Code is the sole monospace exception.
- **Boska never appears in body copy, UI, or components.** Only hero/display headings (H0, H1, Blog Title).
- **Display type** (H0, H1): aggressive negative tracking (−15% to −50%). Type as image — individual letterforms dissolve into texture.
- **Body text**: −2% tracking, 18px max, optimised for sustained reading.
- **Captions and labels**: Switzer, uppercase. A nod to Swiss labelling conventions.
- **Sentence case** for all headings. ALL CAPS only for captions/meta labels.
- **Line length**: 65–75 characters per line maximum for paragraph text.
- **Japanese text** must use `--font-japanese` and be marked with `lang="ja"`.

## Layout

The grid is the tatami mat of the design — a modular system that structures space without dictating content.

### Grid

| Breakpoint          | CSS Variable               | Columns | Margins | Gutters | Max Width |
| ------------------- | -------------------------- | ------- | ------- | ------- | --------- |
| Mobile (< 768px)    | `--breakpoint-xs: 320px`   | 3       | 16px    | 16px    | Fluid     |
| Tablet (768–1279px) | `--breakpoint-md: 768px`   | 6       | 32px    | 24px    | Fluid     |
| Desktop (≥ 1280px)  | `--breakpoint-xl: 1280px`  | 12      | 32px    | 32px    | 1440px    |
| Wide (≥ 1800px)     | `--breakpoint-3xl: 1800px` | 12      | 32px    | 32px    | 1440px    |

### 4px Base Unit

Every measurement snaps to multiples of 4px. The full spacing scale is defined in CSS as fluid `clamp()` values. Small values (space-1, space-2) are fixed; larger values scale fluidly with viewport width, capped at their maximum.

### Layout-Specific Tokens

| Token         | CSS Variable                 | Purpose                                    |
| ------------- | ---------------------------- | ------------------------------------------ |
| Column width  | `--spacing-column: 6.9375vw` | Single grid column width                   |
| Layout margin | `--spacing-layout`           | Outer page margins (fluid)                 |
| Grid gap      | `--spacing-gap`              | Gap between grid columns (fluid)           |
| Half gap      | `--spacing-halfgap`          | Half of layout margin                      |
| Icon size     | `--spacing-icon`             | Standard icon container (fluid, ~24px max) |
| Icon small    | `--spacing-icon-small`       | Inline icon container (fluid, ~22px max)   |
| Click area    | `--spacing-clickarea: 40px`  | Minimum interactive target                 |

### Composition Patterns

- **Asymmetric split (Fukinsei):** Content occupies 7–9 columns; the remaining space is deliberate void.
- **Full-bleed moments (Datsuzoku):** The Japanese poem strip breaks the grid entirely, edge to edge.
- **Centred minimal (Seijaku):** Centred column of 6–8 grid units, surrounded by generous margins.

### Responsive

All pixel values are converted to `rem`. Fluid sizing uses `clamp()` with the formula `max_px / 1440 * 100` for the `vw` value. Use logical properties (`margin-inline`, `padding-block`, `inset-inline-start`) for all spacing — the system includes custom Tailwind utilities for logical properties (`mbe-*`, `mbs-*`, `mis-*`, `mie-*`, `pbe-*`, `pbs-*`, `pis-*`, `pie-*`, `pli-*`, `pbl-*`).

## Elevation & Depth

Ma does not use elevation through shadows as a primary design tool. Visual hierarchy is achieved through:

- **Colour contrast** — Kiri surfaces on Washi backgrounds.
- **Typographic scale** — size and weight differences establish hierarchy.
- **Whitespace** — the space between elements is the primary depth cue.
- **Borders** — Nezumi at 1px, or `border-black/5` for subtle image borders.

**Legacy exception:** `--shadow-subtle` and `--shadow-img` exist in `global.css` for the `.image-shadow` hover effect on journal cards. This is a Datsuzoku moment — the controlled exception. These shadows should not be used elsewhere. No new shadow tokens should be created.

## Shapes

Border radius tokens in the system:

| Token | Value | CSS Variable  | Use                                   |
| ----- | ----- | ------------- | ------------------------------------- |
| none  | 0px   | —             | Sharp edges where needed              |
| sm    | 2px   | `--radius-1`  | Inline code, subtle rounding          |
| md    | 5px   | `--radius-2`  | Figure content, general components    |
| lg    | 8px   | `--radius-4`  | Cards, journal cards, buttons, inputs |
| xl    | 25px  | `--radius-25` | Pills, special elements               |
| full  | 50%   | `--radius-50` | Hanko seal mark only                  |

The shadcn/ui `--radius` is set to `0.375rem` (6px). Components should prefer the Ma radius tokens above.

Do not mix sharp and rounded corners in the same view. The Hanko seal mark is the only circular element in the system.

## Components

All components are built on **shadcn/ui** primitives, customised to Ma tokens in `global.css`. Components live in `src/components/` with four subdirectories:

- `src/components/ui/` — shadcn/ui primitives (Button, Dialog, Card, Input, etc.)
- `src/components/content/` — content rendering (essays, journal entries, etc.)
- `src/components/interactive/` — client-side hydrated islands
- `src/components/site/` — structural/layout (Header, Footer, Navigation, etc.)

### Architecture Rules

- **Pages must never contain direct UI implementation.** Pages in `src/pages/` only import and compose components. Visual styling belongs in components, not pages. This is Kanso — simplicity through separation.
- **Every new component must be built on a shadcn/ui primitive** from `src/components/ui/`. When a shadcn/ui primitive exists, it must be used as the base. No reimplementing buttons, inputs, dialogs, or selects from scratch.
- **No third-party UI libraries** alongside shadcn/ui. One system, one source.

### Buttons

- **Primary:** Beni background, white text, radius-4 (8px). Hover → Beni Light. Active → Beni Dark.
- **Secondary:** Transparent background, Sumi text, radius-4. Hover → Kiri background.
- **Ghost:** No background, no border. Text inherits context colour.
- All buttons use Switzer Variable. Never Boska.

### Links

- Default: Beni text. Underline draws left-to-right on hover (200ms, `--ease-enter`).
- Hover: Beni Light.
- Visited: Beni Muted.
- Arrow links ("About →"): arrow translates 4px right on hover (200ms, `--ease-enter`).

### Cards / Journal Cards

- Kiri background on Washi pages. Sumi text. Radius-4 (8px). Padding: space-6.
- Journal cards: `col-span-2 row-span-3`, with 1px border at `border-black/
