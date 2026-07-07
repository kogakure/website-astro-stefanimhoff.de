import getReadingTime from 'reading-time';
import { defineMdastPlugin } from 'satteri';

import type { MdastVisitorContext } from 'satteri';

/**
 * Sätteri MDAST plugin: accumulates readable text across the document and
 * writes `minutesRead` / `words` into the shared Astro frontmatter data bag.
 *
 * Approximates the previous `mdast-util-to-string` whole-tree walk by
 * summing `text`, `inlineCode`, and `code` node values as they're visited.
 */
export const remarkReadingTime = () => {
	let text = '';

	const apply = (ctx: MdastVisitorContext) => {
		const readingTime = getReadingTime(text);
		const astro = ctx.data.astro;
		if (!astro) return;

		astro.frontmatter.minutesRead = readingTime.minutes;
		astro.frontmatter.words = readingTime.words;
	};

	return defineMdastPlugin({
		name: 'reading-time',
		text(node, ctx) {
			text += node.value;
			apply(ctx);
		},
		inlineCode(node, ctx) {
			text += node.value;
			apply(ctx);
		},
		code(node, ctx) {
			text += node.value;
			apply(ctx);
		},
	});
};
