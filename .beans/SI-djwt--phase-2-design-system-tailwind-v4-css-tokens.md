---
# SI-djwt
title: "Phase 2: Design System (Tailwind v4 + CSS Tokens)"
status: completed
type: epic
priority: normal
created_at: 2026-04-09T12:14:46Z
updated_at: 2026-04-16T13:01:04Z
---

**Goal:** Implement the Ma (間) design system in Tailwind v4 CSS config.

### Steps

1. **Create `src/styles/design-system.css`** (imported by global.css):

```css
@theme {
  /* Colors */
  --color-beni: #900b20;
  --color-beni-light: #b83a4e;
  --color-beni-muted: #c75566;
  --color-beni-pale: #f2d5da;
  --color-beni-dark: #6a0818;
  --color-sumi: #0e0d0c;
  --color-washi: #e6e6e6;
  --color-kiri: #f2f2f0;
  --color-usuzumi: #c8c8c4;
  --color-hai: #a0a09c;
  --color-nezumi: #6b6b67;
  --color-yoru: #1a1918;

  /* Typography */
  --font-display: "Boska Variable", Georgia, serif;
  --font-sans: "Switzer Variable", Helvetica Neue, Arial, sans-serif;
  --font-mono: "Fira Code", monospace;

  /* Spacing (4px base unit) */
  --spacing-1: 4px;
  --spacing-2: 8px;
  --spacing-3: 12px;
  --spacing-4: 16px;
  --spacing-6: 24px;
  --spacing-8: 32px;
  --spacing-12: 48px;
  --spacing-16: 64px;
  --spacing-24: 96px;
  --spacing-32: 128px;

  /* Grid */
  --grid-columns: 12;
  --grid-margin: 32px;
  --grid-gutter: 32px;
  --grid-max-width: 1440px;
}

/* Motion tokens */
:root {
  --ease-enter: cubic-bezier(0, 0, 0.38, 0.9);
  --ease-exit: cubic-bezier(0.2, 0, 1, 0.9);
  --ease-standard: cubic-bezier(0.2, 0, 0.38, 0.9);
  --duration-instant: 100ms;
  --duration-fast: 200ms;
  --duration-moderate: 300ms;
  --duration-slow: 500ms;
  --duration-deliberate: 800ms;
}
```

2. **Update `src/styles/fonts.css`**:

   - Remove Secuela @font-face declarations
   - Add Boska Variable and Switzer Variable @font-face
   - Boska: only Bold weight needed for display
   - Switzer: Regular, Italic, SemiBold, Bold weights

3. **Dark mode**: Configure class-based dark mode using Tailwind v4 `@variant dark`; map Washi→Yoru, Sumi→Washi, Kiri→Yoru for dark backgrounds

4. **Remove** legacy `tailwind.config.cjs` and `tailwindcss-logical` plugin; replace logical property utilities with Tailwind v4 built-in logical variants

**Critical files:** `src/styles/global.css`, `src/styles/fonts.css`, `src/styles/design-system.css`
