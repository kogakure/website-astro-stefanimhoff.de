---
# SI-jj7k
title: Redesign Book/AmazonBook components for design system
status: completed
type: task
priority: normal
created_at: 2026-04-27T18:20:33Z
updated_at: 2026-04-27T18:24:52Z
parent: SI-dqg7
---

Current Book.tsx uses heavy 3D effects: image-shadow class (scale on hover), shadow-book (heavy box shadow), pseudo-element spine simulation. Too skeuomorphic for current flat design system. Redesign to be cleaner: subtle shadow, rounded corners, gentle hover transition. Remove spine pseudo-element. Keep the clickable link functionality in AmazonBook.

## Summary of Changes

Rewrote Book.tsx: removed image-shadow, shadow-book, spine pseudo-element. Now uses rounded-2, border border-black/5 dark:border-white/5, shadow-sm, hover:shadow-md, transition-shadow. Removed --shadow-book, --shadow-book-before, --shadow-book-after vars from global.css (only used by Book).
