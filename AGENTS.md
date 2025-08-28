AGENTS Guidelines

1. Install: pnpm i (Node via .nvmrc / .tool-versions). Dev: pnpm dev. Build: pnpm build. Preview: pnpm preview. No test suite defined (add if needed); run single script via pnpm <script>.
2. Lint: npx eslint . (autoset by lint-staged). Format: npx prettier --write . Pre-commit runs lint-staged -> prettier then eslint fix per .lintstagedrc.json.
3. Tech: Astro + React + TS, Tailwind, MDX. Use ESM ("type":"module"). Prefer .astro for pages/layouts; isolated React (.tsx) only when interactivity or charts needed.
4. Imports: Rely on Prettier organize-imports & tailwind plugin; no manual sorting. Group: std libs, external deps, internal (absolute/relative). Omit file extensions except for non-code assets. Avoid deep relative chains; create utility barrels if scaling (>3 siblings).
5. Formatting: Prettier enforced; tabs (width 4) except MD/MDX/YAML (2 spaces). Single quotes in code, double in MD/YAML. 100 char print width. Trailing commas es5. LF endings.
6. Types: Strict TS (see tsconfig). Always type exported function params/return if not inferred. Use readonly, const assertions, narrow early. Prefer union types + discriminants over enums unless exhaustive mapping.
7. Components: PascalCase for React/Astro components; files match component. One default export per component file. Hooks (if added) camelCase prefixed use.
8. Variables/functions: camelCase, const by default. UPPER_CASE only for true constants. Avoid Hungarian notation.
9. Content collections: Use defined schemas in src/schema/\* for validation; extend there rather than ad hoc field access. Central site/meta config in data/site.ts.
10. CSS: Tailwind utility-first; extract repeated patterns via @apply in scoped layer components or create small Astro components.
11. Errors: Fail fast; throw Error with descriptive message; no silent catch. Wrap external IO (fs/network) with try/catch and rethrow enriched context.
12. Date/time: Use utils/date.ts helpers. Avoid new Date(...) formatting inline.
13. Performance: Prefer static generation; use React only when necessary. Avoid moment for new code (consider Intl APIs) but keep legacy until refactor.
14. Images: Use provided conversion scripts (pnpm webp, og:generate, icons:generate). Do not commit large unoptimized assets.
15. Accessibility: Use semantic HTML in Astro; add alt text; a11y lint via eslint-plugin-jsx-a11y (applies to .tsx portions).
16. Markdown/MDX: Frontmatter validated; writing style not enforced here; keep line length flexible (formatter handles wrapping).
17. Commit hygiene: Small, focused commits; pre-commit will block formatting issues. Run full lint before large refactors.
18. Adding posts: Use plop (pnpm plop) generators where available instead of manual copy to ensure schema alignment.
19. Secrets: Do not hardcode keys; if env vars needed add to env.d.ts and .env (not committed) and reference import.meta.env.
20. Automation: Husky pre-commit + lint-staged only; extend by adding new hooks if necessary (keep fast <5s).
