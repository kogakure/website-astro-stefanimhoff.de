---
# SI-kezu
title: Libertarianism Page
status: todo
type: feature
priority: normal
created_at: 2026-04-16T12:01:35Z
updated_at: 2026-05-10T06:18:30Z
---

I want to redesign the page under `/libertarianism` that holds a collection of recommended books, articles, podcasts, people, etc.

Currently it is a simple MDX page with a boring list of links. I want the future page to be engaging and entertaining. It should be an interesting hub to learn about Libertarianism, Anarcho-Capitalism, Anarchism and Freedom ideologies.

I would like to have at the start the existing cover image and also keep the regular grid used on every page.

Below that I thought of listing the important rules of Libertarianism, e. g. "Self-Ownership", "Ownership of private property", "Non-agression principle" etc.

There could also be very short descriptions of different concepts and schools and what they mean.

I also want to have dedicated sections for each medium:

- Books
- Audio Books
- Podcasts
- Magazines
- Videos
- Articles
- Organizations

Possibly others, feel free to suggest.

Ideally the items would create the page from Astro collections with yaml frontmatter, easy to add a new one.

Each category should have specific fields to cover all the usecases:

## Books

Using the Book Component.

- Cover
- Title, Subtitle
- Author
- Language
- Paid?
- Links (possibly multiple)
- Favorite badge
- Description

## Audio Books

Creating a new square Podcast/Audio Book Component with similar styles to the Book component.

- Cover
- Title, Subtitle
- Author
- Language
- Paid?
- Links to Apple (Phoshor Icon), Spotify (Phoshor) or custom URLs (Phoshor Icon)
- Favorite badge
- Description

## Podcasts

Creating a new square Podcast/Audio Book Component with similar styles to the Book component.

- Cover
- Show Name
- Moderator
- Language
- Paid?
- Links to Apple (Phoshor Icon), Spotify (Phoshor) or custom URLs (Phoshor Icon)
- Description

## Magazines

- Title
- Description
- Link

## Videos

Not decided if shown as a list or with images. Open to suggestions.

- Title
- Language
- YouTube Thumbnail (?)

## Articles

Most likely as a list.

- Title
- URL

## Organizations

Most likely as a list.

- Title
- URL

Open to suggestions for other categorizations and other yaml fields.

---

There might also be a _Roadmap_ feature that leads new people on a recommended path to learn about the topic. What to watch first, read first etc.

The page should follow the rules of the Ma design system and its rules regarding typography, spacing, colors, grids, component use, etc. The @DESIGN.md is a entry point.

Use any skill you need, like the design skill or frontend skill to create an engaging special page that is still easy to extend with new items.

## Implementation Plan\n\nSee Claude plan file: \n\n## Tasks\n\n- [ ] Add 7 content collections to (books, audiobooks, podcasts, magazines, videos, articles, organizations) with discriminator\n- [ ] Create \n- [ ] Create (reused for audiobooks + podcasts)\n- [ ] Create \n- [ ] Create \n- [ ] Create (if not already present)\n- [ ] Create MDX content files: \n- [ ] Register new components in \n- [ ] Create (collection-driven replacement)\n- [ ] Migrate existing libertarianism.mdx items into collection files\n- [ ] Delete \n- [ ] Verify: 08:18:15 [content] Syncing content

08:18:15 [content] Content config changed
08:18:15 [content] Clearing content store
08:18:15 [content] Synced content
08:18:15 [types] Generated 274ms
08:18:15 [build] output: "static"
08:18:15 [build] mode: "static"
08:18:15 [build] directory: /Users/kogakure/Code/personal/websites/stefanimhoff-de/dist/
08:18:15 [build] Collecting build info...
08:18:15 [build] ✓ Completed in 291ms.
08:18:15 [build] Building static entrypoints...
08:18:21 [vite] ✓ built in 5.89s
08:18:25 [vite] ✓ built in 3.75s
08:18:25 [build] Rearranging server assets...

