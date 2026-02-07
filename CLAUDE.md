# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal website for Stefan Imhoff built with Astro, Preact, and Tailwind CSS. The site features a journal (blog), haiku collection, and project showcase with full-text search via Pagefind.

## Git Workflow

**IMPORTANT**: The `master` branch is protected against direct pushes. Always create a new feature branch for any changes:

```sh
git checkout -b feature/your-feature-name
# Make changes, commit, then push
git push -u origin feature/your-feature-name
```

### Commit Messages

Always use [Conventional Commits](https://www.conventionalcommits.org/) format:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `chore:` - Maintenance tasks
- `refactor:` - Code refactoring
- `test:` - Test updates
- `style:` - Code style/formatting changes

### Creating Pull Requests

After pushing, create a pull request using `gh` CLI with the following requirements:

- Assign to `@me`
- Add one of the existing labels: `bug`, `documentation`, `enhancement`, or `maintenance`

```sh
gh pr create --title "Your PR title" --body "Description" --assignee @me --label <label-name>
```

## Common Commands

### Development

```sh
pnpm dev        # Start dev server
pnpm start      # Alias for dev
pnpm build      # Build for production
pnpm preview    # Preview production build (runs build first)
```

### Code Quality

```sh
npx prettier --write <files>  # Format files
npx eslint --fix <files>      # Lint and fix files
npx lint-staged               # Run pre-commit hooks manually
```

### Content Generation

```sh
pnpm plop                     # Create new journal post (interactive)
pnpm images                   # Generate OG images and thumbnails
pnpm og:generate              # Generate Open Graph images
pnpm thumbnail:generate       # Generate thumbnails
pnpm icons:generate           # Generate icon components from SVG
pnpm webp                     # Convert images to WebP format
```

## Architecture

### Content Collections

Three content collections defined in `src/content/config.ts`, with schemas in `src/schema/`:

- **journal**: Blog posts organized by year in `src/content/journal/YYYY/`
- **haiku**: Haiku poems in `src/content/haiku/`
- **projects**: Project descriptions in `src/content/projects/`

Each collection has a Zod schema defining frontmatter structure (title, date, tags, etc.)

### Pages & Routing

Pages are in `src/pages/` using Astro's file-based routing:

- Static pages: `index.astro`, `about.mdx`, `cv.astro`, `tools.mdx`, etc.
- Dynamic routes: `[...slug].astro` for individual posts
- RSS feeds: `rss.xml.js` and `rss-haiku.xml.js`

### Components & Layouts

- **Layouts**: `src/layouts/` - Page templates
- **Components**: `src/components/` - Reusable UI components (Astro/Preact)
- **Icons**: `src/icons/` - SVG icons, generate components with `pnpm icons:generate`

### Styling

Tailwind CSS with custom plugins:

- `tailwindcss-logical` for logical properties
- `tailwindcss-opentype` for OpenType features
- Configuration in `tailwind.config.cjs`
- Global styles in `src/styles/`

### Utilities & Data

- **Utils**: `src/utils/` - Helper functions including:
  - `remark-reading-time.ts` - Adds reading time to posts
  - `remark-widont.ts` - Prevents widows in titles
  - `format-posts.ts`, `sort-by-date.ts`, etc.
- **Data**: `src/data/` - Site metadata, navigation, colors
- **Text**: `src/text/` - Static content for pages

### Build Features

Astro integrations configured in `astro.config.mjs`:

- MDX support with custom remark plugins
- Pagefind for full-text search
- Service worker for offline support (fonts and images)
- Automatic sitemap generation (excludes /cv/ and /imprint/)
- Web manifest generation

### Image Generation Scripts

Root-level `.cjs` scripts for asset generation:

- `og-generate.cjs` - Creates Open Graph images
- `thumbnail-generate.cjs` - Generates post thumbnails
- `icons-generate.cjs` - Converts SVGs to React components
- `convert-images.cjs` - Batch image format conversion

## Creating Content

### New Journal Post

Use Plop for consistent post structure:

```sh
pnpm plop
```

This creates a new post in `src/content/journal/YYYY/` with proper frontmatter, including predefined tag options (book, code, design, film, philosophy, poetry, politics, productivity, self-improvement, software, technology, writing).

### Post Structure

Journal posts require:

- `title` (required)
- `date` (required)
- `description` (optional but recommended)
- `tags` (array of predefined tags)
- `draft` (boolean, defaults to false)
- `featured` (boolean, optional)
- `cover` (optional image path)

## Development Notes

- Site URL: https://www.stefanimhoff.de
- Uses pnpm as package manager
- Husky pre-commit hooks run lint-staged (Prettier + ESLint)
- Custom Shiki theme defined in `shiki-theme.json`
- TypeScript with strict null checks enabled
- React JSX mode for Preact compatibility
