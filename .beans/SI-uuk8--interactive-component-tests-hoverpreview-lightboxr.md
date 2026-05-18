---
# SI-uuk8
title: "Interactive component tests: HoverPreview, LightboxRoot, charts, Marquee, Roadmap, SeriesStepper, TableOfContents"
status: completed
type: task
priority: normal
created_at: 2026-05-17T12:19:42Z
updated_at: 2026-05-17T12:36:46Z
---

**Goal:** Add vitest unit + a11y tests for the interactive components that were deferred in SI-vl2o (Phase 9).

### Components to cover

| Component       | File                                             | Test type   |
| --------------- | ------------------------------------------------ | ----------- |
| HoverPreview    | `src/components/interactive/HoverPreview.tsx`    | unit + a11y |
| LightboxRoot    | `src/components/interactive/LightboxRoot.tsx`    | unit + a11y |
| BarChart        | `src/components/interactive/BarChart.tsx`        | unit + a11y |
| DoughnutChart   | `src/components/interactive/DoughnutChart.tsx`   | unit + a11y |
| Marquee         | `src/components/interactive/Marquee.tsx`         | unit + a11y |
| Roadmap         | `src/components/interactive/Roadmap.tsx`         | unit + a11y |
| SeriesStepper   | `src/components/interactive/SeriesStepper.tsx`   | unit + a11y |
| TableOfContents | `src/components/interactive/TableOfContents.tsx` | unit + a11y |

### Approach

- Follow existing pattern in `src/components/interactive/` test files.
- Use `vitest-axe` for a11y assertions (already installed, see `src/test/setup.ts`).
- Mock `motion/react` where needed (LazyMotion/m.\* components) — see existing mocks in `src/test/`.
- Each test file: render + smoke assert + `toHaveNoViolations()`.

### Deferred from

SI-vl2o — smoke-run only was agreed; no new tests unless regressions appeared.
