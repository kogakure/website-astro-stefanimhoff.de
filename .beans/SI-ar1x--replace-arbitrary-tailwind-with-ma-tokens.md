---
# SI-ar1x
title: Replace arbitrary Tailwind [values] with Ma tokens
status: completed
type: task
priority: normal
created_at: 2026-05-14T18:00:00Z
updated_at: 2026-05-15T18:53:16Z
---

Audit of `src/layouts/`, `src/components/`, `src/pages/`. Found **155** arbitrary-value `[...]` Tailwind classes. 65 are in `design-system/` specimen files (excluded by design). 90 in production. Phase A + B applied; Phase C stay-list below for review.

## Applied (Phase A — exact token matches)

- 9× `ease-[cubic-bezier(0,0,0.38,0.9)]` → `ease-enter` (MarkdownImage, Image, 5× work/Work\*.astro)
- 3× `border-[1px]` → `border-1` (ColorSwatch, ColorSwatchMini, ColorSwatchPrimary)
- 2× `rounded-[2px]` → `rounded-1` (tooltip.tsx, CommandMenu.tsx `[&_mark]`)
- 6× hex colors in DoughnutChart.tsx → Ma tokens (`border-usuzumi`, `bg-washi`, `dark:border-nezumi`, `dark:bg-yoru`, `text-sumi`, `dark:text-washi`)
- `text-[2.5rem]` → `text-5` in DesignSystemLayout.astro kanji strip (exact: 40px)
- `text-[clamp(2.5rem,6vw,4.5rem)]` → `text-8` in 404.astro Title (near-exact; vw 6→5, visually equivalent)

## Applied (Phase B — placeholder color fix)

`Flag.tsx` flagClasses: CSS named colours `[darkgrey]`/`[lightgrey]` replaced with Ma tokens:

- `border-[darkgrey]` → `border-usuzumi`
- `bg-[lightgrey]` → `bg-kiri`
- `dark:bg-[lightgrey]/80` → `dark:bg-yoru/80`

This also affects NetflixFlag, PrimeVideoFlag, AppleTVFlag which inherit the base Flag classes.

---

## Stay list — review required (Phase C)

Each entry has a reason. Use this list to decide whether to introduce new tokens or accept the arbitrary value.

### Below-scale text sizes (no Ma token exists)

`text-2` (14px) is the smallest Ma text token. These are intentionally smaller:

- `text-[9px]` / `text-[10px]` / `text-[11px]` — 51 occurrences, mostly `src/components/design-system/` specimen labels. Deliberately off-scale for spec annotation. **Exclude from refactor.**
- `text-[0.7em]` — Badge/Flag label (Flag.tsx, NetflixFlag, PrimeVideoFlag, AppleTVFlag), kbd shortcut hints in CommandMenu.tsx (3×). Em-relative to host element.
- `text-[0.75em]` — Subscript.tsx, Superscript.tsx. Standard sub/sup sizing.
- `text-[0.8em]` — DesignSystemNav.astro nav label caption.
- `text-[1.25rem]` — ColorSwatch.tsx, ColorSwatchPrimary.tsx kanji overlay (20px; between `text-3` 18px and `text-4` 28px).
- `text-[0]` — Logo.astro, ThemeToggle.astro (icon-only link text-hide pattern). **Could move to `global.css` utility `.sr-hide`.**

### Micro-interaction scale/brightness (no tokens)

`scale-[1.01]`, `brightness-[1.03]`, `scale-[0.97]` — all hover/active micro-feedback. Used across MarkdownImage, Image, all Work\* components, ClearFiltersButton. Consider defining `scale-hover` / `scale-press` tokens if standardizing.

### Display heading typography (spec values but no token)

Line-heights and tracking values match the DESIGN.md spec but have no Tailwind token:

| class                | location                                                | spec reference     |
| -------------------- | ------------------------------------------------------- | ------------------ |
| `leading-[0.92]`     | Title.tsx                                               | near text-9 (0.95) |
| `leading-[0.95]`     | 404.astro                                               | text-9 spec        |
| `leading-[1.0]`      | writing/[slug].astro                                    | text-8 spec        |
| `leading-[1.05]`     | index.astro                                             | display override   |
| `leading-[1.3]`      | writing/[slug].astro                                    | lead paragraph     |
| `tracking-[-0.04em]` | DesignSystemLayout, design-system/index, writing/[slug] | H1 display         |
| `tracking-[-0.05em]` | writing/[slug].astro                                    | lead paragraph     |
| `tracking-[-0.02em]` | design-system/index.astro                               | body tight         |

**Candidate:** Add `tracking-display` / `tracking-heading` / `tracking-body-tight` and `leading-display` / `leading-tight-display` to `global.css @theme` and surface as Tailwind utilities.

### Bespoke fluid display steps (one-off clamp values)

Each of these pages uses a custom `clamp()` step not represented by any Ma token:

| class                                    | location                      | note                               |
| ---------------------------------------- | ----------------------------- | ---------------------------------- |
| `text-[clamp(3rem,10vw,9rem)]`           | Title.tsx:11                  | different min from text-9 (4.5rem) |
| `text-[clamp(3rem,6vw,7.5rem)]`          | JapanesePoem.tsx:11           | Japanese display step              |
| `text-[clamp(8rem,28vw,22rem)]`          | 404.astro:25                  | hero "迷" kanji mark               |
| `text-[clamp(3rem,8vw,7rem)]`            | design-system/index.astro:111 | index hero                         |
| `text-[clamp(1.5rem,3vw,2.5rem)]`        | design-system/index.astro:217 | card titles                        |
| `text-[clamp(1.25rem,2.083vw,1.875rem)]` | writing/[slug].astro:123      | lead paragraph                     |

