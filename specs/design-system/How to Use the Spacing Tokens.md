The spacing scale is a set of **named values** that constrain every spatial decision to multiples of 4 px. They don't prescribe _where_ to use them — they prescribe _what values are allowed_ when you need space anywhere:

| Use case                                        | What you're spacing | Token you'd pick                       |
| ----------------------------------------------- | ------------------- | -------------------------------------- |
| Gap between an icon and its label               | Inline elements     | ⁠space-1 (4 px)                        |
| Padding inside a button                         | Component internal  | ⁠space-3 (12 px)                       |
| Gap between two list items                      | Vertical rhythm     | ⁠space-4 (16 px)                       |
| **Space between paragraphs**                    | Typographic blocks  | ⁠space-6 (24 px) or ⁠space-8 (32 px)   |
| Space between a heading and its first paragraph | Heading → body      | ⁠space-4 (16 px)                       |
| Space between two major sections                | Page structure      | ⁠space-16 (64 px) or ⁠space-24 (96 px) |
| Page top/bottom padding                         | Layout chrome       | ⁠space-24 (96 px)                      |

The token ⁠space-12 (48 px) that you labelled "separation between typographic blocks" was a _suggested_ use — not a rule that all paragraphs must be 48 px apart.

## Recommended Paragraph Spacing

A common typographic rule: **paragraph spacing should equal the line height** (or slightly more). With your 18 px body text at 1,5 line-height:

The closest on-scale values:

| Token     | Value | Feel                                                    |
| --------- | ----- | ------------------------------------------------------- |
| ⁠space-6  | 24 px | Tight — paragraphs feel connected, continuous prose     |
| ⁠space-8  | 32 px | Comfortable — clear separation, still reads as one text |
| ⁠space-12 | 48 px | Loose — signals distinct blocks or topic shifts         |

**My recommendation:** Use ⁠space-8 (32 px) as the **default paragraph spacing**, and reserve ⁠space-12 (48 px) for breaks between conceptually separate sections within a page — exactly as you've done in your screenshot.

## A Practical Mapping

Here's how the tokens might map to a typical page of your site:

```
┌─────────────────────────────────────────┐
│                                         │  ← space-24 (96 px) page top
│  H2 Heading                             │
│                                         │  ← space-8 (32 px) heading → body
│  First paragraph of continuous text.    │
│  Lorem ipsum dolor sit amet.            │
│                                         │  ← space-8 (32 px) paragraph gap
│  Second paragraph, same topic.          │
│  Consectetur adipiscing elit.           │
│                                         │  ← space-12 (48 px) topic shift
│  New idea, different argument.          │
│  Sed do eiusmod tempor incididunt.      │
│                                         │  ← space-16 (64 px) section break
│  H2 Next Section                        │
│                                         │  ← space-8 (32 px) heading → body
│  Body text continues...                 │
│                                         │  ← space-24 (96 px) page bottom
└─────────────────────────────────────────┘
```

The key insight: **the tokens define the vocabulary, the context defines which word to use.** The same 48 px that feels right between distinct arguments in your "Why These Fonts" section would feel too loose between paragraphs of a journal essay. The system gives you the notes — you compose the music.
