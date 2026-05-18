## Development Notes

- Journal posts organized by year: `src/content/journal/YYYY/`
- Tags are constrained by enum in `src/schema/journal.ts:15-34`
- Custom Shiki syntax theme: `shiki-theme.json`
- Asset generation scripts use CommonJS (\*.cjs)
- Service worker configured in `astro.config.mjs:58-81`
- Dark mode via Tailwind's `class` strategy (see `tailwind.config.cjs:4`)
