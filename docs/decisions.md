# Architectural Decisions

## ADR-001: Stay with Astro (not migrate to Next.js)

**Date:** 2026-04-09
**Status:** Decided

**Decision:** Keep Astro as the framework, upgrade to v6.1. Convert all component logic to React (.tsx) while keeping Astro for layouts and page routing.

**Rationale:** The site is content-heavy with MDX articles, a haiku collection, and static project pages. Astro's islands architecture is well-suited — React is only needed for interactive components (CMDK, tag filter, charts, hover previews). A full Next.js migration would require rewriting all page routing and content collection handling for limited benefit.

---

## ADR-002: Tailwind v4 CSS-based config

**Date:** 2026-04-09
**Status:** Decided

**Decision:** Migrate from `tailwind.config.cjs` to Tailwind v4's CSS-based `@theme` configuration in `src/styles/design-system.css`.

**Rationale:** Tailwind v4 removes the JS config file in favor of CSS custom properties inside `@theme {}`. This aligns better with the Ma design system's token-based approach and enables native CSS variable usage throughout.

---

## ADR-003: Static output + Docker cache volume for images

**Date:** 2026-04-09
**Status:** Decided

**Decision:** Keep `output: 'static'` for the Astro build. Persist `.cache/astro-images` as a Docker volume in Coolify to avoid re-processing images on every build.

**Rationale:** Server-mode (`output: 'server'`) would require Node.js at runtime and a larger Docker image. Static output keeps the production image as nginx-only (~50 MB). The image cache volume solves the slow build problem without added complexity.

---

## ADR-004: CMDK replaces separate search + navigation modals

**Date:** 2026-04-09
**Status:** Decided

**Decision:** Replace the existing `SearchModal.astro` and `MenuModal.astro` with a single CMDK command palette component.

**Rationale:** CMDK provides keyboard-first navigation (Cmd+K), full search integration via Pagefind JS API, and a unified UX. This matches the design mockup showing the command palette in dark mode.

---

## ADR-005: shadcn/ui Charts (Recharts) replaces chart.js

**Date:** 2026-04-09
**Status:** Decided

**Decision:** Remove `chart.js`, `react-chartjs-2`, and `chartjs-plugin-autocolors`. Migrate `BarChart.tsx` and `DoughnutChart.tsx` to shadcn/ui chart components (built on Recharts).

**Rationale:** Recharts integrates with the design system token approach and is already a shadcn/ui dependency. The existing data files (`src/data/journal/`) require no changes — only the visualization layer changes.

---

## ADR-006: YouTube as simple React iframe wrapper

**Date:** 2026-04-09
**Status:** Decided

**Decision:** Replace `@astro-community/astro-embed-youtube` with a simple `YouTube.tsx` React component wrapping an `<iframe>`.

**Rationale:** Blog posts use YouTube embeds in MDX. Since MDX components are now React, the Astro-specific embed library is unnecessary. A thin iframe wrapper is sufficient and removes a dependency.

---

## ADR-007: Logical CSS properties via Tailwind v4 built-ins

**Date:** 2026-04-09
**Status:** Decided

**Decision:** Remove `tailwindcss-logical` plugin. Use Tailwind v4's built-in logical property support (`ms-`, `me-`, `ps-`, `pe-`, `bs-`, `be-` prefixes).

**Rationale:** Tailwind v4 includes logical property utilities natively. The external plugin is no longer needed and removes a dependency.
