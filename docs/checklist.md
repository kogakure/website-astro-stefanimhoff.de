# Master Checklist

## Phase 0: Setup & Documentation ✅

- [x] Create feature branch `feature/relaunch-redesign`
- [x] Create `docs/README.md`
- [x] Create `docs/checklist.md`
- [x] Create `docs/work-log.md`
- [x] Create `docs/decisions.md`
- [x] Create beans issues for all 10 phases

---

## Phase 1: Dependencies & Configuration

- [ ] Upgrade Astro to v6.1
- [ ] Upgrade React 18 → 19 (`react`, `react-dom`, `@types/react`)
- [ ] Upgrade Tailwind CSS v3 → v4
  - [ ] Remove `@astrojs/tailwind` integration
  - [ ] Install `@tailwindcss/vite`
  - [ ] Update `astro.config.mjs`
- [ ] Install shadcn/ui (`npx shadcn@latest init`)
  - [ ] Configure `components.json`
  - [ ] Set up path aliases in `tsconfig.json`
- [ ] Install `@phosphor-icons/react`
- [ ] Install `cmdk`
- [ ] Install `motion` (Framer Motion v11+)
- [ ] Remove `chart.js`, `react-chartjs-2`, `chartjs-plugin-autocolors`
- [ ] Remove `tailwindcss-logical`, `tailwindcss-opentype`
- [ ] Remove `@astro-community/astro-embed-youtube`
- [ ] Remove `astrojs-service-worker` (evaluate if still needed)
- [ ] Update pnpm overrides for Alpine/musl compatibility
- [ ] Verify `pnpm install` succeeds
- [ ] Verify `pnpm dev` starts
- [ ] Verify `pnpm build` succeeds

---

## Phase 2: Design System (Tailwind v4 + CSS Tokens)

- [ ] Create `src/styles/design-system.css` with `@theme {}` block
  - [ ] Color tokens: Beni, Sumi, Washi, Kiri, Usuzumi, Hai, Nezumi, Yoru
  - [ ] Beni scale: Light, Muted, Pale, Dark
  - [ ] Font tokens: display (Boska), sans (Switzer), mono (Fira Code)
  - [ ] Spacing tokens: space-1 (4px) through space-32 (128px)
  - [ ] Grid tokens: columns, margin, gutter, max-width
- [ ] Add motion CSS custom properties to `:root`
  - [ ] Easing: --ease-enter, --ease-exit, --ease-standard
  - [ ] Duration: --duration-instant through --duration-deliberate
- [ ] Update `src/styles/fonts.css`
  - [ ] Remove Secuela @font-face rules
  - [ ] Add Boska Variable @font-face (Bold only)
  - [ ] Add Switzer Variable @font-face (Regular, Italic, SemiBold, Bold)
  - [ ] Copy font files to `public/assets/fonts/`
- [ ] Delete `tailwind.config.cjs`
- [ ] Configure dark mode (`@variant dark` in Tailwind v4)
- [ ] Update `src/styles/global.css` to import design-system.css
- [ ] Verify Tailwind classes work in dev mode

---

## Phase 3: Core React Components

### Setup
- [ ] Create `src/components/ui/` (shadcn/ui primitives)
- [ ] Create `src/components/typography/`
- [ ] Create `src/components/navigation/`
- [ ] Create `src/components/layout/`
- [ ] Create `src/components/content/`
- [ ] Create `src/components/mdx/`

### Typography
- [ ] `Heading.tsx` (h1–h6, Boska for h1, Switzer for h2–h6)
- [ ] `Paragraph.tsx`
- [ ] `Hyperlink.tsx` (Beni, animated underline)
- [ ] `Blockquote.tsx` (quiet + expressive variants)
- [ ] `Pullquote.tsx`
- [ ] `Divider.tsx`
- [ ] `OrderedList.tsx`, `UnorderedList.tsx`, `ListItem.tsx`

### Navigation
- [ ] `Logo.tsx` (Hanko seal, Beni, hover rotation)
- [ ] `MainNavigation.tsx` (triggers CMDK)
- [ ] `ThemeToggle.tsx` (Phosphor Sun/Moon)
- [ ] `CallToActionLink.tsx` (arrow + hover animation)
- [ ] `SocialLinks.tsx`
- [ ] `PageHeader.tsx`
- [ ] `PageFooter.tsx`

### Content
- [ ] `Figure.tsx`
- [ ] `ArticleImage.tsx` (wraps Astro Image)
- [ ] `Verse.tsx`
- [ ] `Ruby.tsx`
- [ ] `Banner.tsx`
- [ ] `DisplayBox.tsx`
- [ ] `ThemeBox.tsx`
- [ ] `Book.tsx`, `AmazonBook.tsx`, `Bookshelf.tsx`
- [ ] `ColorSwatch.tsx`, `ColorStack.tsx`
- [ ] `Flag.tsx`, `AppleTVFlag.tsx`, `NetflixFlag.tsx`, `PrimeVideoFlag.tsx`
- [ ] `YouTube.tsx` (simple iframe wrapper)
- [ ] `Spotify.tsx` (iframe wrapper)
- [ ] `DownloadLink.tsx`, `EmailLink.tsx`, `ProductLink.tsx`
- [ ] `BarChart.tsx` (shadcn/ui Recharts)
- [ ] `DoughnutChart.tsx` (shadcn/ui Recharts PieChart)
- [ ] `Tag.tsx`
- [ ] `JournalList.tsx` → `WritingList.tsx`

### Delete
- [ ] Remove `src/components/icons/` directory
- [ ] Delete `icons-generate.cjs`

