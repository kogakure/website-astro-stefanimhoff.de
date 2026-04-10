---
# SI-stbm
title: 'Task: Replace logo with new version from specs/assets/logo.svg'
status: completed
type: task
priority: normal
created_at: 2026-04-10T07:33:29Z
updated_at: 2026-04-10T07:42:50Z
---

The new logo SVG is at specs/assets/logo.svg. It needs to replace the current Hanko.tsx icon component used in Logo.astro.

Steps:
- Copy/reference specs/assets/logo.svg content into the Hanko.tsx icon (or create a new Logo component that uses the SVG inline)
- The logo should render at the same size as the current hanko icon: h-[clamp(40px,_3vw,_55px)] w-[clamp(40px,_3vw,_55px)]
- Keep the hover effects (scale, fill-accent, drop-shadow) if they still look appropriate

Files: src/components/icons/Hanko.tsx or src/components/Logo.astro
