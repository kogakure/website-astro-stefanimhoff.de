---
# SI-tfhf
title: "Phase 5: Layouts & Pages"
status: in-progress
type: epic
priority: normal
created_at: 2026-04-09T12:14:46Z
updated_at: 2026-04-22T18:15:37Z
---

**Goal:** Implement all pages and layouts using the new design.

### Layouts (React inside Astro)

- `BaseLayout.astro` — keep as Astro (handles SEO, head, script injection)
- `PageLayout.astro` — keep thin Astro wrapper, slot React content
- Convert inner grid/layout logic to React components

### Pages

**Homepage** (`src/pages/index.astro`):

- Hero: "Stefan Imhoff _is a_ **Design Engineer** _from_ **Hamburg**" (per spec)
- Japanese poem with horizontal scroll-parallax (Framer Motion scroll-linked)
- Latest essays grid (6 posts)
- Contact section
- Hover preview on essay titles (floating image follows cursor, Framer Motion)

**Writing** (`src/pages/writing.astro` — was `journal.astro`):

- Full list of posts with date, title, tags
- In-place tag filtering (React state, no page reload)
- Hover preview on title hover → floating cover image follows cursor
- Filter controls: Phosphor Funnel icon, multi-select tags
- URL reflects active filters (`?tag=design,code`)

**Writing Post** (`src/pages/writing/[...slug].astro` — was `[...slug].astro`):

- Full-bleed cover image (if present)
- Article with MDX components
- Reading time, word count, date, tags
- Series navigation
- Previous/Next post pagination

**Work** (`src/pages/work.astro` — was `projects.astro`):

- All projects on one page
- Each project: title, description, 1-3 images, categories, optional external link
- Remove individual project detail pages

**Haiku** (`src/pages/haiku.astro`):

- All haiku on single page (no individual pages)
- Layout: grid of haiku cards, German + English, date
- Generate haiku from YAML frontmatter (no change to schema needed)

**Other pages** (convert to use new components): `/about`, `/colophon`, `/tools`, `/now`, `/life-rules`, `/libertarianism`, `/imprint`, `/cv`

**404** page — keep but restyle

**Remove:**

- `src/pages/tag.astro`
- `src/pages/tag/[tag].astro`
- `src/pages/haiku/[...slug].astro`
- `src/pages/projects/[...slug].astro`

**Critical files:** All files in `src/pages/`, `src/layouts/`
