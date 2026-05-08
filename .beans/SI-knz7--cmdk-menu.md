---
# SI-knz7
title: CMDK Menu
status: completed
type: task
priority: normal
created_at: 2026-04-16T12:41:16Z
updated_at: 2026-05-08T17:19:27Z
parent: SI-tfhf
---

The CMDK Menu is already working functionally, but need to be styled according to the design specifications.

## Menu

The menu items should be (in order):

- Search (icon: some magnifying glass icon)
- HEADLINE: Navigation
- Home (icon: some house icon)
- About (icon: some info icon)
- Work (icon: some briefcase icon)
- Writing (icon: some pencil icon)
- HEADLINE: Links
- Haiku (icon: some leaf icon)
- Colophon (icon: some book icon)
- Tools (icon: some wrench icon)
- Now (icon: some clock icon)
- Traditional Colors of Japan (icon: some japanese related icon) (Not yet finally decided if a link)
- Libertarianism (icon: some flag or freedom related icon) (Not yet finally decided if a link)
- Life Rules (icon: some heart icon)
- Imprint (icon: some legal document icon)
- HEADLINE: Theme
- Switch to dark mode (icon: some moon icon) _or alternatively_ Switch to light mode (icon: some sun icon)

## Search

The current functionality mixes search for navigation items and search for content. This should be separated into two different search inputs, one for navigation items and one for content. The search results look different, showing a small cover image, the title and an excerpt of the text with the search term highlighted. This doesn't mix well with navigation search. When the user clicks on the search navigation item the modal content should switch in place and show the search instead. Same design for the search input. There should be somewhere a small back button or arrow icon to go back to the main menu.

## Summary of Changes

Rewrote `src/components/interactive/CommandMenu.tsx` with two-view architecture:

- **Menu view** (default, cmd+k / /): bare input, Search at top, Navigation group (Home, About, Work, Writing), Links group (Haiku, Colophon, Tools, Now, Traditional Colors of Japan, Libertarianism, Life Rules, Imprint), Theme toggle — all Phosphor icons
- **Search view** (header magnifier / Search item): back arrow returns to menu, Pagefind runs here only, dev mock results gated by `import.meta.env.DEV`, mark highlights styled with beni/20
- Input: no leading magnifier, no trailing X, `border-0` removes browser default border, ESC steps back / closes contextually
- Header magnifier dispatches `command-menu:open-search` event to enter search view directly
- `shouldFilter={view === 'menu'}` so cmdk fuzzy-filters nav in menu but not Pagefind results in search
