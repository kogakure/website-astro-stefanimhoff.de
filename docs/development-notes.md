## Development Notes

- Writing posts organized by year: `src/content/writing/YYYY/`
- Tags are constrained by enum in `src/content.config.ts` (writing collection schema)
- Custom Ma syntax theme: `ma-theme.json`
- Asset generation scripts in `scripts/` directory (CommonJS \*.cjs)
- Service worker configured in `astro.config.mjs`
- Dark mode via Tailwind v4 `@variant dark (&:where(.dark, .dark *))` in `src/styles/global.css`
