# Deployment Checklist

Use this checklist before pushing to `master` or creating pull requests to prevent Coolify build failures.

## Pre-Push Validation

### Quick Test (Recommended before every push)
```bash
pnpm preflight
```
This runs:
- ✅ Unit tests (`vitest`)
- ✅ Docker build test (builder stage only, fast)

### Full Production Build Test (Monthly or before major changes)
```bash
pnpm docker:build
pnpm docker:run
```
Then visit http://localhost:8080 to verify the site works correctly.

## Environment Parity Checks

Before merging to master, verify:

- [ ] **Tests pass**: `pnpm test` succeeds locally
- [ ] **Docker build succeeds**: `pnpm docker:test` completes without errors
- [ ] **Node version matches**: Check `Dockerfile` NODE_VERSION matches your local Node (currently 22.13.1)
- [ ] **pnpm version is correct**: Run `pnpm --version` (should be 9.x)
- [ ] **Lock file committed**: `pnpm-lock.yaml` is up to date and committed
- [ ] **No new native dependencies**: If you added packages with native bindings (sharp, rollup, esbuild), test with Docker
- [ ] **Build artifacts**: Verify `dist/` directory is generated correctly

## Common Issues & Solutions

### Sharp/Rollup Build Failures
- Your `package.json` already has WASM overrides configured
- If issues persist, check Alpine Linux compatibility

### Memory/CPU Issues on Coolify
- The new Dockerfile uses Alpine (lighter than Debian)
- Build cache mounts reduce memory pressure

### Platform Differences (Mac vs Linux)
- The `--platform linux/amd64` flag ensures consistent builds
- Alpine base image matches musl libc configured in package.json

## Current Docker Setup

**Status**: ✅ **Active and tested**

The optimized Alpine-based Dockerfile is now in production use:
- Successfully tested on Coolify preview builds (PR #18)
- Build time: ~2 minutes (first build), ~30 seconds (cached rebuilds)
- All 157 pages build correctly
- Pagefind search indexing working
- Service worker generation functional

The original Dockerfile is preserved in Git history if needed for reference.

## Testing Workflow Summary

```
┌─────────────────────────────────────────────────┐
│ 1. Make changes to code                         │
└──────────────────┬──────────────────────────────┘
                   │
                   v
┌─────────────────────────────────────────────────┐
│ 2. Run: pnpm preflight                          │
│    (Tests + Docker build validation)            │
└──────────────────┬──────────────────────────────┘
                   │
                   v
       ┌───────────┴───────────┐
       │  Build Failed?        │
       └───────────┬───────────┘
            Yes    │   No
       ┌───────────┴───────────┐
       v                       v
┌──────────────┐      ┌─────────────────┐
│ Fix issues   │      │ Commit & Push   │
│ locally      │      │ to feature      │
│              │      │ branch          │
└──────┬───────┘      └────────┬────────┘
       │                       │
       └───────────┬───────────┘
                   v
┌─────────────────────────────────────────────────┐
│ 3. Create PR to master                          │
└──────────────────┬──────────────────────────────┘
                   │
                   v
┌─────────────────────────────────────────────────┐
│ 4. Merge → Coolify auto-builds                  │
└─────────────────────────────────────────────────┘
```

## Build Performance

With the new Alpine-based Dockerfile:

**First build** (no cache):
- Dependencies: ~20 seconds (pnpm install)
- Astro build: ~60 seconds (157 pages)
- Total: ~2 minutes

**Subsequent builds** (with cache):
- Dependencies: ~5 seconds (cache hit)
- Astro build: ~60 seconds (if code changed)
- Total: ~30 seconds (if only dependencies changed)

## Next Steps (Optional)

Consider adding GitHub Actions to automatically run these checks on every PR:
- Prevents merging broken builds
- Catches issues before they reach Coolify
- Free for public repositories
