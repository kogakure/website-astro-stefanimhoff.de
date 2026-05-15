---
# SI-e24e
title: "a11y audit: src/ review findings"
status: completed
type: task
priority: normal
created_at: 2026-05-15T16:54:56Z
updated_at: 2026-05-15T17:01:34Z
parent: SI-s2ga
---

No skip link, role=button on img, hai contrast failures, missing aria-current, lang=ja absent on JapanesePoem, missing aria-pressed on tag filters

## Scope

`src/` — all files under components/ (ui/, content/, interactive/, site/, icons/), layouts/, pages/, styles/global.css

## Findings

### critical — No skip navigation link

- File: `src/layouts/BaseLayout.astro:168`
- Issue: No skip-to-main-content link anywhere in layout. Keyboard-only and screen reader users must tab through entire sticky header on every page.
- Fix: Add `<a href="#main-content" class="sr-only focus:not-sr-only">Skip to main content</a>` as first child of `<body>`; add `id="main-content"` to `<main>`.
- WCAG: SC 2.4.1 Bypass Blocks

### critical — `role="button"` on `<img>` element (lightbox images)

- File: `src/components/content/Image.tsx:59`, `src/components/content/MarkdownImage.tsx:19`, `src/components/site/work/WorkImage.astro:17`, `src/components/site/work/WorkItemFeatured.astro:27`
- Issue: `<img role="button" tabIndex={0}>` places interactive role on non-interactive element. VoiceOver/NVDA may not expose it as activatable. Raw images in tab order without native button semantics.
- Fix: Wrap each lightbox image in `<button type="button" aria-label="Open image in lightbox">`; move `role`/`tabIndex` to the button, keep `<img>` as presentational child.
- WCAG: SC 4.1.2 Name, Role, Value

### critical — Lightbox close button `XIcon` missing `aria-hidden`

- File: `src/components/interactive/LightboxRoot.tsx:133`
- Issue: `<XIcon>` inside close button has no `aria-hidden="true"`. Button has `aria-label="Close lightbox"` but icon may announce its own name, producing double-reading.
- Fix: Add `aria-hidden="true"` to `<XIcon>`.
- WCAG: SC 4.1.2 Name, Role, Value

### critical — `<img role="button">` missing keyboard Enter/Space handler in Astro work components

- File: `src/components/site/work/WorkItemFeatured.astro:26-65`
- Issue: `tabindex="0"` on `<img role="button">` does not inherently fire click handler on Enter/Space — Astro template has no `on:keydown`. Non-native button elements require explicit keyboard binding.
- Fix: Same as finding 2 — wrap in `<button>`; delegation listener already handles Enter/Space on `data-lightbox` elements.
- WCAG: SC 2.1.1 Keyboard

### high — `text-hai` used for body-sized text (fails 4.5:1 contrast)

