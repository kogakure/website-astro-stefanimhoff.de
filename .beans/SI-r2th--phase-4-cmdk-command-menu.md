---
# SI-r2th
title: "Phase 4: CMDK Command Menu"
status: completed
type: epic
priority: normal
created_at: 2026-04-09T12:14:46Z
updated_at: 2026-04-16T13:01:14Z
---

## Phase 4 — CMDK Command Menu

**Goal:** Replace separate navigation/search modals with unified CMDK command palette.

### Architecture

- **Trigger:** Click logo/nav button OR `Cmd+K` / `Ctrl+K`
- **Content groups:**
  1. Navigation (Writing, Work, Haiku, About, Colophon, Tools, Now)
  2. Pagefind search results (live search as user types)
  3. Theme toggle command
- **Custom search layout:** Pagefind JS API (not the default UI) called inside CMDK's input `onValueChange`

### Steps

1. Create `src/components/navigation/CommandMenu.tsx`:
   - `<Command>` dialog from cmdk
   - Framer Motion for open/close animation (opacity + translateY, 300ms --ease-enter)
   - Navigation items with Phosphor icons
   - Search input connected to Pagefind JS API
   - Results rendered as `<CommandItem>` components
2. Create `src/components/navigation/SearchResults.tsx` — renders Pagefind results
3. Trigger via Astro `<script>` or React context for keyboard shortcut
4. Keyboard shortcut: global `keydown` listener for `Cmd+K`
5. Focus management: trap focus inside modal, return on close (accessibility spec)

### Pagefind integration

- Build step: `pagefind --site dist` (unchanged)
- Runtime: import `pagefind.js` dynamically (`await import('/pagefind/pagefind.js')`)
- Call `pagefind.search(query)` in CMDK input handler
- Map results to custom result component (excerpt, title, URL)

**Critical files:** `src/components/navigation/CommandMenu.tsx`, `astro.config.mjs` (pagefind build step)
