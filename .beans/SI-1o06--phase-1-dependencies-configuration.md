---
# SI-1o06
title: "Phase 1: Dependencies & Configuration"
status: completed
type: epic
priority: normal
created_at: 2026-04-09T12:14:46Z
updated_at: 2026-04-16T13:00:55Z
---

**Goal:** Upgrade all packages, install new dependencies.

### Steps

1. **Upgrade Astro** to v6.1 (latest — check breaking changes from v4 → v6)
2. **Upgrade React 18 → 19** (`react`, `react-dom`, `@types/react`)
3. **Upgrade Tailwind CSS v3 → v4**:
   - Remove `tailwind.config.cjs` (v4 uses CSS-based config)
   - Remove `@astrojs/tailwind` integration
   - Install `@tailwindcss/vite` and configure in `astro.config.mjs`
   - Migrate all custom config to `src/styles/global.css` using `@theme`
4. **Install shadcn/ui**:
   - Init with `npx shadcn@latest init`
   - Configure `components.json` for React (not Next.js)
   - Set up path aliases in `tsconfig.json`
5. **Install Phosphor Icons**: `@phosphor-icons/react`
6. **Install CMDK**: `cmdk`
7. **Install Framer Motion**: `motion` (v11+)
8. **Remove unused packages**: `tailwindcss-logical`, `tailwindcss-opentype`, `chart.js`, `react-chartjs-2`, `chartjs-plugin-autocolors` (replaced by shadcn/ui Charts + Recharts)
   - Keep `@astro-community/astro-embed-youtube` OR replace with a simple React `YouTube.tsx` wrapper (`<iframe>` embed — no package needed)
   - shadcn/ui charts (Recharts) replace chart.js: `BarChart.tsx` → shadcn BarChart, `DoughnutChart.tsx` → shadcn PieChart with `innerRadius`; data files in `src/data/journal/` unchanged
9. **Update pnpm overrides** for musl/Alpine compatibility

**Critical files:** `package.json`, `astro.config.mjs`, `tsconfig.json`, `postcss.config.cjs`
