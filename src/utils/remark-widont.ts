import { defineMdastPlugin } from 'satteri';

/**
 * Sätteri MDAST plugin: replaces the last space in a ≥3-word text node with
 * a non-breaking space, so the final word never wraps onto its own line.
 */
export const remarkWidont = () =>
	defineMdastPlugin({
		name: 'widont',
		text(node, ctx) {
			const wordCount = node.value.split(' ').length;
			if (wordCount < 3) return;

			ctx.setProperty(node, 'value', node.value.replace(/ ([^ ]*)$/, ' $1'));
		},
	});
