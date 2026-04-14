import type { CollectionEntry } from 'astro:content';

/**
 * Helper to create mock journal posts for testing
 */
type MockPostOverrides = Partial<Omit<CollectionEntry<'journal'>, 'data'>> & {
	data?: Partial<CollectionEntry<'journal'>['data']>;
	slug?: string;
};

export const createMockPost = (overrides: MockPostOverrides): CollectionEntry<'journal'> => {
	const defaults: CollectionEntry<'journal'> = {
		id: 'test-post.mdx',
		body: 'Test content',
		collection: 'journal',
		data: {
			title: 'Test Post',
			date: new Date('2024-01-01'),
			tags: [],
			draft: false,
			featured: false,
			author: 'Stefan Imhoff',
		},
	};

	return {
		...defaults,
		...overrides,
		data: {
			...defaults.data,
			...overrides.data,
		},
	} as CollectionEntry<'journal'>;
};
