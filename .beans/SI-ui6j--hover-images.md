---
# SI-ui6j
title: Hover images
status: todo
type: task
priority: normal
created_at: 2026-04-16T12:33:53Z
updated_at: 2026-04-22T18:16:26Z
parent: SI-akaq
---

When the user hovers over the list of blog posts titles, a small thumbnail of the cover image of the post should be shown and stick to the mouse cursor as long as the user is hovering over the title. The thumbnail should disappear when the user moves the mouse away from the title. This feature will enhance the user experience by providing a visual preview of the blog post content, making it easier for users to decide which post to read.

In case that the blog post has no cover image, a default thumbnail should be shown instead.

There is currently already already a folder with thumbnails in @public/assets/images/thumbnails, but they are in the wrong aspect ratio.

The script that generates these thumbnails is @thumbnails-generate.cjs.

Open Question: Should these thumbnails be continued to generated upfront (but in different size and format) or be generated with Astro images later? Maybe starting with static and later when dealing with image generation the task can be touched again.
