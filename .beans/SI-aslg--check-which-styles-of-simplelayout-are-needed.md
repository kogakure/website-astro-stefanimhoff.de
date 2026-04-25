---
# SI-aslg
title: Check which styles of SimpleLayout are needed
status: todo
type: task
priority: high
created_at: 2026-04-25T14:46:56Z
updated_at: 2026-04-25T14:49:25Z
---

The SimpleLayout has a lot of inline styles that use more than positional properties, as colors etc. As components in MDX pages ar mapped to the Markdown elements, many of these styles might not needed. Please check if a mapping exists in mdx-components and if some inline styles can be removed.
