---
# SI-ssda
title: Create table family (Table, TableHead, TableBody, TableRow, TableHeaderCell, TableCell)
status: completed
type: task
priority: normal
created_at: 2026-04-26T07:35:54Z
updated_at: 2026-04-26T11:24:09Z
parent: SI-3bqs
---

Six thin styled wrappers in src/components/ui/. Reasonable GFM table styling: bordered, padded cells, header row distinction. All follow same TSX pattern.

## Summary of Changes

Component created at src/components/ui/. Follows existing pattern: cn() merge, HTMLAttributes typing, named + default export.
