# CLAUDE.md

## Project Overview

Personal website and blog for Stefan Imhoff, featuring journal posts, haiku collection, project showcase, and full-text search. Built with Astro for static generation, React for interactive components, and styled with Tailwind CSS.

**Live Site**: https://www.stefanimhoff.de

**IMPORTANT**: before you do anything else, run the `beans prime` command and heed its output.

## shadcn/ui

This project uses **shadcn/ui** as its UI component base. Components are installed via `pnpm dlx shadcn@latest add <component>` and land in `src/components/ui/`. The `components.json` in the root configures paths and style.

- **Style**: `new-york`
- **Tailwind**: v4 — `tailwind.config` is `""` in `components.json`
- **CSS variables**: defined in `src/styles/global.css` under `/* shadcn/ui CSS Variables */`, mapped to the Ma Design System tokens (e.g. `--color-beni`, `--color-sumi`). Dark mode overrides in `.dark {}` block above the logical-property utilities.
- **`cn()` util**: `src/lib/utils.ts` — already used by all components.
- **Do NOT install `@radix-ui/*` packages directly** — always go through `shadcn add` so components, deps, and styles stay consistent.

## Components-First Rule

**Always use existing UI components instead of raw HTML elements.** Before writing `<p>`, `<h1>`–`<h6>`, `<hr>`, `<ul>`, `<ol>`, `<li>`, or `<a>` in `.astro` or `.tsx` files, check `src/components/ui/` first.

| Raw HTML                 | Use instead                      |
| ------------------------ | -------------------------------- |
| `<p>`                    | `<Text>`                         |
| `<h1>` (page title)      | `<PageTitle>`                    |
| `<h1>` (content)         | `<Title>`                        |
| `<h2>` (display)         | `<DisplayHeadline>`              |
| `<h2>` (section)         | `<Headline>`                     |
| `<h3>`                   | `<Subheadline>`                  |
| `<h4>`                   | `<Subsubheadline>`               |
| `<hr>`                   | `<Divider>`                      |
| `<ul>` + `<li>`          | `<UnorderedList>` + `<ListItem>` |
| `<ol>` + `<li>`          | `<OrderedList>` + `<ListItem>`   |
| `<a>` (inline text link) | `<TextLink>`                     |
| `<a>` (nav/arrow link)   | `<MoreLink>` or `<Link>`         |
| Section label text       | `<SectionLabel>`                 |

Use `className` prop to override default styles via `cn()` / tailwind-merge when needed. Only use raw HTML when a component requires fighting against too many defaults (e.g. custom `list-none flex` layouts).

@.agents/docs/architectural_patterns.md
@.agents/docs/directories.md
@.agents/docs/tech_stack.md
@.agents/docs/essential_commands.md
@.agents/docs/git_workflow.md
@.agents/docs/content_collections.md
@.agents/docs/key_files.md
@.agents/docs/build_features.md
@.agents/docs/build_features.md
@.agents/docs/development_notes.md
