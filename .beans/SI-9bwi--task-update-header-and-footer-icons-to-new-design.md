---
# SI-9bwi
title: 'Task: Update header and footer icons to new design'
status: completed
type: task
priority: normal
created_at: 2026-04-10T07:33:38Z
updated_at: 2026-04-10T07:42:50Z
---

Replace old custom SVG icons with Phosphor Icons (already used in CommandMenu.tsx via @phosphor-icons/react):

### ThemeToggle (src/components/ThemeToggle.astro)
- Replace current Sun/Moon icons with a single 'CircleHalf' Phosphor icon
- On switch, animate a 180° rotation (CSS transform transition)
- Light mode: show as-is; Dark mode: rotated 180°

### CMDK menu button (src/components/PageHeader.astro)
- Replace current Menu icon with 'ListMagnifyingGlass' Phosphor icon

### Footer social icons (src/components/PageFooter.astro)
- Replace current custom SVG icons (TwitterX, Instagram, Github) with Phosphor equivalents
- Check which Phosphor icon names correspond to X/Twitter, Instagram, GitHub
- Note: Phosphor icons for social platforms: XLogo, InstagramLogo, GithubLogo

These are all from @phosphor-icons/react which is already installed (used in CommandMenu.tsx).
For use in Astro .astro files: import from '@phosphor-icons/react' and render server-side (no client: directive needed for static icons).
