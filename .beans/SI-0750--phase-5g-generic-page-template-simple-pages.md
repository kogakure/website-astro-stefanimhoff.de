---
# SI-0750
title: 'Phase 5G: Generic Page Template & Simple Pages'
status: todo
type: feature
priority: normal
created_at: 2026-04-09T21:32:37Z
updated_at: 2026-04-09T21:32:44Z
blocked_by:
    - SI-e0w1
---

Create a reusable layout template for simple content pages (Colophon, Tools, Now) matching the new design: large Boska title, two-column section pattern. Reference: specs/designs/Tools (generic page example).webp and specs/designs/Colophon.webp

## Tasks

### Generic page layout
- [ ] Large Boska display heading (page title)
- [ ] Content area using two-column section pattern
- [ ] Works for MDX content pages (colophon, tools, now, life-rules)

### Colophon page (/colophon)
- [ ] Update to use new layout pattern
- [ ] Ref: specs/designs/Colophon.webp and specs/texts/Colophon.md

### Tools page (/tools)
- [ ] Update to use new layout pattern
- [ ] Ref: specs/designs/Tools (general page example).webp and specs/texts/Tools.md

### Now page (/now)
- [ ] Update to use new layout pattern

### Writing post pages ([...slug].astro)
- [ ] Post with cover image: large hero image + title overlay — specs/designs/Writing - Post (cover).webp
- [ ] Post without cover: title + body — specs/designs/Writing - Post (no cover).webp
- [ ] Reading typography: comfortable line length (~65ch), generous leading
