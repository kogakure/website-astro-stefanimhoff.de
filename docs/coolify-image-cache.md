# Coolify Image Cache

Astro's image optimisation service (Sharp) generates AVIF and WebP variants during `pnpm build`.
On a 4 vCPU / 8 GB Hetzner VPS with ~120 images, the first build takes 8–15 minutes.
Subsequent builds hit the cache in `node_modules/.astro/assets/` and finish in under 2 minutes.

This document explains how to persist that cache across Coolify deployments so every deploy after the first is fast.

---

## Strategy 1 — BuildKit cache mount (preferred)

The `Dockerfile` build stage uses a BuildKit cache mount:

```dockerfile
RUN --mount=type=cache,id=astro-assets,target=/app/node_modules/.astro \
    pnpm run build
```

Coolify uses Docker BuildKit by default (Docker ≥ 23). The cache is stored on the builder host and reused between builds automatically — no Coolify UI configuration required.

**Verify it works:** On the second deploy, check the Coolify build log for a line like:

```
#12 CACHED
```

near the `pnpm run build` step. If the step shows `CACHED`, the cache mount is active.

---

## What does NOT work — Coolify Persistent Storage

Do not add a Coolify Persistent Storage volume pointing at `/app/node_modules/.astro`.

The multi-stage Dockerfile produces a final `nginx` image. Coolify mounts volumes on the **runtime container** (nginx), not the builder stage. The nginx container never reads or writes `.astro/assets/`, so the volume is dead weight and has no effect on build speed.

---

## Coolify Resource Limits

The resource limits under `Configuration → Resource Limits` apply to the nginx runtime container, not the builder. Keep them either empty or set `Maximum Swap Limit >= Maximum Memory Limit` — Docker's `memory_swap` field is the **combined** memory + swap ceiling. Setting swap lower than memory causes the container to fail to start:

```
Error response from daemon: Minimum memoryswap limit should be larger than memory limit
```

Recommended: leave both `Maximum Memory Limit` and `Maximum Swap Limit` empty. Nginx serving static files uses ~20 MB.

---

## How the cache works

```
Build 1  →  Sharp processes all images  →  writes to node_modules/.astro/assets/
Build 2  →  Sharp checks cache hash      →  reuses existing output, skips processing
```

The cache key is a hash of the source image content + transform options (width, format, quality).
Changing a source image automatically invalidates only that image's cache entries.
