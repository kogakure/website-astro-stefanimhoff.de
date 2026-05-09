---
# SI-n5p8
title: "Phase 5D: Work Page Redesign"
status: done
type: feature
priority: normal
created_at: 2026-04-09T21:32:14Z
updated_at: 2026-05-09T14:29:22Z
parent: SI-tfhf
blocked_by:
  - SI-e0w1
---

Implement the new /work page: large Boska page title, using the page grid, project grid/list with images and descriptions.

Reference: @specs/designs/Work.webp and @spec/designs/Work - Grid.webp (showing grids and spacing). All assets (if not yet in use) can be found in @specs/assets and should be moved to the @public/assets/images/projects (now "work") location.

- The collection "projects" in @src/content/projects should be renamed "work" accordingly in all places.
- The works that were removed on the screenshot can also be removed from the folder
- Ensure proper sorting of the work items
- The "showcase" section of the old page was removed and no Markdown file needs Markdown content, all information should be in the yaml frontmatter
- Create reusable components from the different item layouts (amount of photos, position in columns, etc. per section) that can be easily activated with some yaml keyword
- The screenshots show desktop size, develop reasonable grid positions and alignments for mobile and tablet

Use the design skill to make sure the page conforms with the Ma design system and design specification: @DESIGN.md

## Tasks

### Page title

- [x] Large Boska display 'Work'
- [x] Generous top spacing

### Projects layout

- [x] Each project: image (full width or constrained), title, description, tags/tech
- [x] Projects displayed in a stacked or grid layout matching the design
- [x] Project links (if external) shown clearly
- [x] Remove old ProjectContainer component or rework to match new design
- [ ] Check specs/assets/ for project images used in designs (XING, bamboo, etc.)
