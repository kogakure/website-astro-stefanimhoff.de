# Architectural Patterns

This document describes the architectural patterns, design decisions, and conventions used throughout the codebase.

## Content Collection Pattern

**Location**: `src/content/`, `src/schema/`, `src/content/config.ts`

The site uses Astro's content collections for type-safe content management:

1. **Schema Definition** (`src/schema/*.ts`):
   - Each collection has a Zod schema defining frontmatter structure
   - Example: `src/schema/journal.ts:4-40` - defines required/optional fields, enums for tags
   - Schemas provide compile-time type safety and runtime validation

2. **Collection Registration** (`src/content/config.ts:1-7`):
   - Imports schemas and exports collection configuration
   - Collections: `journal`, `haiku`, `projects`

3. **Content Organization**:
   - Journal: Year-based folders (`src/content/journal/YYYY/`)
   - Each collection type has its own directory under `src/content/`

**Benefits**: TypeScript inference, validation, autocomplete for frontmatter fields.

## Remark Plugin Pattern

**Location**: `src/utils/remark-*.ts`, `astro.config.mjs:27-29`

Custom remark plugins extend MDX processing to inject computed data into frontmatter:

1. **Plugin Structure** (see `src/utils/remark-reading-time.ts:6-13`):
   ```typescript
   export const remarkPlugin = () => {
     return function (tree: Node, { data }: { data: any }) {
       // Process AST
       // Inject into data.astro.frontmatter
     }
   }
   ```

2. **Registration** (`astro.config.mjs:27-29`):
   - Plugins registered in MDX integration config
   - Execute during build time, before component rendering

3. **Examples**:
   - `remark-reading-time.ts` - Calculates reading time from content
   - `remark-widont.ts` - Prevents widow words in titles

**Benefits**: Computed frontmatter data available in templates without runtime calculation.

## Component Mapping Pattern

**Location**: `src/mdx-components.ts`, MDX integration

HTML elements are mapped to custom Astro components for consistent styling and behavior:

1. **Mapping Object** (`src/mdx-components.ts:39-80`):
   - Maps HTML elements (a, blockquote, h1-h6, img, etc.) to custom components
   - Makes custom components available in MDX without imports
   - Example: `h2: Headline`, `a: TextLink`, `img: MarkdownImage`

2. **Component Usage**:
   - Standard markdown syntax automatically uses custom components
   - Custom components can be used directly in MDX (YouTube, Banner, Figure, etc.)

3. **Design Pattern**:
   - Components receive standard HTML props
   - Apply consistent Tailwind classes and behavior
   - Example: All links use `TextLink` component for consistent styling

**Benefits**: Consistent styling, enhanced functionality, no import boilerplate in content files.

## Utility Function Pattern

**Location**: `src/utils/`

Pure functions for data transformation, following functional programming principles:

1. **Content Filtering** (`src/utils/format-posts.ts:5-60`):
   - `formatPosts()` - Filters, sorts, and limits posts
   - Configurable options: removeDrafts, removeFuture, showFeatured, sortBy, limit
   - Pure function: doesn't mutate input array

2. **Sorting Functions**:
   - `sort-by-date.ts` - Sorts by date field
   - `sort-by-alphabet.ts` - Alphabetical sorting
   - `sort-by-sortkey.ts` - Custom sort key field
   - All return -1/0/1 for Array.sort() compatibility

3. **Data Transformation**:
   - `date.ts` - Date formatting utilities (ISO, display formats)
   - `word-count.ts` - Text statistics
   - `titlecase.ts` - Typography utilities

**Principles**:
- Pure functions (no side effects)
- Single responsibility
- Composable (see `format-posts.ts` using `sortByDate`, `sortByAlphabet`)
- Easily testable

## Layout Hierarchy Pattern

**Location**: `src/layouts/`

Layouts follow a composition pattern with a base layout and specialized variants:

1. **Base Layout** (`src/layouts/BaseLayout.astro`):
   - Core HTML structure, SEO setup, global styles
   - Props interface at line 15-23
   - Includes: header, footer, modals (search, menu)
   - Handles: View transitions, theme provider, service worker registration

2. **Specialized Layouts**:
   - `PageLayout.astro` - Standard content pages
   - `GridLayout.astro` - Grid-based layouts
   - `AboutLayout.astro` - About page specific layout

3. **Composition**:
   - Specialized layouts import and wrap BaseLayout
   - Add specific structure/styling without duplicating base functionality
   - Use Astro's slot system for content injection

**Benefits**: DRY principle, consistent global features, easy to extend.

## Asset Generation Pipeline

**Location**: Root `*.cjs` scripts

Separate build scripts generate optimized assets from source files:

1. **Script Types**:
   - `og-generate.cjs` - Generates Open Graph preview images for posts
   - `thumbnail-generate.cjs` - Creates thumbnail images
   - `icons-generate.cjs` - Converts SVG icons to React/Preact components
   - `convert-images.cjs` - Batch image format conversion (WebP)

