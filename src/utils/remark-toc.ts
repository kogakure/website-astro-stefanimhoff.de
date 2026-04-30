import GithubSlugger from 'github-slugger';
import { toString } from 'mdast-util-to-string';
import { visit } from 'unist-util-visit';

import type { Node } from 'unist';

interface HeadingNode extends Node {
	type: 'heading';
	depth: number;
	data?: {
		hProperties?: Record<string, unknown>;
	};
}

export interface TocHeading {
	id: string;
	text: string;
}

const normalize = (value: string) => value.replace(/\u00a0/g, ' ').trim();

export const remarkTableOfContents = () => {
	return function (tree: Node, { data }: { data: any }) {
		const slugger = new GithubSlugger();
		const headings: TocHeading[] = [];

		visit(tree, 'heading', (node: HeadingNode) => {
			const text = normalize(toString(node));
			const id = slugger.slug(text);

			node.data ??= {};
			node.data.hProperties ??= {};
			(node.data.hProperties as Record<string, unknown>).id = id;

			if (node.depth === 2) {
				headings.push({ id, text });
			}
		});

		data.astro.frontmatter.headings = headings;
	};
};
