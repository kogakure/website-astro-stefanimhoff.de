---
# SI-kezu
title: Libertarianism Page
status: draft
type: feature
priority: normal
created_at: 2026-04-16T12:01:35Z
updated_at: 2026-04-16T12:02:29Z
---

Create a page under `/libertarianism` that holds a collection of recommended books, articles, podcasts, people, etc.

There might also be a _Roadmap_ feature that leads new people on a path to learn about the topic.

The data should be served from a local JSON file at the beginning; later, maybe a SQLite database.

## Current URL with Markdown

https://www.stefanimhoff.de/libertarianism/

## Field Ideas

```
title: string
paid: boolean
category: text | video | audio
tags: book |
			childrens book |
			podcast |
			audio book |
			article |
			person |
			magazine |
			video |
			youtube channel |
			organization
url: string
author: string
```
