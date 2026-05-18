---
# SI-0sso
title: Sync DESIGN.md with real Ma implementation
status: completed
type: task
priority: normal
created_at: 2026-05-14T17:32:30Z
updated_at: 2026-05-14T17:37:28Z
---

DESIGN.md is truncated and contains stale claims. Audit confirmed: journal cards removed, shadow tokens changed, shadcn primitives mostly absent, text-8 size wrong (96px not 72px), motion tokens undocumented, component subdirs incomplete, legacy color entries already gone. Doc-only change.

## Summary of Changes

Updated `DESIGN.md` to match real Ma implementation:

- YAML: h1-blog-title fontSize 72px → 96px (matches --text-8 clamp in global.css)
- YAML: removed card-journal component entry (no longer exists)
- Technical Context: updated Styling and Component library bullets to reflect Tailwind v4 @variant dark, @utility blocks, and actual shadcn adoption (switch + tooltip only); noted tailwindcss-logical/opentype not installed
- Legacy Colours: removed --color-marked and --color-accent (already gone); updated --color-shibui note to reflect still-active usage
- Typography table: text-8 max size 72px → 96px
- Elevation & Depth: replaced --shadow-subtle/--shadow-img/journal-card hover with real exception: --shadow-beveled for kbd only
- Shapes table: removed 'journal cards' from radius-4 use description
- NEW Motion section: Easing and Duration tables with all 8 tokens and use notes
- Components section: rewritten from scratch — six subdirs (added design-system/, icons/), accurate component lists, shadcn rule updated to 'used selectively', Buttons describes design intent (no impl), Links documents three components, Cards removes journal-card content
- File truncation resolved: file now ends with complete sentence
