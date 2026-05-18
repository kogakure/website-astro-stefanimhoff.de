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
