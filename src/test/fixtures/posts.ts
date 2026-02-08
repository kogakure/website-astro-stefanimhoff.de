import type { CollectionEntry } from 'astro:content';

/**
 * Helper to create mock journal posts for testing
 */
export const createMockPost = (
  overrides: Partial<CollectionEntry<'journal'>>
): CollectionEntry<'journal'> => {
  const defaults: CollectionEntry<'journal'> = {
    id: 'test-post.mdx',
    slug: 'test-post',
    body: 'Test content',
    collection: 'journal',
    data: {
      title: 'Test Post',
      date: new Date('2024-01-01'),
      tags: [],
      draft: false,
      featured: false,
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
