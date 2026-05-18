---
# SI-vh9x
title: 'Bug: Hero horizontal rule should be a crimson em-dash, not a border line'
status: completed
type: bug
priority: normal
created_at: 2026-04-10T07:33:06Z
updated_at: 2026-04-10T07:42:50Z
---

The long thin line after 'Hamburg' in the hero is rendered as a flex-1 border-b element. Per design, it should be a short crimson/beni colored em-dash (—) followed by a longer horizontal rule in the same beni color.

Looking at the design spec (specs/designs/Homepage.webp), after 'Hamburg' there is: a space, then a short decorative horizontal line in beni/crimson.

Fix in: src/pages/index.astro — replace the flex-1 border span with a beni-colored horizontal rule or em-dash element.
