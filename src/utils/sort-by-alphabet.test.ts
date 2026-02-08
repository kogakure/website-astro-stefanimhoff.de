import { describe, it, expect } from 'vitest';
import { sortByAlphabet } from './sort-by-alphabet';
import { createMockPost } from '../test/fixtures/posts';

describe('sort-by-alphabet', () => {
  describe('sortByAlphabet', () => {
    it('should sort posts alphabetically A-Z', () => {
      const posts = [
        createMockPost({ data: { title: 'Zebra', date: new Date(), tags: [] } }),
        createMockPost({ data: { title: 'Apple', date: new Date(), tags: [] } }),
        createMockPost({ data: { title: 'Mango', date: new Date(), tags: [] } }),
      ];

      posts.sort(sortByAlphabet);

      expect(posts[0].data.title).toBe('Apple');
      expect(posts[1].data.title).toBe('Mango');
      expect(posts[2].data.title).toBe('Zebra');
    });

    it('should handle case-insensitive sorting', () => {
      const posts = [
        createMockPost({ data: { title: 'zebra', date: new Date(), tags: [] } }),
        createMockPost({ data: { title: 'Apple', date: new Date(), tags: [] } }),
        createMockPost({ data: { title: 'MANGO', date: new Date(), tags: [] } }),
      ];

      posts.sort(sortByAlphabet);

      expect(posts[0].data.title).toBe('Apple');
      expect(posts[1].data.title).toBe('MANGO');
      expect(posts[2].data.title).toBe('zebra');
    });

    it('should handle titles starting with numbers', () => {
      const posts = [
        createMockPost({ data: { title: '10 Ways', date: new Date(), tags: [] } }),
        createMockPost({ data: { title: '2 Methods', date: new Date(), tags: [] } }),
        createMockPost({ data: { title: 'ABC', date: new Date(), tags: [] } }),
      ];

      posts.sort(sortByAlphabet);

      // Numbers come before letters in localeCompare
      expect(posts[0].data.title).toBe('10 Ways');
      expect(posts[1].data.title).toBe('2 Methods');
      expect(posts[2].data.title).toBe('ABC');
    });

    it('should handle titles with special characters', () => {
      const posts = [
        createMockPost({ data: { title: 'Über', date: new Date(), tags: [] } }),
        createMockPost({ data: { title: 'Apple', date: new Date(), tags: [] } }),
        createMockPost({ data: { title: 'Änderung', date: new Date(), tags: [] } }),
      ];

      posts.sort(sortByAlphabet);

      // localeCompare handles special characters
      expect(posts[0].data.title).toBe('Änderung');
      expect(posts[1].data.title).toBe('Apple');
      expect(posts[2].data.title).toBe('Über');
    });

    it('should handle same titles', () => {
      const posts = [
        createMockPost({ data: { title: 'Same Title', date: new Date(), tags: [] } }),
        createMockPost({ data: { title: 'Same Title', date: new Date(), tags: [] } }),
      ];

      posts.sort(sortByAlphabet);

      expect(posts).toHaveLength(2);
      expect(posts[0].data.title).toBe('Same Title');
      expect(posts[1].data.title).toBe('Same Title');
    });

    it('should handle single post', () => {
      const posts = [createMockPost({ data: { title: 'Only', date: new Date(), tags: [] } })];

      posts.sort(sortByAlphabet);

      expect(posts).toHaveLength(1);
      expect(posts[0].data.title).toBe('Only');
    });

    it('should handle empty array', () => {
      const posts: any[] = [];

      posts.sort(sortByAlphabet);

      expect(posts).toHaveLength(0);
    });
  });
});
