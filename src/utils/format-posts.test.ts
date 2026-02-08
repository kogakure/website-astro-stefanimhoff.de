import { describe, it, expect, beforeEach } from 'vitest';
import { formatPosts } from './format-posts';
import { createMockPost } from '../test/fixtures/posts';
import type { CollectionEntry } from 'astro:content';

describe('format-posts', () => {
  let posts: CollectionEntry<'journal'>[];

  beforeEach(() => {
    posts = [
      createMockPost({
        id: 'post1.mdx',
        slug: 'post-1',
        data: {
          title: 'Charlie Post',
          date: new Date('2024-01-01'),
          tags: [],
          draft: false,
          featured: false,
        },
      }),
      createMockPost({
        id: 'post2.mdx',
        slug: 'post-2',
        data: {
          title: 'Alpha Post',
          date: new Date('2024-01-02'),
          tags: [],
          draft: true,
          featured: false,
        },
      }),
      createMockPost({
        id: 'post3.mdx',
        slug: 'post-3',
        data: {
          title: 'Beta Post',
          date: new Date('2024-01-03'),
          tags: [],
          draft: false,
          featured: true,
        },
      }),
      createMockPost({
        id: 'post4.mdx',
        slug: 'post-4',
        data: {
          title: 'Future Post',
          date: new Date('2030-01-01'),
          tags: [],
          draft: false,
          featured: false,
        },
      }),
    ];
  });

  describe('draft filtering', () => {
    it('should remove drafts by default', () => {
      const result = formatPosts(posts, {});

      expect(result.every((p) => !p.data.draft)).toBe(true);
      expect(result).toHaveLength(3);
    });

    it('should keep drafts when removeDrafts is false', () => {
      const result = formatPosts(posts, { removeDrafts: false });

      expect(result.some((p) => p.data.draft)).toBe(true);
      expect(result).toHaveLength(4);
    });

    it('should explicitly remove drafts when removeDrafts is true', () => {
      const result = formatPosts(posts, { removeDrafts: true });

      expect(result.every((p) => !p.data.draft)).toBe(true);
      expect(result).toHaveLength(3);
    });
  });

  describe('future post filtering', () => {
    it('should keep future posts by default', () => {
      const result = formatPosts(posts, { removeDrafts: false });

      expect(result.some((p) => p.data.title === 'Future Post')).toBe(true);
    });

    it('should remove future posts when removeFuture is true', () => {
      const result = formatPosts(posts, { removeFuture: true });

      expect(result.every((p) => new Date(p.data.date) <= new Date())).toBe(true);
      expect(result.some((p) => p.data.title === 'Future Post')).toBe(false);
    });

    it('should keep future posts when removeFuture is false', () => {
      const result = formatPosts(posts, { removeFuture: false, removeDrafts: false });

      expect(result.some((p) => p.data.title === 'Future Post')).toBe(true);
    });
  });

  describe('featured filtering', () => {
    it('should show all posts when showFeatured is undefined', () => {
      const result = formatPosts(posts, {});

      expect(result).toHaveLength(3);
    });

    it('should show only featured posts when showFeatured is true', () => {
      const result = formatPosts(posts, { showFeatured: true });

      expect(result.every((p) => p.data.featured)).toBe(true);
      expect(result).toHaveLength(1);
      expect(result[0].data.title).toBe('Beta Post');
    });

    it('should show all non-draft posts when showFeatured is false', () => {
      const result = formatPosts(posts, { showFeatured: false });

      expect(result).toHaveLength(3);
    });
  });

  describe('sorting by date', () => {
    it('should sort by date descending by default', () => {
      const result = formatPosts(posts, {});

      expect(result[0].data.date > result[1].data.date).toBe(true);
      expect(result[1].data.date > result[2].data.date).toBe(true);
    });

    it('should sort by date descending when sortBy is date', () => {
      const result = formatPosts(posts, { sortBy: 'date' });

      // Future post should be first (2030), then Beta (2024-01-03), then Charlie (2024-01-01)
      expect(result[0].data.title).toBe('Future Post'); // 2030-01-01 (most recent)
      expect(result[1].data.title).toBe('Beta Post'); // 2024-01-03
      expect(result[2].data.title).toBe('Charlie Post'); // 2024-01-01
    });

    it('should sort by date ascending when sortOrder is asc', () => {
      const result = formatPosts(posts, { sortBy: 'date', sortOrder: 'asc' });

      expect(result[0].data.date < result[1].data.date).toBe(true);
      expect(result[1].data.date < result[2].data.date).toBe(true);
    });
  });

  describe('sorting by alphabet', () => {
    it('should sort alphabetically A-Z by default (sortOrder desc)', () => {
      const result = formatPosts(posts, { sortBy: 'alphabet' });

      // sortByAlphabet uses localeCompare which sorts ascending (A-Z)
      // sortOrder defaults to 'desc' which doesn't reverse for alphabet
      expect(result[0].data.title).toBe('Beta Post');
      expect(result[1].data.title).toBe('Charlie Post');
      expect(result[2].data.title).toBe('Future Post');
    });

    it('should sort alphabetically Z-A when sortOrder is asc', () => {
      const result = formatPosts(posts, { sortBy: 'alphabet', sortOrder: 'asc' });

      // With asc, the array is reversed (Z-A)
      expect(result[0].data.title).toBe('Future Post');
      expect(result[1].data.title).toBe('Charlie Post');
      expect(result[2].data.title).toBe('Beta Post');
    });
  });

  describe('sorting by random', () => {
    it('should return posts when sortBy is random', () => {
      const result = formatPosts(posts, { sortBy: 'random' });

      // Can't test exact order (it's random), but can verify all posts are there
      expect(result).toHaveLength(3);
      expect(result.every((p) => !p.data.draft)).toBe(true);
    });

    it('should respect sortOrder asc even with random sort', () => {
      // Random sort with asc order will reverse the random order
      const result = formatPosts(posts, { sortBy: 'random', sortOrder: 'asc' });

      expect(result).toHaveLength(3);
    });
  });

  describe('limit', () => {
    it('should return all posts when limit is not specified', () => {
      const result = formatPosts(posts, {});

      expect(result).toHaveLength(3);
    });

    it('should limit number of posts', () => {
      const result = formatPosts(posts, { limit: 2 });

      expect(result).toHaveLength(2);
    });

    it('should return all posts if limit is greater than total', () => {
      const result = formatPosts(posts, { limit: 10 });

      expect(result).toHaveLength(3);
    });

    it('should return empty array if limit is 0', () => {
      const result = formatPosts(posts, { limit: 0 });

      expect(result).toHaveLength(0);
    });

    it('should limit after sorting', () => {
      const result = formatPosts(posts, {
        sortBy: 'date',
        sortOrder: 'desc',
        limit: 1,
      });

      expect(result).toHaveLength(1);
      expect(result[0].data.title).toBe('Future Post'); // Most recent (2030)
    });
  });

  describe('combined filters', () => {
    it('should apply removeDrafts and removeFuture together', () => {
      const result = formatPosts(posts, {
        removeDrafts: true,
        removeFuture: true,
      });

      expect(result.every((p) => !p.data.draft)).toBe(true);
      expect(result.every((p) => new Date(p.data.date) <= new Date())).toBe(true);
      expect(result).toHaveLength(2); // Only 'Charlie Post' and 'Beta Post'
    });

    it('should apply all filters and sorting together', () => {
      const result = formatPosts(posts, {
        removeDrafts: true,
        removeFuture: true,
        sortBy: 'date',
        sortOrder: 'asc',
        limit: 1,
      });

      expect(result).toHaveLength(1);
      expect(result[0].data.title).toBe('Charlie Post'); // Oldest non-draft, non-future
    });

    it('should apply featured filter with sorting', () => {
      const multipleFeatured = [
        ...posts,
        createMockPost({
          id: 'post5.mdx',
          slug: 'post-5',
          data: {
            title: 'Another Featured',
            date: new Date('2024-02-01'),
            tags: [],
            draft: false,
            featured: true,
          },
        }),
      ];

      const result = formatPosts(multipleFeatured, {
        showFeatured: true,
        sortBy: 'date',
        sortOrder: 'desc',
      });

      expect(result).toHaveLength(2);
      expect(result.every((p) => p.data.featured)).toBe(true);
      expect(result[0].data.date > result[1].data.date).toBe(true);
    });

    it('should handle complex scenario: featured + limit + sorting', () => {
      const multipleFeatured = [
        ...posts,
        createMockPost({
          id: 'post5.mdx',
          slug: 'post-5',
          data: {
            title: 'Another Featured',
            date: new Date('2024-02-01'),
            tags: [],
            draft: false,
            featured: true,
          },
        }),
        createMockPost({
          id: 'post6.mdx',
          slug: 'post-6',
          data: {
            title: 'Third Featured',
            date: new Date('2024-03-01'),
            tags: [],
            draft: false,
            featured: true,
          },
        }),
      ];

      const result = formatPosts(multipleFeatured, {
        showFeatured: true,
        sortBy: 'date',
        sortOrder: 'desc',
        limit: 2,
      });

      expect(result).toHaveLength(2);
      expect(result[0].data.title).toBe('Third Featured'); // Most recent
      expect(result[1].data.title).toBe('Another Featured'); // Second most recent
    });
  });

  describe('edge cases', () => {
    it('should handle empty posts array', () => {
      const result = formatPosts([], {});

      expect(result).toHaveLength(0);
    });

    it('should handle posts with same date', () => {
      const sameDatePosts = [
        createMockPost({
          id: 'post1.mdx',
          data: {
            title: 'Post A',
            date: new Date('2024-01-01'),
            tags: [],
            draft: false,
            featured: false,
          },
        }),
        createMockPost({
          id: 'post2.mdx',
          data: {
            title: 'Post B',
            date: new Date('2024-01-01'),
            tags: [],
            draft: false,
            featured: false,
          },
        }),
      ];

      const result = formatPosts(sameDatePosts, { sortBy: 'date' });

      expect(result).toHaveLength(2);
    });

    it('should handle single post', () => {
      const singlePost = [
        createMockPost({
          data: {
            title: 'Only Post',
            date: new Date('2024-01-01'),
            tags: [],
            draft: false,
            featured: false,
          },
        }),
      ];

      const result = formatPosts(singlePost, {});

      expect(result).toHaveLength(1);
      expect(result[0].data.title).toBe('Only Post');
    });

    it('should handle all posts being filtered out', () => {
      const allDrafts = [
        createMockPost({
          data: {
            title: 'Draft 1',
            date: new Date('2024-01-01'),
            tags: [],
            draft: true,
            featured: false,
          },
        }),
        createMockPost({
          data: {
            title: 'Draft 2',
            date: new Date('2024-01-02'),
            tags: [],
            draft: true,
            featured: false,
          },
        }),
      ];

      const result = formatPosts(allDrafts, { removeDrafts: true });

      expect(result).toHaveLength(0);
    });

    it('should handle showFeatured when no posts are featured', () => {
      const noFeatured = [
        createMockPost({
          data: {
            title: 'Post 1',
            date: new Date('2024-01-01'),
            tags: [],
            draft: false,
            featured: false,
          },
        }),
        createMockPost({
          data: {
            title: 'Post 2',
            date: new Date('2024-01-02'),
            tags: [],
            draft: false,
            featured: false,
          },
        }),
      ];

      const result = formatPosts(noFeatured, { showFeatured: true });

      expect(result).toHaveLength(0);
    });
  });
});
