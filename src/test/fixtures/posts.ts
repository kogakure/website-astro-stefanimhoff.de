import type { CollectionEntry } from 'astro:content';

/**
 * Helper to create mock writing posts for testing
 */
type MockPostOverrides = Partial<Omit<CollectionEntry<'writing'>, 'data'>> & {
	data?: Partial<CollectionEntry<'writing'>['data']>;
	slug?: string;
};

export const createMockPost = (overrides: MockPostOverrides): CollectionEntry<'writing'> => {
	const defaults: CollectionEntry<'writing'> = {
		id: 'test-post.mdx',
		body: 'Test content',
		collection: 'writing',
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
	} as CollectionEntry<'writing'>;
};