- File: `src/components/interactive/WritingPage.tsx:168`, `src/components/ui/HaikuItem.tsx:20`, `src/components/content/VideoCard.tsx:92`, `src/components/content/AudioCard.tsx:81`, `src/components/content/BookCard.tsx:81`, `src/components/content/ColorSwatch.tsx:64`, `src/components/content/ColorSwatchPrimary.tsx:53`
- Issue: Hai (#A0A09C) on Washi (#E6E6E6) ≈ 2.7:1 — fails 4.5:1 minimum for normal text at `text-2`/`text-3` sizes.
- Fix: Use `text-nezumi` (Nezumi #6B6B67 on Washi ≈ 5.3:1, passes AA) for small body text; reserve `text-hai` for decorative/icon use only.
- WCAG: SC 1.4.3 Contrast (Minimum)

### high — `text-hai` in Badge `paid`/`language` variants on light backgrounds

- File: `src/components/ui/Badge.tsx:14-15`
- Issue: `text-hai` on `bg-kiri` ≈ 2.7:1. Badge text is `text-1` (0.65em relative) — far below 4.5:1. `dark:text-hai` on `dark:bg-sumi` also fails.
- Fix: Replace `text-hai` → `text-nezumi`; `dark:text-hai` → `dark:text-usuzumi`.
- WCAG: SC 1.4.3 Contrast (Minimum)

### high — `SectionLabel` uses `text-hai` for uppercase captions at `text-2` size

- File: `src/components/ui/SectionLabel.tsx:9`
- Issue: `text-2` clamps at 14px bold uppercase — still fails 3:1 large-text threshold at Hai on Washi ≈ 2.7:1.
- Fix: Replace `text-hai` → `text-nezumi` (5.3:1, passes both AA and AAA for large text).
- WCAG: SC 1.4.3 Contrast (Minimum)

### high — `MainNavigation` has no `aria-current` on active link

- File: `src/components/site/MainNavigation.astro:13-25`
- Issue: `isActive` check applies `underline` styling only; no `aria-current="page"` set. Screen reader users cannot programmatically identify current page in nav.
- Fix: Add `aria-current={isActive(url) ? 'page' : undefined}` to the `<a>` element.
- WCAG: SC 4.1.2 Name, Role, Value

### high — `JapanesePoem` renders Japanese text without `lang="ja"`

- File: `src/components/ui/JapanesePoem.tsx:8-18`
- Issue: Japanese characters rendered with page `lang="en"` — screen readers announce using English TTS engine, producing unintelligible output.
- Fix: Add `lang="ja"` to the component's root element.
- WCAG: SC 3.1.2 Language of Parts

### high — `Banner` caret transition may not respect `prefers-reduced-motion`

- File: `src/components/content/Banner.tsx:29-41`
- Issue: `group-open:rotate-180` transition on `CaretDownIcon`. Global reduced-motion reset must catch `var(--duration-moderate)` to suppress it; not confirmed.
- Fix: Verify caret rotation uses `motion-safe:` variant or is fully covered by the global `prefers-reduced-motion` reset in `global.css`.
- WCAG: SC 2.3.3 Animation from Interactions

### medium — Redundant `role="banner"` on `<header>`

- File: `src/components/site/PageHeader.astro:20`
- Issue: `<header role="banner">` — `<header>` as direct child of `<body>` already has implicit `banner` role.
- Fix: Remove `role="banner"`.
- WCAG: SC 4.1.2 Name, Role, Value

### medium — Breadcrumb separator `<li>` items inflate screen reader list count

- File: `src/components/site/Breadcrumb.astro:39-41`
- Issue: `<li aria-hidden="true">/</li>` separators are siblings of content items; screen reader announces inflated "list of N items" count.
- Fix: Move separator into `li + li::before` CSS pseudo-element.
- WCAG: SC 1.3.1 Info and Relationships

### medium — `CommandMenu` dialog: focus not restored to trigger on close

- File: `src/components/interactive/CommandMenu.tsx:214`
- Issue: `close()` does not call `triggerRef.current?.focus()`. After dialog closes, focus lands on `<body>` instead of the button that opened the menu.
- Fix: Store `triggerRef` pointing to open button; call `triggerRef.current?.focus()` inside `close()`.
- WCAG: SC 2.4.3 Focus Order

### medium — `WritingPage` tag filter buttons missing `aria-pressed`

- File: `src/components/interactive/WritingPage.tsx:113-124`
- Issue: Filter `<button>` elements for tags have no `aria-pressed`. Visual active state (underline) does not communicate toggled state to screen readers. `Tag` component correctly uses `aria-pressed`; these do not.
- Fix: Add `aria-pressed={selectedTags.includes(tag)}` to each filter button.
- WCAG: SC 4.1.2 Name, Role, Value

### low — `input[type='text']` in global CSS removes `outline` without `:focus-visible` replacement

- File: `src/styles/global.css:559`
- Issue: `outline-none` applied globally to text inputs; only `border-color` change on `:focus`. Border colour alone may fail 3:1 non-text contrast requirement for UI components.
- Fix: Add `focus-visible:ring-2 focus-visible:ring-beni` or equivalent `outline` passing 3:1 against adjacent background.
- WCAG: SC 1.4.11 Non-text Contrast, SC 2.4.7 Focus Visible

### low — `PageFooter` social links: `title` attribute alongside `aria-label`

- File: `src/components/site/PageFooter.astro:12`
- Issue: Both `aria-label` and `title` set on each social link. `title` ignored when `aria-label` present but creates redundant browser tooltip.
- Fix: Remove `title` attribute; `aria-label` is sufficient.
- WCAG: best practice

## Summary

critical: 4, high: 5, medium: 4, low: 2

## Summary of Changes

Fixed all 15 findings (4 critical, 5 high, 4 medium, 2 low):

**Critical**

- `BaseLayout.astro`: added skip-to-main-content link (sr-only, visible on focus) + `id="main-content"` on `<main>`
- `Image.tsx`, `MarkdownImage.tsx`, `WorkImage.astro`, `WorkItemFeatured.astro` (×3): replaced `<img role="button" tabIndex>` with semantic `<button type="button" aria-label="Open image in lightbox">` wrapper; `data-lightbox` stays on `<img>` so LightboxRoot delegation continues to work; `close()` in LightboxRoot updated to focus `img.closest('button')` for correct focus restoration
- `LightboxRoot.tsx`: added `aria-hidden="true"` to `<XIcon>` in close button

**High**

- `SectionLabel.tsx`, `Badge.tsx` (paid/language variants), `HaikuItem.tsx`, `WritingPage.tsx`, `VideoCard.tsx`, `AudioCard.tsx`, `BookCard.tsx`, `ColorSwatch.tsx`, `ColorSwatchPrimary.tsx`: `text-hai` → `text-nezumi` for all body-sized text; Badge dark mode `dark:text-hai` → `dark:text-usuzumi`
- `MainNavigation.astro`: added `aria-current="page"` on active nav link
- `JapanesePoem.tsx`: added `lang="ja"` to root element
- Banner: confirmed covered by global `prefers-reduced-motion: reduce` rule (`transition-duration: 0.001ms !important`) — no code change needed

**Medium**

- `PageHeader.astro`: removed redundant `role="banner"` from `<header>`
- `Breadcrumb.astro`: separator `<li aria-hidden>` removed; replaced with `li + li::before` CSS pseudo-element
- `CommandMenu.tsx`: `prevFocusRef` captures `document.activeElement` on open; `close()` calls `requestAnimationFrame(() => prevFocusRef.current?.focus())`
- `WritingPage.tsx`: added `aria-pressed={selectedTags.includes(tag)}` to tag filter buttons

**Low**

- `global.css`: added `focus-visible:ring-2 focus-visible:ring-beni focus-visible:ring-offset-1` to `input[type='text']`
- `PageFooter.astro`: removed `title` attribute from all 3 social link elements

Test suite: 381/381 pass. Test for Image lightbox structure updated to query `img` inside button.
