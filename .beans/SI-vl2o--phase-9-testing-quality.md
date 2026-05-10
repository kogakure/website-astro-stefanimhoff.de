---
# SI-vl2o
title: "Phase 9: Testing & Quality"
status: todo
type: epic
priority: normal
created_at: 2026-04-09T12:14:47Z
updated_at: 2026-04-16T13:02:27Z
---

**Goal:** All tests pass, accessibility and performance validated.

### Steps

1. **Update Vitest tests**: All utility tests should still pass unchanged
2. **Update test imports**: Components moved to new paths
3. **Add component tests** for key React components (CommandMenu, FloatingPreview)
4. **Accessibility check**:
   - Focus indicators: 2px solid Beni with 2px offset on all interactive elements
   - Skip-to-content link as first focusable element
   - CMDK focus trap and return focus
   - All images have alt text
   - `lang="ja"` on Japanese text, `lang="de"` on German haiku
5. **Performance check**: Lighthouse score targets (Performance ≥90, Accessibility ≥95)
6. **Docker build test**: `pnpm docker:test`
7. **Cross-browser**: Chrome, Firefox, Safari

**Critical files:** `src/test/`, `vitest.config.ts`, `Dockerfile`
