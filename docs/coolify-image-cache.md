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

## Strategy 2 — Coolify Persistent Storage (fallback)

Use this only if BuildKit cache mounts are not persisting (e.g. Coolify rebuilds from a fresh runner each time).

### Steps

1. In Coolify dashboard, open the application.
2. Go to the **Storages** tab.
3. Click **+ Add Storage**.
4. Fill in:
   - **Type**: Volume Mount
   - **Name**: `astro-image-cache`
   - **Mount Path (container)**: `/app/node_modules/.astro`
5. Click **Save**, then **Redeploy**.

> Use **Volume Mount** (managed by Coolify/Docker), not File Mount or Directory Mount — those are for config files, not build caches.

### Verify the volume was created

SSH to the VPS and run:

```bash
docker volume ls | grep astro-image-cache
du -sh $(docker volume inspect -f '{{ .Mountpoint }}' astro-image-cache_<app-uuid>)
```

After the first build the volume directory should contain `.astro/assets/` with subdirectories of optimised images.

### Evict stale cache

If you rename or remove source images, the Sharp cache may serve stale output. Clear it with:

```bash
docker volume rm <volume-name>
```

Then redeploy to rebuild from scratch.

---

## How the cache works

```
Build 1  →  Sharp processes all images  →  writes to node_modules/.astro/assets/
Build 2  →  Sharp checks cache hash      →  reuses existing output, skips processing
```

The cache key is a hash of the source image content + transform options (width, format, quality).
Changing a source image automatically invalidates only that image's cache entries.
