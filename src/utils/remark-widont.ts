import { visit } from 'unist-util-visit';

import type { Literal, Node } from 'unist';

export function remarkWidont() {
	function transformer(tree: Node) {
		visit(tree, 'text', function (node: Literal) {
			let wordCount = (node.value as string).split(' ').length;

			if (wordCount >= 3) {
				node.value = (node.value as string).replace(/ ([^ ]*)$/, '\u00A0$1');
			}
		});
	}

	return transformer;
}
