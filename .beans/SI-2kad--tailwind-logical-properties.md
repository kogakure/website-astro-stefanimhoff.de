---
# SI-2kad
title: Tailwind Logical Properties
status: completed
type: task
priority: normal
created_at: 2026-04-16T12:14:56Z
updated_at: 2026-05-12T16:34:20Z
parent: SI-tfhf
---

Search for all CSS Tailwind classes that don't use logical properties and update them to use logical properties instead. For example, instead of using `margin-left`, use `margin-inline-start`. This will help improve the accessibility and internationalization of our website. Use the new Tailwind CSS logical properties utilities to make the necessary changes.

## Todo

- [ ] Add missing logical utilities to global.css (inline-end, block-end, inline, border-is/ie)
- [ ] Tier 1 — inline-axis conversions (ml/mr, pl/pr, left/right, inset-x, text-left/right, border-l/r, rounded-l/r)
- [ ] Pullquote alignment prop refactor ('left' → 'start')
- [ ] Tier 2 — block-axis conversions (mt/mb, pt/pb, top/bottom, border-t/b)
- [ ] pnpm build verifies zero Tailwind warnings
- [ ] Visual smoke test in browser (homepage, about, writing slug, design-system)
