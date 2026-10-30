# AGENTS.md

## Project Overview

Personal website and blog for Stefan Imhoff, featuring writing posts, haiku collection, work showcase, and full-text search. Built with Astro for static generation, React for interactive components, and styled with Tailwind CSS.

**Live Site**: https://www.stefanimhoff.de

## Quick Start

- Install: `pnpm install`
- Test: `pnpm test`
- Development Server: `pnpm dev`

## Cursor Cloud specific instructions

- Install with `pnpm install --frozen-lockfile`. The package manager is pnpm 11.8.0 (`packageManager` in `package.json`). Node 22 from the image is enough to install, test, build, and run the site. No secrets or external services are required.
- Dev server: `pnpm dev --host 0.0.0.0 --port 4321` (http://127.0.0.1:4321/). Do not insert an extra `--` before those flags. Astro 7 treats the next token after `astro dev` as a subcommand (`stop`, `status`, `logs`).
- `pnpm test` is the Vitest suite. `pnpm build` writes the static site to `dist/` and builds the Pagefind index. `pnpm exec astro check` reports existing TypeScript errors and is not a passing gate.

## Hard Constrains

- Every design decision should be following the rules of the Ma Design System, documented in `DESIGN.md`
- Always use existing UI components instead of raw HTML elements, documented in `src/components/COMPONENTS.md`

## Topics

- Key Directories (`docs/directories.md`) – Overview of the projects directories
- Key Files (`docs/key-files.md`) – The most important files of the project
- Tech Stack (`docs/tech-stack.md`) – What tech stack does this project use?
- Architectural Patterns (`docs/architectural-patterns.md`) – The architectural patterns, design decisions, and conventions used throughout the codebase.
- Essential Commands (`docs/essential-commands.md`) – How do run server, create content and ensure code quality
- Git Workflow (`docs/git-workflow.md`) – How to commit code and create pull requests
- Development Notes (`docs/development-notes.md`) – Special knowledge for development
- Content Collections (`docs/content-collections.md`) – Which Astro content collections exist?
- Build Features (`docs/build-features.md`) – Important information on building the site
