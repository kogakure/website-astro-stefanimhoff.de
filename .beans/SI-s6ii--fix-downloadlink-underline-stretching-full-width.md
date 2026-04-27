---
# SI-s6ii
title: Fix DownloadLink underline stretching full width
status: completed
type: bug
priority: normal
created_at: 2026-04-27T18:20:27Z
updated_at: 2026-04-27T18:25:14Z
parent: SI-dqg7
---

DownloadLink component wraps text + icon in TextLink. TextLink uses background-gradient underline that stretches to 100% on hover. Underline should only appear under text, not under the icon or stretch beyond content. Fix: either use inline wrapper for text-only underline, or adjust the gradient approach.

## Summary of Changes

Replaced TextLink with Link in DownloadLink.tsx. Wrapped only the text span with underline gradient classes (bg-gradient underline approach from TextLink). Icon span remains outside underline scope. Link uses inline-flex items-baseline so icon aligns with text baseline without being underlined.
