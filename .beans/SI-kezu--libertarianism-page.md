---
# SI-kezu
title: Libertarianism Page
status: draft
type: feature
priority: normal
created_at: 2026-04-16T12:01:35Z
updated_at: 2026-04-16T12:02:29Z
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
