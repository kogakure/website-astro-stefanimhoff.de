---
# SI-yj2e
title: "Phase 5C: Writing Page Redesign"
status: completed
type: feature
priority: normal
created_at: 2026-04-09T21:32:06Z
updated_at: 2026-04-10T12:15:13Z
parent: SI-tfhf
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

## Summary of Changes

- Removed from h1 (design shows upright bold display type)
- Grid: replaced custom with proper 3/6/12-column grid matching the site-wide system (same as PageSection)
- hr: moved out of filter section content div, placed as standalone flex sibling with to tighten the gap above while keeping below — fixes the asymmetric spacing
- localStorage: filter selection persists via key ; URL params take priority (direct links still work), localStorage used as fallback on mount; cleared when filter is reset
