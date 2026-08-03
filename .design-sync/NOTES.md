# design-sync notes — Ma Design System

## Repo shape

This repo is an Astro + React personal site, not a published component library —
no `dist/` build, no Storybook. design-sync runs in **synth-entry mode**:
`cfg.componentSrcMap` has no `srcDir` override (default `src/` root is used),
and 48 non-design-system components (design-system docs components, icons,
interactive/motion islands, site-chrome components) are excluded via explicit
`null` entries. Scope = `src/components/ui/` + `src/components/content/`
(user-selected — see COMPONENTS.md for the full component taxonomy).

## cssEntry: no compiled dist/\_astro/\*.css bundle exists

Astro inlines the entire compiled Tailwind stylesheet as a `<style>` block on
every page (verified byte-identical across pages) rather than emitting a
`dist/_astro/*.css` chunk. `cfg.cssEntry` points at
`.design-sync/.cache/compiled.css`, which is extracted by
`.design-sync/extract-css.mjs` from `dist/index.html` after `pnpm build`.

**Re-sync risk**: this extraction is NOT part of `cfg.buildCmd` automation —
run manually before every sync:

```
pnpm build && node .design-sync/extract-css.mjs
```

## Fonts

`src/styles/fonts.css` declares `@font-face` rules with site-root-relative
URLs (`/assets/fonts/...`) which don't resolve as filesystem paths during the
design-sync build (only as browser-served paths). `.design-sync/fonts-face.css`
is a hand-authored copy with paths relative to itself
(`../public/assets/fonts/...`), wired via `cfg.extraFonts`. **If the brand
fonts (Boska, Switzer) or their file paths ever change, update both files.**

**Known font-family substitutes (accepted, not sourced)** — confirmed with
the user 2026-08-03: `Fira Code`/`Operator`/`Hasklig`/`Monoid` (code-block
monospace stack) and the Japanese type stack (`Toppan Bunkyu Midashi Mincho`,
`YuMincho`, `Hiragino Mincho ProN/Pro`, `BIZ UDPMincho`, `MS PMincho`) plus
`Cambria` are OS-native font stacks never shipped as webfonts by this site.
`[FONT_MISSING]` for these is expected and not a bug — don't chase re-sourcing
them.

## Source convention

Nearly every `ui/`/`content/` component pairs a named export with
`export default` — the synth entry's `export * from "<path>"` only re-exports
named bindings, so a default-only export silently drops off
`window.MaDesignSystem`. Fixed one instance:
`src/components/content/Image.tsx` now also has `export const Image = ...`
(previously default-only). If `[BUNDLE_EXPORT]` fires again after adding a
new component, check for this exact pattern first.

## Multi-export files need per-export exclusion, not per-file

`src/components/interactive/motion/StaggerList.tsx` exports both
`StaggerList` and `StaggerItem` as named exports from one file. Excluding
`StaggerList` in `componentSrcMap` did NOT exclude `StaggerItem` — it leaked
through as its own discovered component and had to be added separately.
When excluding a file via `componentSrcMap`, grep it for multiple
`export const/function/class` first (`grep -c "export (const|function|class) [A-Z]"`).

## Preview authoring (first sync, 2026-08-03)

User scoped preview authoring to "fix the 26 blank ones only" (of 76 total
components; the other 50 ship as floor cards, authorable incrementally on
any future re-sync). Sources used, in order: the live style-guide page at
`src/pages/design-system/components/index.astro` (canonical usage examples
with realistic props for nearly every component — check here FIRST before
inventing composition) and direct source reads for props not demonstrated
there.

**Also fixed while reviewing the render check (not blank, but broken):**
`Spotify` was in the original clean-51 floor-card batch but rendered
Spotify's actual "Page not available" error page (invalid embed ID from the
floor card's crash-prevention defaults) — caught only by eyeballing the
contact sheet PNGs, not by the automated render check (a non-blank error
page passes it). Authored a preview with a real show ID
(`5dBTH298yyPuJVmileTsFK`, from the style-guide page) to fix it. **Lesson:
the render check is necessary but not sufficient — always eyeball the
contact sheets even for components that pass, especially ones with
external/network-dependent embeds (iframes, remote images).**

**YouTube** needed `import 'lite-youtube-embed/src/lite-yt-embed.js'` as a
side-effect import in its preview — the DS component renders a
`<lite-youtube>` custom element but never registers it itself (the site
registers it elsewhere at the app level), so the floor card and an
unmodified preview both rendered an inert, unstyled element. The registered
element still can't fetch the video thumbnail in this offline capture
environment (no network access during the headless render), so it shows a
black placeholder box rather than a real thumbnail — expected, not a bug.

**AmazonBook** fetches a real cover image from
`images-na.ssl-images-amazon.com` at render time (no offline placeholder
option — the src is derived internally from the ASIN). It rendered
correctly in this environment (network was available during the render
check), but if a future sync runs somewhere without network access, expect
`[RENDER_BLANK]` here and don't chase it as a real regression.

## Known render warns

None outstanding — all 76 components render cleanly as of this sync (26
authored + graded good, 50 floor cards, 0 bad/thin/identical).

## Re-sync risks

- The `componentSrcMap` exclusion list (49 names, see also the multi-export
  note above) is a manually maintained enumeration, not a directory
  boundary — a new file (or new export from an existing multi-export file)
  added to `design-system/`, `interactive/`, `site/`, or `icons/` will be
  picked up and included unless also added here.
- `cssEntry` depends on `dist/index.html` existing and Astro continuing to
  inline (not chunk) its compiled stylesheet — if that build behavior ever
  changes (e.g. a future Astro/Vite version splits CSS per page), the
  extraction script's size-sanity check will fail loudly rather than
  producing a truncated stylesheet.
- `AmazonBook`'s and `Spotify`'s authored previews depend on live network
  access at render/capture time (Amazon's cover-image CDN, Spotify's embed
  iframe) — a re-sync from a sandboxed/offline environment may show these
  as newly blank; that's the environment, not a regression in the source.
- Toolchain: built and verified with Node 22.13.1, esbuild + ts-morph pinned
  via `.ds-sync/package.json`, Playwright 1.60.0 / chromium-1223.
