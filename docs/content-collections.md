## Content Collections

Eleven typed collections defined in `src/content.config.ts` (single file, schemas inlined using `defineCollection`):

1. **writing** (`src/content/writing/YYYY/*.mdx`)

   - Required: title, date, tags (predefined enum)
   - Optional: subtitle, description, cover (uses Astro `image()` helper), series, featured, draft

2. **haiku** (`src/content/haiku/*.mdx`)

   - Minimal frontmatter (title, date)

3. **work** (`src/content/work/*.mdx`)

   - Project metadata (URL, sortkey, images with `image()` helper, etc.)

4. **books** (`src/content/books/*.mdx`)

5. **audiobooks** (`src/content/audiobooks/*.mdx`)

6. **podcasts** (`src/content/podcasts/*.mdx`)

7. **videos** (`src/content/videos/*.mdx`)

8. **articles** (`src/content/articles/*.mdx`)

9. **organizations** (`src/content/organizations/*.mdx`)

10. **text** (`src/content/text/*.mdx`) — Static page content (about, colophon, etc.)

11. **designSystem** (`src/content/design-system/*.mdx`) — Design system documentation pages

All schemas use Zod-based `defineCollection` in `src/content.config.ts`.
