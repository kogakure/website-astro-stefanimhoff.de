# AGENTS.md

## Project Overview

Personal website and blog for Stefan Imhoff, featuring writing posts, haiku collection, work showcase, and full-text search. Built with Astro for static generation, React for interactive components, and styled with Tailwind CSS.

**Live Site**: https://www.stefanimhoff.de

## Quick Start

- Install: `pnpm install`
- Test: `pnpm test`
- Development Server: `pnpm dev`

## Hard Constrains

- This project uses spec-driven development, before you do anything else, run the `beans prime` command and heed its output.
- Create beans tickets for implementation and write the full plan into the spec files; keep knowledge agent agnostic inside this repository.
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

## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

When the user types `/graphify`, invoke the `skill` tool with `skill: "graphify"` before doing anything else.

Rules:

- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- Dirty graphify-out/ files are expected after hooks or incremental updates; dirty graph files are not a reason to skip graphify. Only skip graphify if the task is about stale or incorrect graph output, or the user explicitly says not to use it.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).
