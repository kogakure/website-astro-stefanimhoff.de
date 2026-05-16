---
# SI-mpgh
title: Paralax scrolling on "Work" page
status: todo
type: task
priority: normal
created_at: 2026-04-16T12:38:09Z
updated_at: 2026-05-16T12:29:01Z
parent: SI-akaq
---

The different images on the "Work" page should have a subtle paralax movement when the user scrolls down the page. In case that a project has 2 to or more images, some should go slightly up and others down.

This can be done either the (Framer) Motion library or possibly the [Ukiyo](https://ukiyo-js.dev/) paralax library.

## Implementation plan (added 2026-05-16)

Use Framer Motion `useScroll` + `useTransform`. Create `src/components/interactive/motion/WorkImageParallax.tsx` island. Refactor `WorkImage.astro` to use it. Consolidate inline-img variants (WorkItemFeatured, WorkItemGallery3, WorkItemFullBleed, WorkItemImageInset) to use WorkImage. Pass `index` from `work.astro` map through WorkItem dispatcher. Intensity ±16-20 px; 2-img: up/down; 3-img: up/down/up; single-img: index%2. Reduced-motion: plain div passthrough.
