---
# SI-2q7n
title: Add and update plop templates
status: completed
type: task
priority: normal
created_at: 2026-05-14T17:03:50Z
updated_at: 2026-05-14T17:21:39Z
---

The website uses plop (@plopfile.cjs and @plop/) to generate new content. Currently only @plop/post exists.

The new website has new types and each (@src/content, except design-system) should be able to generate with plop:

- Articles
- Audiobooks
- Books
- Haiku
- Organizations
- Podcasts
- Videos
- Work

The writing template should also be renamed and checked if it still has the same properties as the post.

## Implementation checklist

- [x] Inspect existing content schemas and plop setup
- [x] Add generators/templates for each content collection
- [x] Rename/update writing template
- [x] Validate generation and type checks

## Summary of Changes

- Replaced the old Post generator with a Writing generator and renamed the template directory.
- Added Plop generators and templates for articles, audiobooks, books, haiku, organizations, podcasts, videos, and work.
- Added shared prompts/helpers for schema-aligned frontmatter, slugs, dates, URLs, arrays, and haiku numbering.
- Updated the content generation command docs.
