import { SKIP, visit } from 'unist-util-visit';

import type { Text } from 'mdast';
import type { Node, Parent } from 'unist';

const MARK_RE = /==(?!\s)([^=]+?)(?<!\s)==/g;

export function remarkMark() {
	return function transformer(tree: Node) {
		visit(tree, 'text', (node: Text, index, parent: Parent | null) => {
			if (!parent || index == null) return;
			MARK_RE.lastIndex = 0;
			if (!MARK_RE.test(node.value)) return;
			MARK_RE.lastIndex = 0;

			const segments: Parent['children'] = [];
			let cursor = 0;
			let match: RegExpExecArray | null;
			while ((match = MARK_RE.exec(node.value)) !== null) {
				if (match.index > cursor) {
					segments.push({
						type: 'text',
						value: node.value.slice(cursor, match.index),
					} as Text);
				}
				segments.push({
					type: 'mdxJsxTextElement',
					name: 'mark',
					attributes: [],
					children: [{ type: 'text', value: match[1] } as Text],
				} as unknown as Parent['children'][number]);
				cursor = match.index + match[0].length;
			}
			if (cursor < node.value.length) {
				segments.push({ type: 'text', value: node.value.slice(cursor) } as Text);
			}

			parent.children.splice(index, 1, ...segments);
			return [SKIP, index + segments.length];
		});
	};
}
