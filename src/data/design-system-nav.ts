export interface NavItem {
	title: string;
	slug: string;
	kanji: string;
}

export interface NavGroup {
	group: string;
	label: string;
	items: NavItem[];
}

export const designSystemNav: NavGroup[] = [
	{
		group: 'foundations',
		label: 'Foundations',
		items: [
			{ title: 'Brand Foundations', slug: 'brand-foundations', kanji: '基' },
			{ title: 'Naming & Voice', slug: 'naming-and-voice', kanji: '声' },
			{ title: 'Logo', slug: 'logo', kanji: '印' },
		],
	},
	{
		group: 'tokens',
		label: 'Tokens',
		items: [
			{ title: 'Color', slug: 'color', kanji: '色' },
			{ title: 'Typography', slug: 'typography', kanji: '字' },
			{ title: 'Layout & Grids', slug: 'layout-and-grids', kanji: '格' },
			{ title: 'Spacing', slug: 'spacing', kanji: '間' },
			{ title: 'Motion', slug: 'motion', kanji: '動' },
		],
	},
	{
		group: 'guidelines',
		label: 'Guidelines',
		items: [
			{ title: 'Imagery', slug: 'imagery', kanji: '像' },
			{ title: 'Accessibility', slug: 'accessibility', kanji: '道' },
			{ title: 'Quotes & Italics', slug: 'quotes-and-italics', kanji: '引' },
			{ title: 'Print', slug: 'print', kanji: '刷' },
		],
	},
	{
		group: 'components',
		label: 'Components',
		items: [{ title: 'Components', slug: 'components', kanji: '部' }],
	},
];

export const allDesignSystemSlugs = designSystemNav.flatMap((g) => g.items.map((i) => i.slug));
