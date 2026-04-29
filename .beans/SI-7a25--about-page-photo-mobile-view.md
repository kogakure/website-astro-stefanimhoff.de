---
# SI-7a25
title: About page photo mobile view
status: completed
type: task
priority: normal
created_at: 2026-04-25T14:42:26Z
updated_at: 2026-04-29T10:18:37Z
parent: SI-4xvy
---

The photo should have no rounded corners in the mobile view of the about page when it touched the edge of the screen. Remove the rounded corners that touch the edge.

## Summary of Changes

Changed `rounded-2` to `rounded-r-2 md:rounded-2` on the portrait `<img>` in `src/pages/about.astro`. On mobile the image bleeds left via `-ml-8`, so left corners are now square; all corners rounded from `md` breakpoint up.