### MDX Mapping
- [ ] Update `src/mdx-components.ts` to use all React components

---

## Phase 4: CMDK Command Menu

- [ ] Create `src/components/navigation/CommandMenu.tsx`
  - [ ] Navigation group with Phosphor icons
  - [ ] Pagefind search results group
  - [ ] Theme toggle command
  - [ ] Framer Motion open/close animation
  - [ ] Cmd+K keyboard shortcut listener
  - [ ] Focus trap and return focus
- [ ] Create `src/components/navigation/SearchResults.tsx`
- [ ] Integrate Pagefind JS API (dynamic import)
- [ ] Add CommandMenu to layout
- [ ] Test: Cmd+K opens, Escape closes, search returns results, navigation works

---

## Phase 5: Layouts & Pages

### Layouts
- [ ] Update `BaseLayout.astro` (SEO, theme, CMDK mount)
- [ ] Update `PageLayout.astro`
- [ ] Update `GridLayout.astro`

### Pages
- [ ] `src/pages/index.astro` — homepage
- [ ] `src/pages/writing.astro` — (was journal.astro)
- [ ] `src/pages/writing/[...slug].astro` — (was [...slug].astro)
- [ ] `src/pages/work.astro` — (was projects.astro)
- [ ] `src/pages/haiku.astro` — single page, all haiku
- [ ] `src/pages/about.mdx`
- [ ] `src/pages/colophon.mdx`
- [ ] `src/pages/tools.mdx`
- [ ] `src/pages/now.mdx`
- [ ] `src/pages/life-rules.mdx`
- [ ] `src/pages/libertarianism.mdx`
- [ ] `src/pages/imprint.mdx`
- [ ] `src/pages/cv.astro`
- [ ] `src/pages/404.astro`

### Delete
- [ ] Remove `src/pages/journal.astro`
- [ ] Remove `src/pages/projects.astro`
- [ ] Remove `src/pages/tag.astro`
- [ ] Remove `src/pages/tag/[tag].astro`
- [ ] Remove `src/pages/haiku/[...slug].astro`
- [ ] Remove `src/pages/projects/[...slug].astro`

### Features
- [ ] In-place tag filtering on `/writing` (React state, URL params)
- [ ] Hover cover preview on essay titles

---

## Phase 6: Motion & Special Interactions

- [ ] `FloatingPreview.tsx` — cursor-following image on essay title hover
- [ ] `ParallaxPoem.tsx` — horizontal scroll linked to vertical scroll
- [ ] CSS: link underline draw animation (TextLink)
- [ ] CSS/JS: CTA arrow translate 4px on hover
- [ ] CSS/JS: Logo 2-3° rotation on hover
- [ ] Framer Motion: CMDK modal open/close (opacity + translateY)
- [ ] Add `useReducedMotion()` to all motion components

---

## Phase 7: Astro Image Optimization

- [ ] Configure Astro image service in `astro.config.mjs`
- [ ] Convert Image components to use `astro:assets`
- [ ] Add `widths` and `sizes` to cover images
- [ ] Add `widths` and `sizes` to work/project images
- [ ] Update `Dockerfile` with cache volume for `.cache/astro-images`
- [ ] Document Coolify persistent volume setup in `docs/decisions.md`
- [ ] Verify images render correctly in dev and build

---

## Phase 8: Routing & Redirects

- [ ] Add redirects to `nginx.conf`:
  - [ ] `/journal` → `/writing` (permanent)
  - [ ] `/journal/(.*)` → `/writing/$1` (permanent)
  - [ ] `/projects` → `/work` (permanent)
  - [ ] `/projects/(.*)` → `/work` (permanent)
  - [ ] `/tag/(.*)` → `/writing?tag=$1` (permanent)
  - [ ] `/haiku/(.*)` → `/haiku` (permanent)
- [ ] Update `astro.config.mjs` sitemap excludes
- [ ] Search and update all internal links in `src/content/` (`/journal/` → `/writing/`)
- [ ] Update RSS feed generators (`rss.xml.js`, `rss-haiku.xml.js`)
- [ ] Update JSON-LD breadcrumbs in layouts

---

## Phase 9: Testing & Quality

- [ ] Run `pnpm test` — all utility tests pass
- [ ] Fix any broken test imports (components moved)
- [ ] Add tests for `CommandMenu.tsx`
- [ ] Add tests for tag filter logic
- [ ] Accessibility audit:
  - [ ] Focus indicators: 2px solid Beni (#900B20) with 2px offset
  - [ ] Skip-to-content link as first focusable element
  - [ ] CMDK focus trap and return focus on close
  - [ ] All images have alt text
  - [ ] `lang="ja"` on Japanese text, `lang="de"` on German haiku
- [ ] Run `pnpm docker:test` — Docker build succeeds
- [ ] Lighthouse audit (target: Performance ≥90, Accessibility ≥95)
- [ ] Test in Chrome, Firefox, Safari
- [ ] Test dark mode
- [ ] Test reduced motion (System Preferences → Reduce Motion)
- [ ] Verify 60+ nginx redirects work

---

## Phase 10: Documentation & Launch Prep

- [ ] Update `docs/checklist.md` — all items checked
- [ ] Update `docs/work-log.md` — final session entry
- [ ] Update `src/content/colophon.mdx` — new tech stack
- [ ] Verify `beans list` shows all issues completed
- [ ] Create PR: `feature/relaunch-redesign` → `master`
  - [ ] Title: "Relaunch: Ma design system, React 19, Tailwind v4, CMDK"
  - [ ] Body: summary of all changes
  - [ ] **DO NOT MERGE** — wait for user review
