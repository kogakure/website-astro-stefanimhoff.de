All three are visible in context:

- **strong** (Switzer Bold)—works perfectly. Clear, immediate, doesn't disrupt the reading flow.
- _italic_ (Switzer Italic)—functional but subtle. It's a slanted Roman, as expected from a neo-grotesque. It does the job.
- _italic in another font_ (Boska Italic)—this is the interesting one. It's unmistakably different. The high-contrast calligraphic strokes create a genuine tonal shift within the paragraph—like a change in speaking voice.

The question is whether that tonal shift is too much for a simple `<em>`.

For **everyday emphasis** in blog posts—a stressed word, a foreign term, a title—Boska Italic is too loud. It pulls the reader out of the sentence and into the letterform. That's exactly what you want at display scale (“Stefan Imhoff _is a_ Design Engineer”), but at paragraph scale it interrupts rather than emphasizes.Use Switzer Italic for `<em>`. It's quiet, it's conventional, and readers process it without thinking—which is the point of emphasis.

**Reserve Boska Italic for a semantic purpose that deserves the drama:**

| Element                                             | Font           | Use case                                            |
| --------------------------------------------------- | -------------- | --------------------------------------------------- |
| `<em>`                                              | Switzer Italic | Stress emphasis in running text                     |
| `<strong>`                                          | Switzer Bold   | Importance, key terms                               |
| `<cite>`, blockquote attribution, or a custom class | Boska Italic   | Book titles, pull quotes, Japanese terms, epigraphs |

This way Boska Italic becomes a _third voice_—rare, deliberate, and always meaningful. When the reader encounters it mid-paragraph, they know it signals something specific, not just emphasis. That restraint is what makes it powerful.

Block quotes are a distinct typographic element—they need to feel set apart from the body text without breaking the page's rhythm. Here are three approaches that work with your system:

## Option 1: Switzer Italic, Indented—The Quiet Approach

The most conventional and _Kanso_ choice. Same face, same size, just shifted in style and position.

Body text in Switzer Regular ends here.

"The form is simple and must have been arrived
        at with an economy of means. Shibui is never
        complicated or contrived."

— Elizabeth Gordon

Body text resumes here.

- Font: Switzer Italic, same size as body (18 px / 10 pt)
- Indent: Left margin shifted inward by 2–3 grid columns
- No quotation marks are needed if the indent is clear enough—but they work either way
- Attribution in Switzer Regular, caption size

This is the safest option. It reads as “someone else's words” without demanding attention.

## Option 2: Boska Italic, Full Width—The Expressive Approach

This is where your reserved Boska Italic voice earns its place. The block quote becomes a _moment_—a shift in register, like the Japanese poem on your homepage.

```
Body text in Switzer Regular ends here.

"The form is simple and must have been
arrived at with an economy of means.
Shibui is never complicated or contrived."
— Elizabeth Gordon

Body text resumes here.
```

- Font: Boska Italic, slightly larger than body (20–24 px / 12–14 pt)

- No indent—same left margin as body text, or even full width

- The contrast between Boska's calligraphic strokes and the surrounding Switzer does the work of separation—no indent or border needed

- Attribution in Switzer Regular, caption size

This approach turns every block quote into a typographic event. It works beautifully for philosophical quotes, Japanese references, or epigraphs at the start of an essay. But it could feel heavy if you quote someone three times in one post.

## Option 3: Hybrid—Based on Context

This is what I'd actually recommend. Define two block quote styles:

| Style                                                       | Font                             | When to use                                                                                            |
| ----------------------------------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------ |
| **Default** `<blockquote>`                                  | Switzer Italic, indented         | Standard quotations in essays — citing sources, referencing other writers, technical documentation     |
| **Featured** `<blockquote class="epigraph">` **or similar** | Boska Italic, larger, full width | Opening epigraphs, philosophical quotes, Japanese passages, pull quotes — moments that deserve a pause |

This mirrors the logic of your entire system: **Switzer for structure, Boska for expression.** A routine citation gets the quiet treatment. A quote that sets the tone for an entire essay gets the dramatic one.

## Shared Rules for Both

Regardless of which style, keep these consistent:

- **No left border bar.** The colored vertical line is a web convention that doesn't belong in this system—it's decoration without meaning. The font shift and/or indent already signals “this is a quote.”
- **Vertical spacing:** space-12 (48 px) above and below the block quote—the same gap you use between distinct topic blocks. The quote should breathe.
- **Attribution:** Always set in Switzer Regular at caption size (14 px), preceded by an em dash. Placed on its own line directly below the quote with a space-2 (8 px) gap.
- **Beni accent (optional):** If you want a subtle visual marker, set the attribution line or the em dash in Beni (`#900B20`). This is the only color the system allows, and it connects the quote visually to links and emphasis without introducing a new element.
