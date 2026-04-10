---
# SI-s3sg
title: 'Bug: Dark mode not preserved on page navigation'
status: completed
type: bug
priority: high
created_at: 2026-04-10T07:33:00Z
updated_at: 2026-04-10T07:42:50Z
---

Theme flashes to light on each page navigation. The ThemeProvider uses astro:after-swap which applies the dark class AFTER the DOM swap — causing a brief flash of unstyled (light) content.

Fix: Add an astro:before-swap handler that copies the dark class from the outgoing document to the incoming document BEFORE the swap, preventing any flash.

File: src/components/ThemeProvider.astro
