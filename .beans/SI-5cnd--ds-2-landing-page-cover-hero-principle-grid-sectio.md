---
# SI-5cnd
title: "DS-2: Landing page — cover, hero, principle grid, section index"
status: completed
type: task
priority: normal
created_at: 2026-05-02T17:57:41Z
updated_at: 2026-05-02T18:07:47Z
parent: SI-p04a
---

Create src/pages/design-system/index.astro. Cover image: public/assets/images/cover/ma.webp (2000x1300). Hero: Boska 'Ma 間' + kanji glyph (3+9 asymmetric). PrincipleCard components (7, 3+4 grid). Numbered section list with hover kanji (Yūgen). Move 0-index.mdx content here.

## Summary of Changes

- Created src/pages/design-system/index.astro with cover image (ma.webp), asymmetric hero (3+9 grid), seven PrincipleCard components in 3+4 Fukinsei grid, and numbered section index with hover kanji reveal
- Created src/components/design-system/PrincipleCard.tsx (kanji glyph, romaji, Japanese, gloss, principle number)
- Deleted src/pages/design-system.astro (retired, content folded into landing page)
- Build clean, all 13 sections listed in section index
