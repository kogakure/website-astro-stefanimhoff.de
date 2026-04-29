# CLAUDE.md

## Project Overview

Personal website and blog for Stefan Imhoff, featuring journal posts, haiku collection, project showcase, and full-text search. Built with Astro for static generation, React for interactive components, and styled with Tailwind CSS.

**Live Site**: https://www.stefanimhoff.de

**IMPORTANT**: before you do anything else, run the `beans prime` command and heed its output.

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
