import { defineMdastPlugin } from 'satteri';

import type { Text } from 'mdast';
import type { MdxJsxTextElement } from 'satteri';

const MARK_RE = /==(?!\s)([^=]+?)(?<!\s)==/g;

/**
 * Sätteri MDAST plugin: `==text==` → `<mark>text</mark>` (MDX JSX).
 */
export const remarkMark = () =>
	defineMdastPlugin({
		name: 'mark',
		text(node, ctx) {
			MARK_RE.lastIndex = 0;
			if (!MARK_RE.test(node.value)) return;
			MARK_RE.lastIndex = 0;

			const segments: (Text | MdxJsxTextElement)[] = [];
			let cursor = 0;
			let match: RegExpExecArray | null;
			while ((match = MARK_RE.exec(node.value)) !== null) {
				if (match.index > cursor) {
					segments.push({ type: 'text', value: node.value.slice(cursor, match.index) });
				}
				segments.push({
					type: 'mdxJsxTextElement',
					name: 'mark',
					attributes: [],
					children: [{ type: 'text', value: match[1] }],
				});
				cursor = match.index + match[0].length;
			}
			if (cursor < node.value.length) {
				segments.push({ type: 'text', value: node.value.slice(cursor) });
			}

			if (segments.length === 0) return;
			if (segments.length === 1) return segments[0];

			ctx.replaceNode(node, segments[0]);
			ctx.insertAfter(node, segments.slice(1));
		},
	});
