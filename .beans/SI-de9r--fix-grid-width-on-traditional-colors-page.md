---
# SI-de9r
title: Fix grid width on Traditional Colors page
status: completed
type: bug
priority: normal
created_at: 2026-04-27T18:20:27Z
updated_at: 2026-04-27T18:25:46Z
parent: SI-dqg7
---

Page uses old GridLayout with grid='wide' and innerGrid. Needs migration to new layout pattern (BaseLayout + max-w-360 mx-auto container) as used by about.astro and writing.astro. Use PageSection for intro text, restructure books and ColorStack within the new container.

## Summary of Changes

Replaced GridLayout with BaseLayout. Adopted new layout pattern: max-w-360 mx-auto flex flex-col gap-16 px-8 pb-32 pt-16. Intro text wrapped in PageSection with 'Introduction' label. Books in a flex row section. ColorStack unchanged (col-start/col-end classes harmless outside grid context).
