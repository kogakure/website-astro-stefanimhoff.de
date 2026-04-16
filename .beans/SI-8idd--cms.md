---
# SI-8idd
title: CMS
status: draft
type: task
priority: normal
created_at: 2026-04-16T12:58:01Z
updated_at: 2026-04-16T13:00:03Z
---

The site should at the end integrate a CMS to work on articles and content. Some options to consider are:

- CMS: Option 1, [Tina CMS](https://tina.io/) — _Most Loved_: Tina is widely regarded as the **most loved Git-based CMS** in the developer community, consistently scoring high satisfaction in JAMstack surveys. It's open-source, Git-powered, and built with React/TypeScript in mind—making it a natural fit for Next.js. Its killer feature is **real-time visual editing**: content editors see changes directly on the live page as they type. It supports Markdown, MDX, and JSON, with a type-safe schema API. You can self-host it entirely for free, or use **TinaCloud** (free tier available) for managed auth and a hosted backend.
- CMS: Option 2, [Decap CMS](https://decapcms.org/) — _formerly Netlify CMS_: This is the **rebranded version of Netlify CMS**—so you already know it! It was handed off to the community as a fully open-source project. It's the most mature and battle-tested Git-based CMS, framework-agnostic, with a large community and extensive docs. Setup is low-complexity, and it supports GitHub, GitLab, and Bitbucket as backends. The UI is more traditional (no live preview), but it's rock-solid and widely used.
- CMS: Option 3, [Keystatic](https://keystatic.com/) — _Best Developer Experience_: A newer, modern Git-based CMS by Thinkmill (the team behind Keystone.js). It stores content as Markdown, YAML, or JSON directly in your repo—**no database, no external service**. It has a **TypeScript-first API**, supports Markdoc and MDX, and offers both a local editing mode (great for dev) and a GitHub-connected cloud mode. It's conceived specifically for Next.js, Remix, and Astro. Developers who've switched to it often call it their new favorite.
