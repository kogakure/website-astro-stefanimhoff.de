# CLAUDE.md

## Project Overview

Personal website and blog for Stefan Imhoff, featuring journal posts, haiku collection, project showcase, and full-text search. Built with Astro for static generation, Preact for interactive components, and styled with Tailwind CSS.

**Live Site**: https://www.stefanimhoff.de

## Tech Stack

- **Framework**: Astro 4.x (static site generator with view transitions)
- **UI Libraries**: Preact (React compatibility mode), MDX for content
- **Styling**: Tailwind CSS with custom plugins (tailwindcss-logical, tailwindcss-opentype)
- **Search**: Pagefind (full-text search)
- **Package Manager**: pnpm
- **Build Tools**: Vite, TypeScript (strict mode)
- **Quality Tools**: ESLint, Prettier, Husky pre-commit hooks

## Key Directories

```
src/
├── components/     # Reusable UI components (Astro/Preact)
├── content/        # Content collections (journal/, haiku/, projects/)
├── schema/         # Zod schemas for content validation (src/schema/*.ts)
├── layouts/        # Page templates (BaseLayout → specialized layouts)
├── pages/          # File-based routing + dynamic [...slug].astro
├── utils/          # Pure functions (formatPosts, sortByDate, remark plugins)
├── data/           # Site config, navigation, colors (src/data/site.ts)
├── icons/          # SVG icons (generated from source via icons:generate)
├── styles/         # Global CSS
└── text/           # Static page content

Root scripts: *.cjs files for asset generation (OG images, thumbnails, icons)
```

## Essential Commands

### Development
```sh
pnpm dev            # Start dev server
pnpm build          # Build for production
pnpm preview        # Build + preview production build
```

### Content Generation
```sh
pnpm plop           # Create new journal post (interactive)
pnpm images         # Generate all images (OG + thumbnails)
pnpm icons:generate # Convert SVG icons to components
```

### Code Quality
```sh
npx prettier --write <files>
npx eslint --fix <files>
npx lint-staged     # Run pre-commit hooks manually
```

## Git Workflow

**CRITICAL**: The `master` branch is protected. Always work on feature branches:

```sh
git checkout -b feature/your-feature-name
# Make changes, commit
git push -u origin feature/your-feature-name
```

### Commit Messages
Use [Conventional Commits](https://www.conventionalcommits.org/):
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `refactor:` - Code refactoring
- `style:` - Formatting
- `test:` - Tests
- `chore:` - Maintenance

### Pull Requests
Create PRs with assignment and labels:
```sh
gh pr create --title "Title" --body "Description" --assignee @me --label <bug|documentation|enhancement|maintenance>
```

## Content Collections

Three typed collections defined in `src/content/config.ts`:

1. **journal** (`src/content/journal/YYYY/*.mdx`)
   - Schema: `src/schema/journal.ts`
   - Required: title, date, tags (predefined enum)
   - Optional: subtitle, description, cover, series, featured, draft

2. **haiku** (`src/content/haiku/*.mdx`)
   - Schema: `src/schema/haiku.ts`
   - Minimal frontmatter (title, date)

3. **projects** (`src/content/projects/*.mdx`)
   - Schema: `src/schema/projects.ts`
   - Includes project metadata (URL, sortkey, etc.)

All schemas use Zod for type validation.

## Key Files

- `astro.config.mjs` - Astro configuration, integrations (line 26-82)
- `tailwind.config.cjs` - Custom Tailwind theme (colors, spacing, typography)
- `src/mdx-components.ts` - Maps HTML elements to custom components (line 39-80)
- `src/utils/format-posts.ts` - Content filtering/sorting logic
- `src/utils/remark-reading-time.ts` - Reading time calculation plugin
- `src/utils/remark-widont.ts` - Typography widow prevention
- `src/pages/[...slug].astro` - Dynamic route handler for journal posts

## Build Features

Configured in `astro.config.mjs:26-82`:
- MDX with custom remark plugins (reading time, widont)
- Pagefind integration for search
- Service worker (caches fonts/images)
- Sitemap generation (excludes /cv/, /imprint/)
- Web manifest for PWA support
- View transitions

## Additional Documentation

Detailed architectural patterns and conventions:
- `.claude/docs/architectural_patterns.md` - Design patterns, conventions, architecture decisions

## Development Notes

- Journal posts organized by year: `src/content/journal/YYYY/`
- Tags are constrained by enum in `src/schema/journal.ts:15-34`
- Custom Shiki syntax theme: `shiki-theme.json`
- Asset generation scripts use CommonJS (*.cjs)
- Service worker configured in `astro.config.mjs:58-81`
- Dark mode via Tailwind's `class` strategy (see `tailwind.config.cjs:4`)
