---
# SI-pq18
title: Replace raw <p> in Pullquote.tsx with Text
status: todo
type: task
created_at: 2026-04-26T07:36:14Z
updated_at: 2026-04-26T07:36:14Z
parent: SI-0ph1
---

src/components/content/Pullquote.tsx:34 — <p dangerouslySetInnerHTML={{__html: text}} /> → <Text dangerouslySetInnerHTML={...} />. Keep <footer>, <b>, <cite> as semantic HTML.
