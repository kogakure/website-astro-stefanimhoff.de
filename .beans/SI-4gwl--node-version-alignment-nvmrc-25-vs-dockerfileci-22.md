---
# SI-4gwl
title: "Node version alignment: .nvmrc 25 vs Dockerfile/CI 22.13.1"
status: completed
type: task
priority: normal
created_at: 2026-05-17T12:20:20Z
updated_at: 2026-05-17T12:36:50Z
---

**Goal:** All environments use the same Node version.

### Resolution: Node 22.13.1 LTS

`.nvmrc`: `25.0.0` → `22.13.1`. `mise.toml`: `latest` → `22.13.1`. Dockerfile and CI already at `22.13.1` — no changes needed there.

All environments now consistent:

| Environment                       | Node version |
| --------------------------------- | ------------ |
| `.nvmrc`                          | 22.13.1 ✓    |
| `mise.toml`                       | 22.13.1 ✓    |
| `Dockerfile` (`ARG NODE_VERSION`) | 22.13.1 ✓    |
| CI `.github/workflows/tests.yml`  | 22.13.1 ✓    |

### Side fix: pnpm-workspace.yaml allowBuilds

Installing `@unlighthouse/cli` pulled in `puppeteer`, `@parcel/watcher`, and `vue-demi` as transitive deps. Their `allowBuilds` entries in `pnpm-workspace.yaml` were unresolved placeholders (`set this to true or false`), causing `pnpm install` to fail under pnpm 11 strict mode.

Resolved:

- `@parcel/watcher: true` — native file-watcher bindings required
- `puppeteer: false` — skip Chromium download; use system Chrome for unlighthouse
- `vue-demi: true` — Vue compat shim postinstall required

### Verification

`pnpm install` clean + 416/416 tests green.
