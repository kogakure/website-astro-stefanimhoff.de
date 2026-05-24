# Component Reference

All components live under `src/components/`. Use existing components instead of raw HTML. Override styles via `className` and `cn()`.

---

## UI — Base Primitives (`ui/`)

Core design-system building blocks. Use these everywhere before reaching for raw HTML elements.

### Typography

| Component        | Default tag | When to use                                                                                         |
| ---------------- | ----------- | --------------------------------------------------------------------------------------------------- |
| `Title`          | `h1`        | Page-level title; large display font with tracking. Use `as` prop to change tag.                    |
| `Headline`       | `h2`        | Section headings inside content.                                                                    |
| `Subheadline`    | `h3`        | Subsection headings.                                                                                |
| `Subsubheadline` | `h4`        | Minor headings; bold, smaller size.                                                                 |
| `SectionLabel`   | `h2`        | Uppercase muted label above a section (e.g. sidebar labels, section names). Use `as` to change tag. |
| `Text`           | `p`         | Body paragraphs. Standard prose size with block-end margin.                                         |

### Inline Typography

| Component       | HTML       | When to use                                                                   |
| --------------- | ---------- | ----------------------------------------------------------------------------- |
| `Em`            | `<em>`     | Italic emphasis.                                                              |
| `DisplayEm`     | `<em>`     | Italic in display/heading font (not italic visually — uses display typeface). |
| `Strong`        | `<strong>` | Bold emphasis.                                                                |
| `Marked`        | `<mark>`   | Highlighted text with brand-colored background.                               |
| `Inserted`      | `<ins>`    | Underlined inserted text (editorial use).                                     |
| `Strikethrough` | `<del>`    | Struck-through deleted text.                                                  |
| `Subscript`     | `<sub>`    | Subscript text.                                                               |
| `Superscript`   | `<sup>`    | Superscript text (footnote references).                                       |
| `LineBreak`     | `<br>`     | Explicit line break.                                                          |

### Links

| Component   | When to use                                                                                                             |
| ----------- | ----------------------------------------------------------------------------------------------------------------------- |
| `Link`      | Base anchor. Auto-detects external URLs: adds `target="_blank"`, `rel`, and Umami tracking. Use for all `<a>` elements. |
| `TextLink`  | Styled inline link with animated underline and brand color. Use inside prose for body-text links.                       |
| `EssayLink` | Block-level link for essay/post list items. Hover color transition only.                                                |
| `MoreLink`  | "Read more" CTA link with animated arrow icon. Requires `href` and `text` props.                                        |

### Lists

| Component       | When to use                                                                  |
| --------------- | ---------------------------------------------------------------------------- |
| `UnorderedList` | Bullet list with em-dash markers in brand color. Use instead of `<ul>`.      |
| `OrderedList`   | Numbered list with brand-colored markers. Use instead of `<ol>`.             |
| `ListItem`      | List item wrapper. Use with the list components above instead of raw `<li>`. |

### Tables

| Component         | When to use                                                                    |
| ----------------- | ------------------------------------------------------------------------------ |
| `Table`           | Responsive scrollable table wrapper + `<table>`. Use instead of raw `<table>`. |
| `TableHead`       | `<thead>` wrapper.                                                             |
| `TableBody`       | `<tbody>` wrapper.                                                             |
| `TableRow`        | `<tr>` wrapper.                                                                |
| `TableHeaderCell` | `<th>` wrapper.                                                                |
| `TableCell`       | `<td>` wrapper.                                                                |

### Layout

| Component             | When to use                                                                                                                                            |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `PageSection`         | 12-column grid section with a `SectionLabel` in the left column and content in the right. Standard layout unit for inner pages. Requires `label` prop. |
| `HomepagePageSection` | Same as `PageSection` but with column offsets matching the homepage grid. Use only on the homepage.                                                    |
| `Divider`             | `<hr>` with Ma Design System styling. Use between major content blocks.                                                                                |

### Interactive UI

| Component                                                           | When to use                                                                                                               |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `Badge`                                                             | Small pill label. Variants: `default`, `favorite`, `paid`, `language`. Use to annotate items in cards.                    |
| `Tag`                                                               | Clickable/linkable filter chip. Renders as `<button>` or `<a>` depending on props. Shows active state. Use in filter UIs. |
| `Flag`                                                              | Inline monospace badge, optionally linked. Generic base for platform flags.                                               |
| `ClearFiltersButton`                                                | "Clear N filters" button with animated visibility. Pass `count` prop; auto-hides when count is 0.                         |
| `Switch`                                                            | Toggle switch (Radix UI). Sizes: `default`, `sm`.                                                                         |
| `Tooltip` / `TooltipProvider` / `TooltipTrigger` / `TooltipContent` | Radix UI tooltip primitives. Wrap trigger in `TooltipProvider > Tooltip > TooltipTrigger`.                                |
| `TaskCheckbox`                                                      | Disabled checkbox for rendered Markdown task lists.                                                                       |

