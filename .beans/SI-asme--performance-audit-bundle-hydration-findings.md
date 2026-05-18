---
# SI-asme
title: "Performance audit: bundle + hydration findings"
status: completed
type: task
priority: normal
created_at: 2026-05-15T16:53:17Z
updated_at: 2026-05-15T18:29:22Z
parent: SI-s2ga
---

client:load overuse, domMax, missing lazy loading, inline JSON payload issues found in src/

## Scope

`/Users/kogakure/Code/personal/websites/stefanimhoff-de/src/` — components/ (ui/, content/, interactive/, site/, icons/), layouts/, pages/, styles/, data/, lib/, utils/, schema/

## Findings

### high — `CommandMenu` uses `client:load` but opens only on user intent

- File: `src/layouts/BaseLayout.astro:180`
- Issue: Mounted on every page at load time, pulling in `cmdk`, `motion/react`, and Phosphor icons immediately — menu only opens on keyboard shortcut/button press.
- Fix: Change to `client:idle`; Pagefind bundle inside is already dynamically imported on first open.

### high — `HoverPreview` uses `client:load` on every page

- File: `src/layouts/BaseLayout.astro:181`
- Issue: Hydrates at page load site-wide, adding shadcn `Tooltip` + `TooltipProvider` portal to every route even those with no hoverable links.
- Fix: Change to `client:idle`.

### high — `TableOfContents` uses `client:load`; loads `domMax` motion bundle

- File: `src/pages/writing/[slug].astro:180`
- Issue: Uses `client:load` + `domMax` (heaviest motion feature set, ~15 KB extra vs `domAnimation`). TOC rendered in sticky aside — not above fold on mobile, requires no interaction before scroll.
- Fix: Change to `client:idle`. Downgrade `domMax` → `domAnimation` in `src/components/interactive/TableOfContents.tsx:4` if drag/layout animations unused.

### high — `WritingPage` ships all post data to client with no memoisation

- File: `src/pages/writing.astro:45` and `src/components/interactive/WritingPage.tsx:76–87`
- Issue: `filteredPosts`, `byYear`, `years` recomputed inline on every render; `toggleTag` recreated every render (no `useCallback`). Posts can be hundreds of entries.
- Fix: Wrap `filteredPosts`, `byYear`, `years` in `useMemo`; wrap `toggleTag` in `useCallback`.

### high — `SeriesStepper` uses `client:load` with `domMax`

- File: `src/pages/writing/[slug].astro:196` and `src/components/interactive/SeriesStepper.tsx:4`
- Issue: Conditionally rendered only for series posts but hydrates at load with `domMax`. Stepper is below article title — not critical-path interactive.
- Fix: Change to `client:idle`. Downgrade `domMax` → `domAnimation` if no drag gestures used.

### medium — `Book` component uses raw `<img>` with no `width`, `height`, or `loading`

- File: `src/components/content/Book.tsx:16`
- Issue: No intrinsic dimensions → CLS. No `loading="lazy"` means book covers eagerly fetched on bookshelf pages.
- Fix: Replace with Astro `<Image />` or add explicit `width`, `height`, and `loading="lazy"`.

### medium — `LightboxRoot` uses `client:load` on work and writing pages

- File: `src/pages/work.astro:36`, `src/pages/writing/[slug].astro:231`
- Issue: Loads `motion/react` at page load on every post, even posts with no figures.
- Fix: Change to `client:idle`; event-delegation model makes deferred hydration safe.

### medium — `EmailLink` uses `client:load` for copy-to-clipboard

- File: `src/pages/index.astro:104`, `src/pages/cv.astro:311`
- Issue: Loads shadcn `Tooltip` + `TooltipProvider` at page load for a single link only interactive on click.
- Fix: Change to `client:idle`.

### low — `DesignSystemLayout` `TableOfContents` uses `client:load`

- File: `src/layouts/DesignSystemLayout.astro:94`
- Issue: Same `client:load` + `domMax` pattern on a documentation-only route.
- Fix: Change to `client:idle`.

### low — `WritingPage` passes `posts` as serialised prop across island boundary

- File: `src/pages/writing.astro:45`
- Issue: All post metadata inlined into HTML as serialised JSON prop, bloating initial HTML payload. Can exceed 50 KB of inline JSON for large post counts.
- Fix: Move filtering server-side with URL-param-driven static pages, or confirm serialised payload size is acceptable.

## Summary

critical: 0, high: 4, medium: 3, low: 2
