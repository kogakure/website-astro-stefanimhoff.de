---
# SI-tvza
title: Remove parallax from work images, replace with per-image fade-in
status: completed
type: task
priority: normal
created_at: 2026-05-16T13:51:32Z
updated_at: 2026-05-16T13:55:26Z
---

Parallax barely noticeable, breaks third image alignment. Replace WorkImageParallax with WorkImage using whileInView fadeUp per-image stagger.

## Summary of Changes

- Created WorkImage.tsx: stripped useScroll/useTransform parallax, replaced with whileInView fadeUp using existing useMotionPreset() from lib/motion.ts
- Deleted WorkImageParallax.tsx (orphaned, no longer imported)
- Updated 7 WorkItem\*.astro variants: renamed import, dropped direction prop
- WorkItemFullBleed/ImageInset: also removed unused const direction variable
- TypeScript: no errors
- Verified visually: images fade in on viewport enter, gallery layouts aligned correctly