### Special

| Component          | When to use                                                                                               |
| ------------------ | --------------------------------------------------------------------------------------------------------- |
| `CodeBlock`        | `<pre>` wrapper for fenced code blocks.                                                                   |
| `FootnoteSection`  | `<section>` wrapper for footnote lists at bottom of posts.                                                |
| `HaikuItem`        | Single haiku list item with German (`de`) and English (`en`) text.                                        |
| `JapanesePoem`     | Large Japanese text for marquee/decorative use. Defaults to a sample sentence; pass children to override. |
| `QuoteAttribution` | Footer attribution line with author and optional linked source. Used inside `Blockquote` and `Pullquote`. |

---

## Content — MDX Components (`content/`)

Used inside MDX files and content-heavy pages. Many are registered as MDX components so they can be used without imports in `.mdx` files.

### Quotes & Prose

| Component    | When to use                                                                                                          |
| ------------ | -------------------------------------------------------------------------------------------------------------------- |
| `Blockquote` | Standard block quote with optional `author`, `source`, `sourceUrl`, `lang`.                                          |
| `Pullquote`  | Large decorative quote pulled from surrounding text. Requires `text` prop. Optional `alignment`, `author`, `source`. |
| `Verse`      | Poetry or lyric block; preserves whitespace. Variants: `center` (default), `left`.                                   |
| `Ruby`       | Japanese ruby annotation. Pass `base` (kanji) and `text` (furigana).                                                 |

### Images & Media

| Component       | When to use                                                                                                                                                               |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Image`         | Rich image wrapper with lightbox, caption, source attribution, and size variants (`regular`, `wide`, `fullsize`). Use in MDX for all images needing captions or lightbox. |
| `Figure`        | `<figure>` wrapper for one or more images side-by-side with optional caption.                                                                                             |
| `MarkdownImage` | Lightweight image with lightbox trigger. Used by the MDX image renderer for bare `![alt](src)` syntax.                                                                    |
| `Spotify`       | Embeds Spotify podcast player iframe. Pass `id` (show ID).                                                                                                                |
| `YouTube`       | Embeds YouTube video via `<lite-youtube>` web component. Pass `id` and optional `title`.                                                                                  |
| `AudioCard`     | Rich card for audiobook or podcast entries. Shows cover, metadata, badges, and platform links.                                                                            |
| `VideoCard`     | Rich card for video/playlist/channel entries. Shows cover, metadata, and link.                                                                                            |
| `BookCard`      | Rich card for book entries. Shows cover image, author, description, and platform links.                                                                                   |
| `MediaLinkRow`  | Row of platform icon links (Apple, Spotify, Amazon, YouTube, web, Instagram, Patreon). Used inside `AudioCard` / `BookCard`.                                              |

### Books

| Component    | When to use                                                          |
| ------------ | -------------------------------------------------------------------- |
| `AmazonBook` | Book cover image linked to Amazon.de. Pass `asin` and `alt`.         |
| `Book`       | Raw book cover image with hover shadow. Used inside `AmazonBook`.    |
| `Bookshelf`  | Flex container that lays out `AmazonBook` items in a bookshelf grid. |

### Links & CTAs

| Component      | When to use                                                                                                                          |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `DownloadLink` | Link with animated download icon. Pass `href` and `text`.                                                                            |
| `EmailLink`    | Obfuscated email link assembled from `data-name`, `data-domain`, `data-tld`. Copies address to clipboard on click and shows tooltip. |
| `ProductLink`  | Amazon affiliate text link. Pass `asin` and `text`. Tracks Umami event.                                                              |
| `RSSText`      | Renders nothing (null). Placeholder for RSS-only content that should be omitted on the web.                                          |

### Color & Design

| Component            | When to use                                                                    |
| -------------------- | ------------------------------------------------------------------------------ |
| `ColorSwatch`        | Full color swatch with color field, name, hex, and optional kanji/description. |
| `ColorSwatchPrimary` | Large primary swatch with centered kanji overlay.                              |
| `ColorSwatchMini`    | Tiny inline color square for use inside text or tables.                        |
| `ColorStack`         | Grid wrapper for a set of `ColorSwatch` items.                                 |

### Flags (Streaming Platform Badges)

| Component        | When to use                                                          |
| ---------------- | -------------------------------------------------------------------- |
| `AppleTVFlag`    | Inline "tv" badge linked to an Apple TV+ show. Pass `id`.            |
| `NetflixFlag`    | Inline "N" badge linked to a Netflix title. Pass `id`.               |
| `PrimeVideoFlag` | Inline "P" badge linked to an Amazon Prime Video title. Pass `id`.   |
| `Platform`       | Generic platform icon badge (`iphone`, `desktop`, `appletv`, `web`). |

### Callouts

| Component | When to use                                                                                                                                                             |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Banner`  | Aside box with optional disclosure (expand/collapse). Tones: `default`, `accent` (left border). Use for notes, warnings, asides. Pass `summary` to make it collapsible. |

