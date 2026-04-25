---
# SI-to2g
title: "Phase 5B: Homepage Redesign"
status: in-progress
type: feature
priority: normal
created_at: 2026-04-09T21:31:58Z
updated_at: 2026-04-25T14:55:42Z
parent: SI-tfhf
blocked_by:
  - SI-e0w1
---

Implement the new homepage layout: large hero headline with mixed Boska bold/italic, two-column sections (ABOUT, WORK, WRITING, LATEST ESSAYS, CONTACT), full-width Japanese haiku marquee band, and latest essays list. Reference: specs/designs/Homepage.webp

## Tasks

### Hero section

- [x] Large display heading using Boska font (text-8 or text-9)
- [x] Mixed bold/italic: **Stefan Imhoff** _is a_ **Design Engineer** _from_ **Hamburg**
- [x] Horizontal rule (sumi/washi) after last line — extends to right edge via flex-1
- [x] 128px top margin above heading, 128px bottom margin below (pt-32 pb-32)

### Content sections (two-column: label + content)

- [x] ABOUT: short paragraph + 'About →' CTA link (bold)
- [x] WORK: short paragraph + 'See selected work →' CTA link
- [x] WRITING: paragraph + 'Read the journal →' + 'Subscribe to RSS Feed →' links
- [x] LATEST ESSAYS: list of 9 most recent posts with em-dash prefix
- [x] CONTACT: hey@stefanimhoff.de email link + arrow

### Haiku marquee band

- [x] Full viewport-width horizontal scrolling band
- [x] Japanese text: 無限の沈黙である私はお前に言葉を與へてやろう
- [x] Large Boska display font, crimson/beni color
- [x] Continuous auto-scroll animation (left), no pause (CSS keyframe)
- [x] Placed between WORK and WRITING sections

### CTA Link component

- [x] Bold text + crimson arrow (→)

### Latest essays list

- [x] Em-dash (—) prefix in beni color, plain title links, no dates

## Summary of Changes

Complete rewrite of `src/pages/index.astro`:

- Replaced old bonsai image + multi-column grid with new editorial layout
- Hero: large Boska display heading with bold/italic mix, flex-based horizontal rule
- Two-column sections via `PageSection.astro` (ABOUT, WORK, WRITING, LATEST ESSAYS, CONTACT)
- Haiku marquee band: full-width overflow-hidden container with CSS infinite scroll animation
- Latest 9 posts listed with em-dash prefix in beni color
- Clean `BaseLayout` without the old GridLayout wrapper
