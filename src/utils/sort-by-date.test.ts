import { describe, it, expect } from 'vitest';
import { sortByDate, sortMarkdownByDate } from './sort-by-date';
import { createMockPost } from '../test/fixtures/posts';

describe('sort-by-date', () => {
  describe('sortByDate', () => {
    it('should sort posts by date descending (newest first)', () => {
      const posts = [
        createMockPost({ data: { title: 'Old', date: new Date('2020-01-01'), tags: [] } }),
        createMockPost({ data: { title: 'New', date: new Date('2024-01-01'), tags: [] } }),
        createMockPost({ data: { title: 'Middle', date: new Date('2022-01-01'), tags: [] } }),
      ];

      posts.sort(sortByDate);

      expect(posts[0].data.title).toBe('New'); // 2024
      expect(posts[1].data.title).toBe('Middle'); // 2022
      expect(posts[2].data.title).toBe('Old'); // 2020
    });

    it('should handle posts with same date', () => {
      const posts = [
        createMockPost({ data: { title: 'Post A', date: new Date('2024-01-01'), tags: [] } }),
        createMockPost({ data: { title: 'Post B', date: new Date('2024-01-01'), tags: [] } }),
      ];

      posts.sort(sortByDate);

      // Order should be stable for same dates
      expect(posts).toHaveLength(2);
    });

    it('should handle dates with different times on same day', () => {
      const posts = [
        createMockPost({
          data: { title: 'Morning', date: new Date('2024-01-01T08:00:00Z'), tags: [] },
        }),
        createMockPost({
          data: { title: 'Evening', date: new Date('2024-01-01T20:00:00Z'), tags: [] },
        }),
      ];

      posts.sort(sortByDate);

      expect(posts[0].data.title).toBe('Evening'); // Later time
      expect(posts[1].data.title).toBe('Morning'); // Earlier time
    });

    it('should handle future dates', () => {
      const posts = [
        createMockPost({ data: { title: 'Past', date: new Date('2020-01-01'), tags: [] } }),
        createMockPost({ data: { title: 'Future', date: new Date('2030-01-01'), tags: [] } }),
        createMockPost({ data: { title: 'Now', date: new Date(), tags: [] } }),
      ];

      posts.sort(sortByDate);

      expect(posts[0].data.title).toBe('Future'); // Furthest in future
      expect(posts[2].data.title).toBe('Past'); // Furthest in past
    });

    it('should handle single post', () => {
      const posts = [createMockPost({ data: { title: 'Only', date: new Date(), tags: [] } })];

      posts.sort(sortByDate);

      expect(posts).toHaveLength(1);
      expect(posts[0].data.title).toBe('Only');
    });

    it('should handle empty array', () => {
      const posts: any[] = [];

      posts.sort(sortByDate);

      expect(posts).toHaveLength(0);
    });
  });

  describe('sortMarkdownByDate', () => {
    it('should sort markdown posts by date descending (newest first)', () => {
      const posts = [
        { frontmatter: { date: '2020-01-01', title: 'Old' } },
        { frontmatter: { date: '2024-01-01', title: 'New' } },
        { frontmatter: { date: '2022-01-01', title: 'Middle' } },
      ];

      posts.sort(sortMarkdownByDate);

      expect(posts[0].frontmatter.title).toBe('New'); // 2024
      expect(posts[1].frontmatter.title).toBe('Middle'); // 2022
      expect(posts[2].frontmatter.title).toBe('Old'); // 2020
    });

    it('should handle ISO date strings', () => {
      const posts = [
        { frontmatter: { date: '2020-06-15T10:00:00Z', title: 'First' } },
        { frontmatter: { date: '2024-06-15T10:00:00Z', title: 'Second' } },
      ];

      posts.sort(sortMarkdownByDate);

      expect(posts[0].frontmatter.title).toBe('Second');
      expect(posts[1].frontmatter.title).toBe('First');
    });

    it('should handle same dates', () => {
      const posts = [
        { frontmatter: { date: '2024-01-01', title: 'Post A' } },
        { frontmatter: { date: '2024-01-01', title: 'Post B' } },
      ];

      posts.sort(sortMarkdownByDate);

      expect(posts).toHaveLength(2);
    });
  });
});
