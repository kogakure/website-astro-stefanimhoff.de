---
# SI-aqs1
title: Copy email function
status: completed
type: task
priority: normal
created_at: 2026-04-16T12:32:31Z
updated_at: 2026-04-29T10:07:22Z
parent: SI-akaq
---

The email addresses on @src/pages/index.astro @src/pages/imprint.mdx @src/pages/cv.astro should all use the EmailLink component but with the design of the homepage (the arrow). The email address should be obfuscated as protection against SPAM. It should not lead to the default email client, but instead show a small tooltip (shadcn/ui) on hover that says "Copy email address". When the user clicks on the email address, it should copy the email address to the clipboard and show a small tooltip that says "Email address copied!" for 2 seconds.

## Summary of Changes

- Installed shadcn/ui tooltip via `pnpm dlx shadcn@latest add tooltip` (`src/components/ui/tooltip.tsx`)
- Created `components.json` at root for shadcn/ui (Tailwind v4, new-york style)
- Added shadcn/ui CSS variables to `src/styles/global.css`, mapped to Ma Design System tokens; dark mode overrides in `.dark {}` block
- Rewrote `src/components/content/EmailLink.tsx`: arrow design (MoreLink-style), controlled Radix tooltip, clipboard copy on click, 'Email address copied!' message for 2s
- Removed `handleEmailClick`/`setEmailLink` from `Scripts.astro` (React handles it now)
- Updated `index.astro`: replaced `MoreLink mailto:` with `EmailLink client:load`
- Updated `cv.astro`: added `client:load`, removed `icon={false}`
- Updated `imprint.mdx`: added `client:load`
- Added shadcn/ui section to `CLAUDE.md`
