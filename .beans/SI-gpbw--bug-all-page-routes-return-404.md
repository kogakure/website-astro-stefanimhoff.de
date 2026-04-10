---
# SI-gpbw
title: 'Bug: All page routes return 404'
status: completed
type: bug
priority: critical
created_at: 2026-04-10T07:32:55Z
updated_at: 2026-04-10T07:42:50Z
---

All URLs except homepage return 404. Root cause: src/pages/[...slug].astro uses `entry.slug` (old Astro API) but the new content layer loader only provides `entry.id`. With undefined slugs, getStaticPaths generates no valid routes.

Fix: Replace all `entry.slug` references in [...slug].astro with `entry.id`. Also fix Pagination hrefs (next.slug → next.id) and internal links.

Files to fix:
- src/pages/[...slug].astro — params slug, all entry.slug/next.slug/prev.slug/item.slug references
