import { toString } from 'mdast-util-to-string';
import getReadingTime from 'reading-time';

import type { Node } from 'unist';

export const remarkReadingTime = () => {
	return function (tree: Node, { data }: { data: any }) {
		const textOnPage = toString(tree);
		const readingTime = getReadingTime(textOnPage);

		data.astro.frontmatter.minutesRead = readingTime.text;
	};
};
