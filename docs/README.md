# stefanimhoff-de — Relaunch & Redesign

## Overview

Full redesign and relaunch of Stefan Imhoff's personal website implementing the **Ma (間) design system** — rooted in Japanese aesthetics and shibui philosophy.

**Branch:** `feature/relaunch-redesign`
**Started:** 2026-04-09
**Status:** In Progress

## Design System

The Ma design system is documented in `specs/design-system/`. Key references:
- `specs/design-system/0 - Index.md` — overview
- `specs/design-system/4 - Color.md` — color palette
- `specs/design-system/5 - Typography.md` — Boska + Switzer
- `specs/design-system/6 - Layout and Grids.md` — grid system
- `specs/design-system/8 - Motion.md` — animation tokens

## Design Mockups

All page designs are in `specs/designs/`. Key references:
- `specs/designs/Homepage.webp` — homepage layout
- `specs/designs/Writing.webp` — writing/journal listing
- `specs/designs/Work.webp` — work/projects page
- `specs/designs/Haiku.webp` — haiku page
- `specs/designs/components/` — component-level designs

## Documents

- [Checklist](./checklist.md) — master task checklist by phase
- [Work Log](./work-log.md) — session log with timestamps
- [Decisions](./decisions.md) — architectural decisions record

## Phases

| Phase | Description | Status |
|-------|-------------|--------|
| 0 | Setup & Documentation | ✅ In Progress |
| 1 | Dependencies & Configuration | ⬜ Todo |
| 2 | Design System (Tailwind v4 + CSS Tokens) | ⬜ Todo |
| 3 | Core React Components | ⬜ Todo |
| 4 | CMDK Command Menu | ⬜ Todo |
| 5 | Layouts & Pages | ⬜ Todo |
| 6 | Motion & Special Interactions | ⬜ Todo |
| 7 | Astro Image Optimization | ⬜ Todo |
| 8 | Routing & Redirects | ⬜ Todo |
| 9 | Testing & Quality | ⬜ Todo |
| 10 | Documentation & Launch Prep | ⬜ Todo |

## Tech Stack Changes

| Before | After |
|--------|-------|
| Astro 4 | Astro 6.1 |
| React 18 | React 19 |
| Tailwind CSS v3 | Tailwind CSS v4 |
| Custom SVG icons | Phosphor Icons |
| Secuela + Fira Code | Boska Variable + Switzer Variable |
| Custom search modal | CMDK + Pagefind |
| No animation library | Framer Motion |
| chart.js | shadcn/ui Charts (Recharts) |
| No shadcn/ui | shadcn/ui |

## Routing Changes

| Before | After |
|--------|-------|
| `/journal` | `/writing` |
| `/journal/YEAR/slug` | `/writing/YEAR/slug` |
| `/projects` | `/work` |
| `/projects/[slug]` | Removed — all work on `/work` |
| `/haiku/[slug]` | Removed — all haiku on `/haiku` |
| `/tag/[tag]` | Removed — in-place filtering on `/writing` |
