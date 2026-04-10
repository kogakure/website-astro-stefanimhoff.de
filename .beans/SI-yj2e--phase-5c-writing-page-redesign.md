---
# SI-yj2e
title: 'Phase 5C: Writing Page Redesign'
status: todo
type: feature
priority: normal
created_at: 2026-04-09T21:32:06Z
updated_at: 2026-04-09T21:32:44Z
blocked_by:
    - SI-e0w1
---

Implement the new /writing page: large Boska page title, two-column sections (INTRODUCTION, FILTER, year groups), in-place tag filtering, essays grouped and sorted by year. Reference: specs/designs/Writing.webp

## Tasks

### Page title
- [ ] Large Boska italic/display 'Writing' heading (similar size to homepage hero)
- [ ] Generous top spacing matching design

### INTRODUCTION section (two-column)
- [ ] Left: 'INTRODUCTION' label (uppercase, muted)
- [ ] Right: intro paragraph text from specs/texts/Writing.md

### FILTER section (two-column)
- [ ] Left: 'FILTER' label
- [ ] Right: tag list — small text, dot separators, clickable for in-place filtering
- [ ] Active tag shown highlighted, click to deselect
- [ ] Horizontal rule below filter section

### Essays list by year (two-column)
- [ ] Left: year label (e.g. '2026', '2025') in muted color
- [ ] Right: list of essay titles with em-dash prefix
- [ ] Em-dash in beni/crimson, title as plain link
- [ ] Sorted newest first, grouped by year
- [ ] Filter hides non-matching entries (no page reload)
