---
# SI-4gnh
title: Lighthouse CI / unlighthouse integration
status: done
type: feature
priority: low
created_at: 2026-05-17T12:20:04Z
updated_at: 2026-05-17T14:00:00Z
---

**Goal:** Automate Lighthouse auditing so regressions are caught in CI before merge.

### Chosen approach: Unlighthouse (per user preference)

Crawls entire site (not just sampled routes). Weekly CI sweep against production. Manual trigger available.

## Summary of Changes

### Files created

**`unlighthouse.config.ts`**

- Per-category budgets: performance ≥85, accessibility/best-practices/seo = 100
- Excludes: `/cv/`, `/imprint/`, `/design-system/*`
- `samples: 1`, `throttle: true`, `buildStatic: true`
- Site: `https://www.stefanimhoff.de` (used by `unlighthouse:ci` script and CI workflow)

**`.github/workflows/unlighthouse.yml`**

- Trigger: weekly cron (Monday 06:00 UTC) + `workflow_dispatch`
- Installs `@unlighthouse/cli` + `puppeteer` globally (Chrome for CI)
- Runs `unlighthouse-ci --build-static`
- Uploads HTML report as artifact (30-day retention)

### Files modified

**`package.json`**

- Added `"unlighthouse": "unlighthouse --site http://localhost:4321"` — run after `pnpm preview` for local full-site audit
- Added `"unlighthouse:ci": "unlighthouse-ci --build-static"` — uses config site (production)
- Added `@unlighthouse/cli` to devDependencies

**`tsconfig.json`**

- Added `unlighthouse.config.ts` to `include` so typed ESLint linting works

### Local usage

```sh
pnpm preview           # Build + start preview server on :4321
pnpm unlighthouse      # Crawl localhost, open interactive dashboard
```

### CI usage

Runs automatically every Monday. Also triggerable from GitHub Actions → Unlighthouse → Run workflow.
Report available as downloadable artifact for 30 days.