2. **Execution**:
   - Run manually via npm scripts: `pnpm og:generate`, `pnpm icons:generate`
   - `pnpm images` - Runs multiple generators in sequence
   - Not part of main build pipeline (run when content/assets change)

3. **Pattern**:
   - Source files (SVG, images) in project
   - Scripts read source → process → write to `public/` or `src/`
   - Generated files committed to repo (for build reproducibility)

**Benefits**: Optimized assets, consistent sizing, automated component generation.

## Progressive Enhancement Pattern

**Location**: `astro.config.mjs:58-81`, `src/layouts/BaseLayout.astro:146-149`

The site progressively enhances from static HTML to dynamic functionality:

1. **Service Worker** (`astro.config.mjs:58-81`):
   - Caches fonts (woff2) for instant loading
   - Runtime caching for images (CacheFirst strategy)
   - 1-year expiration, 50 image limit

2. **JavaScript Detection** (`BaseLayout.astro:146-149`):
   - HTML starts with `class="no-js"`
   - Script immediately swaps to `class="js"`
   - CSS can target `.no-js` vs `.js` for fallbacks

3. **View Transitions** (`astro.config.mjs:18`, `BaseLayout.astro:150`):
   - Opt-in smooth page transitions
   - Fallback to standard navigation

**Benefits**: Works without JS, enhances with JS, offline capability.

## Type Safety Pattern

**Location**: Throughout TypeScript files

Strong typing enforced via TypeScript strict mode and Zod schemas:

1. **Content Types**:
   - `CollectionEntry<'journal'>` - Type from schema
   - Example: `src/pages/[...slug].astro:2-3`
   - Autocomplete for frontmatter fields

2. **Component Props**:
   - Explicit interfaces: `BaseLayout.astro:15-23`
   - Optional vs required fields
   - Default values in destructuring

3. **Utility Functions**:
   - Typed parameters and return values
   - Generic types where appropriate
   - Example: `formatPosts()` takes `CollectionEntry<'journal'>[]`

4. **Schema Validation**:
   - Zod schemas in `src/schema/*.ts`
   - Runtime validation + TypeScript types
   - Enums for constrained values (tags, etc.)

**Benefits**: Catch errors at compile time, better IDE support, self-documenting code.

## Styling Conventions

**Location**: `tailwind.config.cjs`, component files

Tailwind CSS with extensive customization and logical properties:

1. **Custom Scale** (`tailwind.config.cjs`):
   - Spacing: Fluid sizing with clamp() (lines 95-123)
   - Typography: Responsive font sizes (lines 128-139)
   - Color system: Custom "shibui" palette (lines 16-36)

2. **Plugins**:
   - `tailwindcss-logical` - Logical properties (inline-start vs left)
   - `tailwindcss-opentype` - OpenType font features
   - See `tailwind.config.cjs:159-162`

3. **Dark Mode**:
   - Class-based strategy: `dark:` prefix
   - See `tailwind.config.cjs:4`
   - ThemeProvider component manages theme switching

4. **Component Styling**:
   - Utility-first approach
   - Consistent spacing via custom scale
   - Semantic class names where needed

**Conventions**:
- Use logical properties (mbe, mbs, pis, pie vs margin-bottom, margin-top, etc.)
- Leverage custom spacing scale for consistency
- Dark mode variants for all color-related styles

## File-Based Routing Pattern

**Location**: `src/pages/`

Astro's file-based routing with static path generation:

1. **Static Routes**:
   - `index.astro` → `/`
   - `about.mdx` → `/about/`
   - `journal.astro` → `/journal/`

2. **Dynamic Routes** (`src/pages/[...slug].astro`):
   - `getStaticPaths()` at line 23-38
   - Fetches all journal entries
   - Returns array of { params, props }
   - Each entry becomes a static page at build time

3. **Nested Routes**:
   - Directories create path segments
   - `pages/tag/[tag].astro` → `/tag/:tag/`
   - `pages/haiku/[...slug].astro` → `/haiku/:slug/`

4. **Props Passing**:
   - `getStaticPaths()` returns props (entry, prev, next)
   - Available in component via `Astro.props`
   - Enables pagination, related content, etc.

**Benefits**: Static generation (fast), predictable URLs, simple pagination.

## Data-Driven Content Pattern

**Location**: `src/data/`, component imports

Static data organized in JSON/TS files for easy updates:

1. **Site Configuration** (`src/data/site.ts`):
   - Centralized site metadata
   - Imported in layouts, components
   - Single source of truth

2. **Navigation** (`src/data/navigation.json`, `subnavigation.json`):
   - Declarative navigation structure
   - Consumed by navigation components
   - Easy to update without touching component code

3. **Content Data** (`src/data/colors-japan.json`):
   - Large datasets separate from code
   - Used by specific pages (traditional-colors-of-japan.astro)

**Benefits**: Content updates without code changes, reusable data, easier testing.