### Code

| Component    | When to use                                            |
| ------------ | ------------------------------------------------------ |
| `InlineCode` | Styled `<code>` for inline code snippets within prose. |

---

## Interactive — Client Islands (`interactive/`)

React components that hydrate in the browser. All require `client:*` directives when used in Astro files.

### Navigation & Search

| Component         | When to use                                                                                                                                                   |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `CommandMenu`     | Full-screen command palette with site navigation and Pagefind full-text search. Opened via keyboard shortcut `/` or header button. Mount once in root layout. |
| `TableOfContents` | Sticky TOC that highlights the active heading on scroll. Pass `headings` array (`{id, text}`).                                                                |
| `SeriesStepper`   | Accordion-style stepper showing past/current/upcoming posts in a series. Pass `steps`, `currentId`, `seriesName`.                                             |
| `WritingPage`     | Full writing/essays listing page with tag filtering, year grouping, and persistent filter state.                                                              |

### Visuals & Effects

| Component      | When to use                                                                                                             |
| -------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `HoverPreview` | Global cursor-following image preview triggered by `data-hover-preview` attributes on links. Mount once in root layout. |
| `LightboxRoot` | Global lightbox overlay for images with `data-lightbox` attribute. Mount once in root layout.                           |
| `Marquee`      | Horizontally scrolling marquee container. Pass `pixelsPerSecond` to control speed.                                      |

### Data Visualization

| Component       | When to use                                                                     |
| --------------- | ------------------------------------------------------------------------------- |
| `BarChart`      | Recharts bar chart accepting Chart.js-style `{labels, datasets}` data.          |
| `DoughnutChart` | Recharts doughnut/pie chart accepting Chart.js-style `{labels, datasets}` data. |

### Roadmap

| Component          | When to use                                                                      |
| ------------------ | -------------------------------------------------------------------------------- |
| `Roadmap`          | Ordered list of learning milestones. Pass `milestones` array.                    |
| `RoadmapMilestone` | Single milestone item with kind icon, title, badge, and link. Used by `Roadmap`. |

### Motion (`interactive/motion/`)

Framer Motion wrappers that respect `prefers-reduced-motion`.

| Component     | When to use                                                                                                  |
| ------------- | ------------------------------------------------------------------------------------------------------------ |
| `Reveal`      | Fade-in or fade-up animation when element enters viewport. Props: `preset` (`fadeUp` \| `fadeIn`), `delay`.  |
| `SplitText`   | Animates text word-by-word or character-by-character on mount. Props: `text`, `splitBy`, `stagger`, `delay`. |
| `StaggerList` | Wrapper that staggers child animations on scroll into view. Use with `StaggerItem`.                          |
| `StaggerItem` | Single animated child inside `StaggerList`. Renders as `<li>` by default.                                    |
| `Parallax`    | Applies a vertical parallax offset on scroll. Props: `range` (pixel offset bounds).                          |

---

## Site — Structural Components (`site/`)

Site-wide chrome and page-level layout. Used in layouts, not inside content.

### Layout & Chrome

| Component       | When to use                                                                                                                                         |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `PageHeader`    | Sticky top header with logo, main navigation, command menu button, and theme toggle. Pass `navigation={false}` to hide nav (e.g. on minimal pages). |
| `PageFooter`    | Footer with social icon links (Twitter/X, Instagram, GitHub).                                                                                       |
| `PageTitle`     | Full-width grid wrapper for the page `<Title>`. Use in page hero sections.                                                                          |
| `ThemeProvider` | Inline script that initializes dark/light mode from `localStorage` before paint. Mount in `<head>`.                                                 |
| `ThemeToggle`   | Button that toggles dark/light mode. Included inside `PageHeader`.                                                                                  |
| `Scripts`       | Mounts global keyboard shortcuts (e.g. `/` to open search). Mount once at end of `<body>`.                                                          |

### Navigation

| Component            | When to use                                                                                              |
| -------------------- | -------------------------------------------------------------------------------------------------------- |
| `MainNavigation`     | Horizontal nav links from `navigation.json`. Hidden on mobile. Included inside `PageHeader`.             |
| `Breadcrumb`         | Breadcrumb trail. Pass `items: {label, href?}[]`.                                                        |
| `PrevNextNavigation` | Previous/next post navigation. Pass `prev` and `next` entries with `href`, `title`, optional `subtitle`. |
| `DesignSystemNav`    | Sidebar navigation for design system sub-pages. Pass `currentSlug` for active state.                     |

