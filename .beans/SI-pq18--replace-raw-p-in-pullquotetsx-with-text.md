---
# SI-pq18
title: Replace raw <p> in Pullquote.tsx with Text
status: completed
type: task
priority: normal
created_at: 2026-04-26T07:36:14Z
updated_at: 2026-04-26T11:27:51Z
parent: SI-0ph1
---

src/components/content/Pullquote.tsx:34 — <p dangerouslySetInnerHTML={{__html: text}} /> → <Text dangerouslySetInnerHTML={...} />. Keep <footer>, <b>, <cite> as semantic HTML.

## Summary of Changes

Replaced raw <p dangerouslySetInnerHTML> in src/components/content/Pullquote.tsx:34 with <Text dangerouslySetInnerHTML>. Imported Text from '../ui/Text'.
