---
# SI-2a60
title: Replace raw <p>/<hr> in WritingPage.tsx with Text/Divider
status: todo
type: task
created_at: 2026-04-26T07:36:13Z
updated_at: 2026-04-26T07:36:13Z
parent: SI-0ph1
---

src/components/interactive/WritingPage.tsx — line 97 (<p className=text-3 leading-relaxed>) and 165 (<p className={contentCol} text-3 text-hai>) → <Text>. Line 138 (<hr className=border-shibui-300>) → <Divider>. Skip <section> elements (layout grids, not content semantics).