generating static routes
08:18:27 ├─ /404.html (+23ms)
08:18:27 ├─ /about/index.html (+11ms)
08:18:27 ├─ /colophon/index.html (+9ms)
08:18:27 ├─ /cv/index.html (+21ms)
08:18:27 ├─ /design-system/components/index.html (+18ms)
08:18:27 ├─ /design-system/brand-foundations/index.html (+13ms)
08:18:27 ├─ /design-system/naming-and-voice/index.html (+6ms)
08:18:27 ├─ /design-system/logo/index.html (+10ms)
08:18:27 ├─ /design-system/color/index.html (+11ms)
08:18:27 ├─ /design-system/typography/index.html (+10ms)
08:18:27 ├─ /design-system/layout-and-grids/index.html (+8ms)
08:18:27 ├─ /design-system/spacing/index.html (+10ms)
08:18:27 ├─ /design-system/imagery/index.html (+8ms)
08:18:27 ├─ /design-system/motion/index.html (+11ms)
08:18:27 ├─ /design-system/accessibility/index.html (+8ms)
08:18:27 ├─ /design-system/index.html (+8ms)
08:18:27 ├─ /haiku/index.html (+7ms)
08:18:27 ├─ /imprint/index.html (+8ms)
08:18:27 ├─ /libertarianism/index.html (+11ms)
08:18:27 ├─ /life-rules/index.html (+9ms)
08:18:27 ├─ /now/index.html (+6ms)
08:18:27 ├─ /rss-haiku.xml (+20ms)
08:18:27 ├─ /rss.xml (+182ms)
08:18:27 ├─ /tools/index.html (+10ms)
08:18:27 ├─ /traditional-colors-of-japan/index.html (+15ms)
08:18:27 ├─ /work/index.html (+9ms)
08:18:27 ├─ /writing/koi-design/index.html (+7ms)
08:18:27 ├─ /writing/gtd/index.html (+5ms)
08:18:27 ├─ /writing/japanese-colors/index.html (+4ms)
08:18:27 ├─ /writing/git/index.html (+6ms)
08:18:27 ├─ /writing/gitweb-theme/index.html (+4ms)
08:18:27 ├─ /writing/home-documentary/index.html (+4ms)
08:18:27 ├─ /writing/rework/index.html (+4ms)
08:18:27 ├─ /writing/webstandards-magazine-django/index.html (+4ms)
08:18:27 ├─ /writing/vim/index.html (+8ms)
08:18:27 ├─ /writing/decodeunicode/index.html (+5ms)
08:18:27 ├─ /writing/logo-design/index.html (+5ms)
08:18:27 ├─ /writing/website-typography/index.html (+7ms)
08:18:27 ├─ /writing/john-seymour-books/index.html (+5ms)
08:18:27 ├─ /writing/gulp-tutorial-1-intro-setup/index.html (+7ms)
08:18:27 ├─ /writing/gulp-tutorial-2-development-server-browsersync-configuration/index.html (+7ms)
08:18:27 ├─ /writing/gulp-tutorial-3-build-clean-jekyll/index.html (+7ms)
08:18:27 ├─ /writing/gulp-tutorial-4-css-generation-sass/index.html (+8ms)
08:18:27 ├─ /writing/gulp-tutorial-5-javascripts-browserify/index.html (+9ms)
08:18:27 ├─ /writing/gulp-tutorial-6-images-vector-fonts/index.html (+7ms)
08:18:27 ├─ /writing/gulp-tutorial-7-base64/index.html (+6ms)
08:18:27 ├─ /writing/gulp-tutorial-8-watch/index.html (+5ms)
08:18:27 ├─ /writing/gulp-tutorial-9-linting-scss-and-javascript/index.html (+5ms)
08:18:27 ├─ /writing/gulp-tutorial-10-generating-sprites/index.html (+5ms)
08:18:27 ├─ /writing/gulp-tutorial-11-production-build-server-and-jekyll/index.html (+6ms)
08:18:27 ├─ /writing/gulp-tutorial-12-optimize-css-javascript-images-and-html/index.html (+10ms)
08:18:27 ├─ /writing/gulp-tutorial-13-revisioning/index.html (+7ms)
08:18:27 ├─ /writing/gulp-tutorial-14-deploying-the-website/index.html (+5ms)
08:18:27 ├─ /writing/gulp-tutorial-15-performance-improvements-webp-gzip/index.html (+6ms)
08:18:27 ├─ /writing/gulp-tutorial-16-postcss/index.html (+9ms)
08:18:28 ├─ /writing/calisthenics/index.html (+7ms)
08:18:28 ├─ /writing/motivational-video/index.html (+10ms)
08:18:28 ├─ /writing/human-documentary/index.html (+5ms)
08:18:28 ├─ /writing/japanese-netflix-tv-show-underwear/index.html (+5ms)
08:18:28 ├─ /writing/minimalism/index.html (+9ms)
08:18:28 ├─ /writing/gitbook/index.html (+7ms)
08:18:28 ├─ /writing/attention/index.html (+9ms)
08:18:28 ├─ /writing/morning-routine/index.html (+8ms)
08:18:28 ├─ /writing/storing-information/index.html (+8ms)
08:18:28 ├─ /writing/everyday-carry/index.html (+7ms)
08:18:28 ├─ /writing/101-things-you-can-do/index.html (+23ms)
08:18:28 ├─ /writing/apps-tools-services/index.html (+37ms)
08:18:28 ├─ /writing/zettelkasten-note-taking-devonthink/index.html (+31ms)
08:18:28 ├─ /writing/new-website-2020/index.html (+11ms)
08:18:28 ├─ /writing/new-website-2020-inspiration/index.html (+10ms)
08:18:28 ├─ /writing/new-website-2020-design/index.html (+13ms)
08:18:28 ├─ /writing/new-website-2020-development/index.html (+10ms)
08:18:28 ├─ /writing/tools-i-use-for-note-taking/index.html (+7ms)
08:18:28 ├─ /writing/best-of-2020/index.html (+25ms)
08:18:28 ├─ /writing/new-website-2021/index.html (+10ms)
08:18:28 ├─ /writing/processing-information-into-notes/index.html (+9ms)
08:18:28 ├─ /writing/interpretation-the-gods-of-the-copybook-headings/index.html (+22ms)
08:18:28 ├─ /writing/devonthink-obsidian-for-note-taking/index.html (+7ms)
08:18:28 ├─ /writing/learning-poems/index.html (+5ms)
08:18:28 ├─ /writing/the-old-man-on-the-bench/index.html (+5ms)
08:18:28 ├─ /writing/using-readwise-with-obsidian-for-note-talking/index.html (+6ms)
08:18:28 ├─ /writing/the-decentralized-web-1-why-do-we-need-it/index.html (+9ms)
08:18:28 ├─ /writing/the-decentralized-web-2-the-wild-west-web/index.html (+14ms)
08:18:28 ├─ /writing/the-decentralized-web-3-develop-and-publish-a-website/index.html (+14ms)
08:18:28 ├─ /writing/how-to-prepare-for-the-worst-case/index.html (+15ms)
08:18:28 ├─ /writing/interpretation-if/index.html (+8ms)
08:18:28 ├─ /writing/web-developer-work-environment-1/index.html (+9ms)
08:18:28 ├─ /writing/web-developer-work-environment-2/index.html (+10ms)
08:18:28 ├─ /writing/dreaming-of-the-old-normal/index.html (+9ms)
08:18:28 ├─ /writing/i-counted-everything-i-own/index.html (+178ms)
08:18:28 ├─ /writing/template-ia-writer-nanzan/index.html (+7ms)
08:18:28 ├─ /writing/template-ia-writer-shibui/index.html (+4ms)
08:18:28 ├─ /writing/manage-references-for-note-taking/index.html (+5ms)
08:18:28 ├─ /writing/civil-war-truth-1-introduction/index.html (+7ms)
08:18:28 ├─ /writing/civil-war-truth-2-corporatism-technocracy/index.html (+12ms)
08:18:28 ├─ /writing/civil-war-truth-3-political-division/index.html (+15ms)
08:18:28 ├─ /writing/civil-war-truth-4-media-journalism/index.html (+18ms)
08:18:28 ├─ /writing/civil-war-truth-5-academia/index.html (+14ms)
08:18:28 ├─ /writing/civil-war-truth-6-science/index.html (+15ms)
08:18:28 ├─ /writing/civil-war-truth-7-conclusion/index.html (+31ms)
08:18:28 ├─ /writing/tools-for-better-writing/index.html (+9ms)
08:18:28 ├─ /writing/rss-news-feed/index.html (+8ms)
08:18:28 ├─ /writing/artificial-intelligence-1-introduction/index.html (+8ms)
08:18:28 ├─ /writing/artificial-intelligence-2-text-generation/index.html (+10ms)
08:18:28 ├─ /writing/artificial-intelligence-3-text-to-image-generation/index.html (+6ms)
08:18:28 ├─ /writing/artificial-intelligence-4-getting-started/index.html (+8ms)
08:18:28 ├─ /writing/shokunin/index.html (+11ms)
08:18:28 ├─ /writing/website-relaunch-2023/index.html (+6ms)
08:18:28 ├─ /writing/thomas-sowell/index.html (+14ms)
08:18:28 ├─ /writing/raycast/index.html (+11ms)
08:18:28 ├─ /writing/beyond-the-bookshelf-1/index.html (+7ms)
08:18:28 ├─ /writing/beyond-the-bookshelf-2-books-2024/index.html (+19ms)
08:18:28 ├─ /writing/note-taking-obsidian-readwise-ai/index.html (+12ms)
08:18:28 ├─ /writing/fuck-you-sonos/index.html (+4ms)
08:18:28 ├─ /writing/modern-atlas-shrugged-1-signs-of-decline/index.html (+8ms)
08:18:28 ├─ /writing/modern-atlas-shrugged-2-looters-in-action/index.html (+8ms)
08:18:28 ├─ /writing/modern-atlas-shrugged-3-strike/index.html (+10ms)
08:18:28 ├─ /writing/from-typewriter-to-split-keyboard/index.html (+7ms)
08:18:28 ├─ /writing/ok-boomer/index.html (+6ms)
08:18:28 ├─ /writing/15-years-xing/index.html (+8ms)
08:18:28 ├─ /writing/agentic-note-taking-obsidian-claude-code/index.html (+5ms)
08:18:28 ├─ /writing/bookmark-to-brain/index.html (+4ms)
08:18:28 ├─ /writing/index.html (+10ms)
08:18:28 ├─ /index.html (+7ms)
08:18:28 ✓ Completed in 3.67s.

generating optimized images
08:18:28 ▶ /\_astro/ma.CnhsqWUR_WVfaO.webp (reused cache entry) (+1ms) (1/1)
08:18:28 ✓ Completed in 1ms.

08:18:28 [build] ✓ Completed in 13.39s.
08:18:29 [pagefind] Pagefind indexed 124 pages
08:18:29 [pagefind] Pagefind wrote index to /Users/kogakure/Code/personal/websites/stefanimhoff-de/dist/pagefind
08:18:29 [@astrojs/sitemap] `sitemap-index.xml` created at `dist`
[32mastro-webmanifest:[0m `manifest.webmanifest` is created.

[32mastro-webmanifest:[0m Webmanifest links are inserted into <head> section of generated pages (122 of 122).

08:18:30 [build] 122 page(s) built in 14.86s
08:18:30 [build] Complete! passes, dev server shows page correctly in light + dark mode
