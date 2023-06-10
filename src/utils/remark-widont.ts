import { visit } from 'unist-util-visit';

import type { Literal, Node } from 'unist';

export function remarkWidont() {
	function transformer(tree: Node) {
		visit(tree, 'text', function (node: Literal<string>) {
			let wordCount = node.value.split(' ').length;

			if (wordCount >= 3) {
				node.value = node.value.replace(/ ([^ ]*)$/, '\u00A0$1');
			}
		});
	}

	return transformer;
}