### Homepage

| Component          | When to use                                                                                                        |
| ------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `HeroTitle`        | Animated split-text homepage hero title ("Stefan Imhoff is a Design Engineer from Hamburg"). Use only on homepage. |
| `LatestEssaysList` | Stagger-animated list of essay links for the homepage. Pass `posts: {href, label, previewUrl?}[]`.                 |
| `Logo`             | Hanko SVG logo linked to the homepage.                                                                             |
| `CoverImage`       | Optimized `<Image>` for post/page hero covers with responsive `sizes` and AVIF/WebP formats.                       |

### Work Section (`site/work/`)

| Component                 | When to use                                                                                                         |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `WorkItem`                | Dispatcher: reads `entry.data.layout` and renders the correct work item variant. Use this in the work listing.      |
| `WorkItemFeatured`        | Layout: large primary image with optional gallery.                                                                  |
| `WorkItemFullBleed`       | Layout: single full-width image.                                                                                    |
| `WorkItemGallery2`        | Layout: two-column image gallery (2/3 + 1/3).                                                                       |
| `WorkItemGallery2Stagger` | Layout: two-column gallery with vertical stagger offset.                                                            |
| `WorkItemGallery3`        | Layout: three-column image gallery.                                                                                 |
| `WorkItemGallery3Stagger` | Layout: three-column gallery with stagger.                                                                          |
| `WorkItemImageInset`      | Layout: image inset inside content column.                                                                          |
| `WorkItemTextOnly`        | Layout: no image, text content only.                                                                                |
| `WorkContent`             | Renders work entry text: title, categories, intro paragraphs, and "more" links. Used by all `WorkItem*` variants.   |
| `WorkImage`               | Motion-enhanced `<img>` with reveal animation. Used by `WorkItem*` variants for non-optimized images.               |
| `WorkImageOptimized`      | Astro `<Image>` with responsive sizes for work images. Preferred over `WorkImage` when image metadata is available. |

---

## Icons (`icons/`)

| Component  | When to use                                    |
| ---------- | ---------------------------------------------- |
| `ArrowCta` | Custom SVG arrow used in `MoreLink`.           |
| `Hanko`    | Custom SVG personal stamp/logo used in `Logo`. |

> For all other icons use `@phosphor-icons/react` directly.

---

## Design System — Documentation Components (`design-system/`)

Used exclusively on the `/design-system/*` pages to document and demonstrate the Ma Design System. Do not use in regular content.

| Component            | Purpose                                                        |
| -------------------- | -------------------------------------------------------------- |
| `AltTextTable`       | Documents alt text guidelines with examples.                   |
| `BreakpointTable`    | Shows breakpoint token values.                                 |
| `ColorRamp`          | Renders a color scale ramp.                                    |
| `ColorStack`         | Grid of color swatches (also in `content/`).                   |
| `ComponentShowcase`  | Wrapper for live component previews on the design system page. |
| `ContrastBadge`      | WCAG contrast ratio badge (pass/fail).                         |
| `ContrastMatrix`     | Grid showing all color-pair contrast ratios.                   |
| `DurationBar`        | Visual bar representing an animation duration token.           |
| `EasingComparison`   | Side-by-side animation of different easing curves.             |
| `EasingCurvePlot`    | SVG plot of a cubic-bezier curve.                              |
| `FocusRingDemo`      | Live demo of focus ring styles.                                |
| `GridOverlay`        | Toggleable grid overlay for layout debugging.                  |
| `IconGrid`           | Grid display of Phosphor icon set samples.                     |
| `ItalicComparison`   | Shows roman vs. italic typeface comparison.                    |
| `JapaneseSpecimen`   | Type specimen for Japanese font stack.                         |
| `LogoDontList`       | Documents incorrect logo usage.                                |
| `LogoSizeStrip`      | Shows minimum logo sizes.                                      |
| `LogoSpecimen`       | Displays the logo in all variants.                             |
| `MotionDemo`         | Live animation demo for a motion token.                        |
| `PhosphorNote`       | Note about Phosphor icon usage guidelines.                     |
| `PrincipleCard`      | Card presenting a single design principle.                     |
| `PrintSpec`          | Documents print-mode styling.                                  |
| `RatioBar`           | Visual bar for typographic ratio.                              |
| `ReducedMotionDemo`  | Demo that adapts to `prefers-reduced-motion`.                  |
| `SpacingPicker`      | Interactive spacing token picker.                              |
| `SpacingScale`       | Visual scale of all spacing tokens.                            |
| `TouchTargetOverlay` | Overlay showing 44px minimum touch target areas.               |
| `TypeScale`          | Visual display of the full type scale.                         |
| `TypeSpecimen`       | Full typeface specimen layout.                                 |
