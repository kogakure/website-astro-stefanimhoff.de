import GithubSlugger from 'github-slugger';
import { defineHastPlugin } from 'satteri';

import type { MarkdownHeading } from 'astro';

export interface TocHeading {
	id: string;
	text: string;
}

const normalize = (value: string) => value.replace(/\u00a0/g, ' ').trim();

/**
 * Sätteri's built-in heading-ids plugin runs at the HAST stage, after our
 * `remarkWidont` MDAST plugin has already replaced trailing spaces in
 * heading text with a non-breaking space (U+00A0). Its slugger doesn't treat
 * U+00A0 as a word boundary, so a heading like "Why do we fall?" would slug
 * to `why-do-wefall` instead of `why-do-we-fall`.
 *
 * This HAST plugin runs before the built-in one (Sätteri appends its own
 * heading-ids plugin after user-supplied `hastPlugins`) and sets a
 * normalized `id` first — the built-in plugin only computes its own slug
 * when `id` isn't already set, so ours wins and flows through untouched
 * into `render().headings`.
 */
export const remarkHeadingIds = () => {
	const slugger = new GithubSlugger();

	return defineHastPlugin({
		name: 'heading-ids-normalized',
		element: {
			filter: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
			visit(node, ctx) {
				const text = normalize(ctx.textContent(node));
				ctx.setProperty(node, 'id', slugger.slug(text));
			},
		},
	});
};

/**
 * Narrows Sätteri's full heading list (`render().headings`, all depths) down
 * to the depth-2 headings the table of contents displays.
 */
export function filterTocHeadings(headings: MarkdownHeading[]): TocHeading[] {
	return headings
		.filter((heading) => heading.depth === 2)
		.map((heading) => ({ id: heading.slug, text: heading.text }));
}