**Candidate:** Add `text-display` (hero kanji) and `text-lead` (lead paragraph) tokens.

### Em-based padding / margin (no rem equivalent)

These are all relative to their local font-size context — correct behavior, no Ma token can replace them:

- `pli-[0.3em] pbs-[0.1em]` — Flag.tsx, NetflixFlag, PrimeVideoFlag, AppleTVFlag
- `pli-[0.25em] pbe-[0.05em]` — Marked.tsx
- `pli-[0.4em] py-[0.15em]` — InlineCode.tsx (inline code padding)
- `h-[0.6em]` — MoreLink.tsx, EmailLink.tsx (icon height relative to text)
- `-block-start-[0.3em]` — Ruby.tsx positioning
- `underline-offset-[0.2em]` — Inserted.tsx
- `inset-bs-[0.2em] ms-[0.2em]` — DownloadLink.tsx icon alignment
- `pis-[1.5em]!`, `ms-[0.2em]` — writing/[slug].astro `@apply` block (list indent)

### Sub-4px spacing values (below spacing scale)

The Ma spacing scale starts at 4px (`spacing-1`). These fill gaps at 2px and 6px:

| class            | value | locations                                          |
| ---------------- | ----- | -------------------------------------------------- |
| `pbl-[0.125rem]` | 2px   | Badge.tsx, SeriesStepper.tsx, RoadmapMilestone.tsx |
| `mbs-[0.125rem]` | 2px   | SeriesStepper.tsx, RoadmapMilestone.tsx            |
| `pbl-[0.375rem]` | 6px   | SeriesStepper.tsx, TableOfContents.tsx             |
| `pli-[0.625rem]` | 10px  | ClearFiltersButton.tsx (with pbl 2px)              |

**Candidate:** Add `--spacing-px` (1px), `--spacing-px2` (0.125rem/2px), `--spacing-px6` (0.375rem/6px) to the Ma spacing scale. Would eliminate ~10 occurrences.

### Optical baseline nudge (repeated 8×)

`md:pt-[0.35em]` / `md:pbs-[0.35em]` appears 8 times for the same purpose — optical baseline correction where a large Boska heading sits next to smaller content:

- PageSection.tsx:17, HomepagePageSection.tsx:17, WritingPage.tsx:91
- libertarianism.astro:115, 143, 171, 200
- about.astro:36

**Strong candidate:** Add `pbs-optical` utility to `global.css` (`padding-block-start: 0.35em`). Eliminates all 8 occurrences.

### Responsive grid patterns

`grid-cols-[repeat(auto-fill/fit,minmax(NNNpx,1fr))]` with different min widths:

| min width | locations                         |
| --------- | --------------------------------- |
| 150px     | ColorStack.tsx, Bookshelf.tsx     |
| 220px     | traditional-colors-of-japan.astro |
| 250px     | libertarianism.astro (3×)         |
| 280px     | libertarianism.astro (1×)         |

`gap-[20px]` (= Tailwind `gap-5`) also present in ColorStack and Bookshelf.

**Candidate:** Extract a `<ResponsiveGrid minColWidth>` React component, or define `grid-cols-stack-sm/md/lg` recipe classes.

### Remaining individual cases

| class                                                                       | location                                   | reason to keep                                                                                         |
| --------------------------------------------------------------------------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `text-[125%]`                                                               | BaseLayout.astro:61                        | Root font-size for rem cascade. Consider moving to `global.css :root {}`.                              |
| `max-w-[60ch]`                                                              | cv.astro:47, design-system/index.astro:115 | Should be Tailwind `max-w-prose` (65ch) if character target matches; otherwise define `max-w-measure`. |
| `h-[clamp(40px,3vw,55px)] w-[clamp(40px,3vw,55px)]`                         | Logo.astro:13                              | Bespoke logo fluid size. Candidate for `size-logo` token.                                              |
| `min-w-[40px]`                                                              | Tag.tsx:12                                 | 40px = `--spacing-clickarea`. Could use `min-w-clickarea` once that utility is wired.                  |
| `z-[51]` / `z-[52]`                                                         | LightboxRoot.tsx                           | No z-index scale defined.                                                                              |
| `block-start-[10vh] w-[calc(100%-2rem)] max-h-[60vh]`                       | CommandMenu.tsx                            | Viewport-relative positioning. Keep.                                                                   |
| `bg-size-[0%_1px] bg-position-[0_100%] hover:bg-size-[100%_1px]`            | TextLink.tsx, DownloadLink.tsx             | Underline-draw animation. No size token equivalent.                                                    |
| `rounded-[0.3em]`                                                           | InlineCode.tsx                             | Em-relative radius, intentional.                                                                       |
| `border-[1.5px]`                                                            | TouchTargetOverlay.tsx                     | Specimen only.                                                                                         |
| `p-[1em]`                                                                   | BaseLayout.astro:190                       | Em-based code block padding in `@apply`.                                                               |
| `aspect-[2/3]`                                                              | Book cards                                 | Tailwind v4 first-class arbitrary. Fine.                                                               |
| `focus-visible:ring-[3px]` / `h-[1.15rem]` / `translate-x-[calc(100%-2px)]` | switch.tsx                                 | shadcn/ui defaults. Only touch if redesigning the control.                                             |
| `translate-y-[calc(-50%-2px)]`                                              | tooltip.tsx                                | Radix geometry. Keep.                                                                                  |
