---
# SI-zvy7
title: "Architecture audit: Astro islands + React boundaries"
status: todo
type: task
priority: normal
created_at: 2026-05-15T16:54:19Z
updated_at: 2026-05-15T16:54:19Z
parent: SI-s2ga
---

client:load overuse, EmailLink misplaced, InlineCode unregistered in MDX, DisplayHeadline missing, island bloat in WritingPage

## Scope

`src/` — all subdirectories: components/ (ui, content, interactive, site, design-system, icons), layouts/, pages/, content/, mdx-components.ts, utils/, lib/, data/, styles/.

## Findings

### high — `CommandMenu` and `HoverPreview` use `client:load` in base layout, shipped on every page

- File: `src/layouts/BaseLayout.astro:180-181`
- Issue: Both islands hydrate immediately on every page including static ones (404, imprint, cv). `HoverPreview` does nothing on mobile; `CommandMenu` is a keyboard shortcut overlay never needed before page is interactive.
- Fix: Change both to `client:idle`; `HoverPreview` could additionally be `client:only="react"` since it produces no SSR output.

### high — `EmailLink` stateful interactive component placed in `content/` instead of `interactive/`

- File: `src/components/content/EmailLink.tsx:1,24-26`
- Issue: Uses `useState` (two states) and `useRef`, implements tooltip + clipboard copy flow, requires `client:load` everywhere used. Not a passive MDX content block — it's an interactive island. Misclassification misleads contributors.
- Fix: Move `EmailLink` to `src/components/interactive/`.

### high — `TableOfContents` uses `client:load` on every post page; `client:idle` sufficient

- File: `src/pages/writing/[slug].astro:180` and `src/layouts/DesignSystemLayout.astro:94`
- Issue: Uses `IntersectionObserver` + scroll tracking — not needed before browser idle. Renders meaningful static HTML server-side; JS only needed for active-state highlighting. `motion/react` `LazyMotion + domMax` bundle blocks main thread at load.
- Fix: Change to `client:idle transition:persist`.

### high — `LightboxRoot` uses `client:load`; produces no SSR output

- File: `src/pages/work.astro:36`, `src/pages/writing/[slug].astro:231`, `src/pages/design-system/components/index.astro:1268`
- Issue: Renders nothing until an image is clicked; initial state is `null`. Zero benefit to eager hydration.
- Fix: Change to `client:idle transition:persist`.

### medium — `SeriesStepper` uses `client:load` instead of `client:visible`

- File: `src/pages/writing/[slug].astro:196`
- Issue: Below article title/cover — not in initial viewport on most posts. Conditional on `entry.data.series`. Hydrates `motion/react` animation bundle eagerly on scroll-offscreen element.
- Fix: Change to `client:visible transition:persist`.

### medium — `WritingPage` island is `client:load` and constitutes near-total page takeover

- File: `src/pages/writing.astro:45`
- Issue: Renders entire post list, tag filter, year groupings, navigation — island bloat. Only tag-filter interactivity requires client JS. Static list could render in Astro; `client:load` when `client:visible` would at minimum defer until viewport.
- Fix: Minimum: change to `client:visible`. Better: render post list statically in Astro; wrap only filter toggles in narrow interactive island.

### medium — `code` element unmapped in `mdx-components.ts`; `InlineCode` exists but unregistered

- File: `src/mdx-components.ts` (no `code:` entry); `src/components/content/InlineCode.tsx`
- Issue: Inline backtick code in MDX falls through to raw `<code>` element, losing `bg-kiri`, `dark:bg-code-1`, border, and `font-mono` styling. Component used directly in design-system page but invisible to MDX writing authors.
- Fix: Add `code: InlineCode` to mapping object in `src/mdx-components.ts`.

### medium — `DisplayHeadline` referenced in CLAUDE.md does not exist

- File: `src/components/ui/` (no `DisplayHeadline.tsx`)
- Issue: CLAUDE.md documents `DisplayHeadline` as substitute for `<h2>` in display contexts; no such file exists. Contributors following docs will import a non-existent component.
- Fix: Create `DisplayHeadline` as alias/wrapper over `Headline` with display styling, or remove from CLAUDE.md.

### low — `PageTitle` in `site/` but has no Astro-specific API dependencies

- File: `src/components/site/PageTitle.astro`
- Issue: No `Astro.url`, `getCollection`, `is:inline`, or `is:global` usage. CLAUDE.md states `site/` is for Astro-API-dependent components; `PageTitle` does not qualify. Cannot be server-rendered inside React trees.
- Fix: Convert to TSX in `ui/` consistent with `Title`, `Headline`, etc., or document deliberate exception.

## Summary

critical: 0, high: 3, medium: 4, low: 1
