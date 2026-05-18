---
# SI-jo37
title: Fix MainNavigation hover styling to use underline per spec
status: completed
type: task
priority: normal
created_at: 2026-04-26T06:32:14Z
updated_at: 2026-04-26T07:09:21Z
---

Current hover uses opacity-60 dimming. Spec requires beni underline on hover (matching active state). Fix: remove transition-opacity/hover:opacity-60, add hover:underline to base classes, move decoration-beni/underline-offset-4 to base.
