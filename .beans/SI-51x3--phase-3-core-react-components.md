---
# SI-51x3
title: "Phase 3: Core React Components"
status: completed
type: epic
priority: normal
created_at: 2026-04-09T12:14:46Z
updated_at: 2026-04-16T13:01:10Z
---

**Goal:** Convert all Astro components to React (.tsx), using shadcn/ui as foundation.

### New component structure

```
src/components/
├── ui/              # shadcn/ui primitives (Button, Dialog, etc.)
├── typography/      # Heading, Paragraph, Blockquote, etc.
├── navigation/      # Navigation, CommandMenu, ThemeToggle
├── layout/          # Header, Footer, Grid, PageLayout
├── content/         # Article, ProjectCard, HaikuCard, etc.
├── mdx/             # All MDX-mapped components
└── icons/           # Phosphor icon re-exports (if needed)
```

### Priority conversion list

**Typography (MDX-mapped):**

- `Title.astro` → `src/components/typography/Heading.tsx` (h1, Boska Bold, aggressive tracking)
- `Headline.astro` → section heading (h2, Switzer)
- `Subheadline.astro` → (h3, Switzer)
- `Text.astro` → `Paragraph.tsx` (18px, Switzer, -2% tracking)
- `TextLink.astro` → `Hyperlink.tsx` (Beni, animated underline draw via CSS)
- `Blockquote.astro` → `Blockquote.tsx` (quiet + expressive variants)
- `Pullquote.astro` → `Pullquote.tsx`
- `Divider.astro` → `Divider.tsx`
- `OrderedList.astro`, `UnorderedList.astro`, `ListItem.astro` → List components

**Navigation:**

- `MoreLink.astro` → `CallToActionLink.tsx` (arrow translates 4px on hover, Beni)
- `Logo.astro` → `Logo.tsx` (Hanko seal SVG, crimson only, subtle 2-3° rotation on hover)
- `MainNavigation.astro` → `MainNavigation.tsx` (triggers CMDK)
- `ThemeToggle.astro` → `ThemeToggle.tsx` (Phosphor Sun/Moon icons)

**Content:**

- `Figure.astro` → `Figure.tsx`
- `Image.astro` + `MarkdownImage.astro` → `ArticleImage.tsx` (Astro Image)
- `Verse.astro` → `Verse.tsx`
- `Ruby.astro` → `Ruby.tsx`
- `Book.astro`, `AmazonBook.astro`, `Bookshelf.astro` → Book components
- `ColorSwatch.astro`, `ColorStack.astro` → Color components
- `Banner.astro`, `DisplayBox.astro`, `ThemeBox.astro` → Box components
- `Flag.astro`, `AppleTVFlag.astro`, `NetflixFlag.astro`, `PrimeVideoFlag.astro` → Flag components
- `Spotify.astro` → `Spotify.tsx` React wrapper (iframe embed)
- `YouTube.astro` → `YouTube.tsx` React wrapper (simple iframe, replaces `@astro-community/astro-embed-youtube`)
- `DownloadLink.astro`, `EmailLink.astro`, `ProductLink.astro` → Specialized links
- `BarChart.tsx` → Migrate to shadcn/ui `<BarChart>` (Recharts); data from `src/data/journal/i-counted-everything-i-own.ts` unchanged
- `DoughnutChart.tsx` → Migrate to shadcn/ui `<PieChart innerRadius={...}>` (Recharts); data from `src/data/journal/beyond-the-bookshelf-2.ts` unchanged

### MDX component mapping

Update `src/mdx-components.ts` to export React components:

```typescript
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: Heading1, h2: Heading2, h3: Heading3, h4: Heading4,
    p: Paragraph, a: Hyperlink, blockquote: Blockquote,
    img: ArticleImage, ol: OrderedList, ul: UnorderedList,
    li: ListItem, hr: Divider,
    // Custom components
    Figure, Pullquote, Verse, Ruby, Banner, DisplayBox, ...
    ...components,
  }
}
```

**Critical files:** All files in `src/components/`, `src/mdx-components.ts`
