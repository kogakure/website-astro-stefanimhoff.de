import { describe, it, expect } from 'vitest';
import { sortBySortKey } from './sort-by-sortkey';

describe('sort-by-sortkey', () => {
  describe('sortBySortKey', () => {
    it('should sort by sortkey descending (highest first)', () => {
      const items = [
        { data: { sort: 1, title: 'Low' } },
        { data: { sort: 10, title: 'High' } },
        { data: { sort: 5, title: 'Medium' } },
      ];

      items.sort(sortBySortKey);

      expect(items[0].data.sort).toBe(10);
      expect(items[1].data.sort).toBe(5);
      expect(items[2].data.sort).toBe(1);
    });

    it('should handle same sortkey values', () => {
      const items = [
        { data: { sort: 5, title: 'Item A' } },
        { data: { sort: 5, title: 'Item B' } },
      ];

      items.sort(sortBySortKey);

      expect(items).toHaveLength(2);
      expect(items[0].data.sort).toBe(5);
      expect(items[1].data.sort).toBe(5);
    });

    it('should handle negative sortkey values', () => {
      const items = [
        { data: { sort: -5, title: 'Negative' } },
        { data: { sort: 0, title: 'Zero' } },
        { data: { sort: 5, title: 'Positive' } },
      ];

      items.sort(sortBySortKey);

      expect(items[0].data.sort).toBe(5);
      expect(items[1].data.sort).toBe(0);
      expect(items[2].data.sort).toBe(-5);
    });

    it('should handle decimal sortkey values', () => {
      const items = [
        { data: { sort: 1.5, title: 'Medium' } },
        { data: { sort: 2.7, title: 'High' } },
        { data: { sort: 0.3, title: 'Low' } },
      ];

      items.sort(sortBySortKey);

      expect(items[0].data.sort).toBe(2.7);
      expect(items[1].data.sort).toBe(1.5);
      expect(items[2].data.sort).toBe(0.3);
    });

    it('should handle single item', () => {
      const items = [{ data: { sort: 5, title: 'Only' } }];

      items.sort(sortBySortKey);

      expect(items).toHaveLength(1);
      expect(items[0].data.sort).toBe(5);
    });

    it('should handle empty array', () => {
      const items: any[] = [];

      items.sort(sortBySortKey);

      expect(items).toHaveLength(0);
    });
  });
});
