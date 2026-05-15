---
# SI-nwez
title: "QA review: src/ code-quality findings"
status: todo
type: task
priority: normal
created_at: 2026-05-15T16:55:16Z
updated_at: 2026-05-15T16:55:16Z
parent: SI-s2ga
---

dangerouslySetInnerHTML unsanitised, unescaped haiku in RSS XML, post.body null guard missing, sortMarkdownByDate dead code, wordCount off-by-one

## Scope

`src/components/`, `src/layouts/`, `src/pages/`, `src/utils/`, `src/lib/`, `src/data/`, `src/styles/`, `src/content.config.ts`, `src/mdx-components.ts`

Note: All 381 existing tests pass.

## Findings

### medium — Unescaped haiku content injected into RSS XML as raw HTML

- File: `src/pages/rss.xml.js:92` and `src/pages/rss-haiku.xml.js:21`
- Issue: `item.data.de` and `item.data.en` interpolated directly into HTML string without escaping. `<`, `>`, `&` in field values produce malformed XML; Zod-validated strings would still emit verbatim.
- Fix: Pass both fields through `escapeHtml()` helper (already in `rss-parser.ts`) before templating.

### medium — `Pullquote` renders `text` prop via `dangerouslySetInnerHTML` without sanitisation

- File: `src/components/content/Pullquote.tsx:36`
- Issue: `dangerouslySetInnerHTML={{ __html: text }}` — `text` is a raw MDX prop. An MDX author passing `text` containing `<script>` would execute it in the browser.
- Fix: Either restrict `text` to plain strings and render as `{text}`, or pipe through `sanitize-html` (already a project dependency) before rendering.

### medium — `post.body` accessed without null guard in RSS builder

- File: `src/pages/rss.xml.js:33`
- Issue: `post.body.split('\n')` — Astro Content Layer types `body` as `string | undefined` for MDX entries. Single undefined-body post throws TypeError and breaks the entire RSS feed.
- Fix: Use `(post.body ?? '').split('\n')`.

### medium — `sortMarkdownByDate` is dead code — exported but never imported

- File: `src/utils/sort-by-date.ts:5`
- Issue: `sortMarkdownByDate` accesses `a.frontmatter.date` (Astro v2 pattern) and is re-exported from `src/utils/index.ts`, but zero callers exist outside the file.
- Fix: Remove function and its export from `index.ts`.

### medium — `wordCount` returns 1 instead of 0 for empty/HTML-only input

- File: `src/utils/word-count.ts:1-6`
- Issue: Empty string `''` after HTML stripping split on whitespace yields `['']` — length 1. Post with no body text reports "1 word" in reading-time UI.
- Fix: `clean.split(/\s+/g).filter(Boolean).length`.

### low — `sortByDate` type signature uses `any` for both parameters

- File: `src/utils/sort-by-date.ts:1`
- Issue: Both `a` and `b` typed `any`. If `a.data.date` ever lacks `.toISOString()` the error is invisible at compile time.
- Fix: Type parameters as `{ data: { date: Date } }` or generic `CollectionEntry<...>`.

### low — `formatPosts` `showFeatured: false` silently behaves same as `undefined`

- File: `src/utils/format-posts.ts:33`
- Issue: Guard `if (showFeatured && !featured) return acc` — `showFeatured: false` short-circuits and all posts pass through. Callers expecting "exclude featured" get "show all" instead.
- Fix: Document three-state semantics (`undefined` = all, `true` = featured only, `false` = same as undefined) in JSDoc, or add explicit `false` branch that excludes featured posts.

### low — `Link` `isExternal` check only tests for `http` prefix; misses protocol-relative URLs

- File: `src/components/ui/Link.tsx:9`
- Issue: `href.startsWith('http')` misses `//example.com` protocol-relative URLs — `target="_blank"` and `rel` are omitted for those.
- Fix: Use `/^https?:\/\//i.test(href)` (same pattern already in `rss-parser.ts:makeAbsolute`).

### low — `rss-parser.ts` `replaceColorSwatchComponent` injects raw `color` into `style` attribute

- File: `src/utils/rss-parser.ts:379`
- Issue: `escapeHtmlAttr` only encodes `&`, `"`, `<`. A color value like `red; content: url(x)` emits verbatim as CSS injection in RSS feed HTML.
- Fix: Validate `color` against allowlist pattern (`#rrggbb`, named colors) before emitting.

## Summary

critical: 0, high: 0, medium: 4, low: 4
