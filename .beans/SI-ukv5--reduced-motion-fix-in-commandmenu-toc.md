---
# SI-ukv5
title: Reduced-motion fix in CommandMenu + TOC
status: todo
type: bug
created_at: 2026-05-16T12:28:49Z
updated_at: 2026-05-16T12:28:49Z
parent: SI-akaq
---

CommandMenu.tsx does not consult useReducedMotion — only the global CSS override at global.css:642-651 covers it. Add useReducedMotion hook, conditional duration+transform variants. TableOfContents AnimatePresence block hard-codes 0.25s duration; add reduced-motion check.
