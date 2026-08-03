## Ma (間) Design System — conventions

This is Stefan Imhoff's personal-site design system: editorial typography, a
restrained crimson accent, and a Japanese-inspired "ma" (negative space)
aesthetic. Read `guidelines/DESIGN.md` (the full spec) and
`guidelines/src/components/COMPONENTS.md` (component index) before building —
they're the source of truth this header only summarizes.

### Wrapping and dark mode

No provider or root wrapper is required — every component is a plain
function reading Tailwind utility classes plus this DS's CSS custom
properties (tokens), which are defined globally in `styles.css` and need no
runtime setup. **Dark mode** is a class toggle, not a provider: every
`dark:*` utility only activates under a `.dark` ancestor
(`@variant dark (&:where(.dark, .dark *))`). To preview dark mode, wrap the
composition in an element with `className="dark"` — don't invent a
ThemeProvider, none exists.

### Styling idiom: Tailwind + this DS's token utilities

Style with Tailwind utility classes, but reach for this DS's own token scale
first — it replaces Tailwind's defaults for type and color:

- **Type scale**: `text-1` … `text-9` (not Tailwind's default `text-sm/lg/xl`)
  — `text-2` is caption/footnote size, `text-3` is body paragraph, `text-7`
  is a big section heading, `text-9` is page-title scale. Each has a paired
  `--text-N--line-height`. `text-code` is for monospace/code sizing.
- **Color tokens** (OKLCH, defined as `--color-*` in `styles.css`): `beni`
  (crimson accent — the DS's one strong color, use sparingly), `beni-light`
  /`beni-muted`/`beni-pale`/`beni-dark` (accent states), `sumi` (primary
  text), `washi` (primary bg), `kiri` (card/alternate bg), `usuzumi`
  (dividers), `hai` (muted text/captions), `nezumi` (borders, dark-mode
  divider), `yoru` (dark surface). Use as `bg-kiri`, `text-sumi`,
  `border-usuzumi`, `text-beni`, always pairing with a `dark:` counterpart
  (e.g. `text-sumi dark:text-washi`).
- **Fonts**: `font-display` (Boska — headlines/hero), `font-sans` (Switzer —
  UI/body), `font-mono` (code), `font-japanese` (CJK specimens). Don't
  introduce other families.
- **Spacing**: logical-property utilities (`pli-*`/`pbl-*`/`mbe-*`/`mbs-*` —
  inline/block start/end, not `px-*`/`py-*`/`mt-*`) sized from the DS's
  `--spacing-*` scale (e.g. `pli-3`, `mbe-10`). Prefer these over raw
  Tailwind spacing when composing new layout, to stay consistent with the
  shipped components.
- **No CSS-in-JS, no styled-components** — everything is `className` +
  `cn()` (a `clsx` + `tailwind-merge` helper baked into each component).

### Where the truth lives

- `styles.css` (root) — the full token set (`@theme` block) plus the
  compiled component CSS via its `@import` chain. Read this before
  reaching for a color/spacing value not listed above.
- `guidelines/DESIGN.md` — the full Ma Design System specification (voice,
  principles, full token rationale).
- `guidelines/src/components/COMPONENTS.md` — the categorized index of every
  component (`ui/` primitives, `content/` MDX components) with intended use.
- Each component's own `.prompt.md` / `.d.ts` — authoritative prop API.

### Idiomatic composition example

```jsx
import { PageSection, Text, TextLink, Divider } from "ma-design-system";

function Example() {
  return (
    <PageSection label="Writing">
      <Text>
        A short paragraph of body copy, with a <TextLink href="#">styled inline link</TextLink>{" "}
        using the brand accent color and animated underline.
      </Text>
      <Divider />
    </PageSection>
  );
}
```

### Known gaps (see NOTES.md for detail)

Code-block and Japanese-typography font stacks fall back to system fonts in
this environment (Fira Code, YuMincho, Hiragino Mincho, etc. are OS-native,
never shipped as webfonts by this site) — this is expected, not missing
assets.
