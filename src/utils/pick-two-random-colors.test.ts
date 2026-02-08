import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { pickTwoRandomColors } from './pick-two-random-colors';

describe('pick-two-random-colors', () => {
  let randomSpy: any;

  beforeEach(() => {
    randomSpy = vi.spyOn(Math, 'random');
  });

  afterEach(() => {
    randomSpy.mockRestore();
  });

  describe('pickTwoRandomColors', () => {
    it('should return two different color hex codes', () => {
      // Mock Math.random to return predictable values
      randomSpy.mockReturnValueOnce(0.1).mockReturnValueOnce(0.5);

      const [color1, color2] = pickTwoRandomColors();

      expect(color1).toMatch(/^#[0-9A-Fa-f]{6}$/); // Valid hex color
      expect(color2).toMatch(/^#[0-9A-Fa-f]{6}$/); // Valid hex color
      expect(color1).not.toBe(color2); // Must be different
    });

    it('should return different colors on each call', () => {
      // First call
      randomSpy.mockReturnValueOnce(0.1).mockReturnValueOnce(0.2);
      const [color1a, color1b] = pickTwoRandomColors();

      // Second call
      randomSpy.mockReturnValueOnce(0.5).mockReturnValueOnce(0.6);
      const [color2a, color2b] = pickTwoRandomColors();

      // Each pair should be different
      expect(color1a).not.toBe(color1b);
      expect(color2a).not.toBe(color2b);
    });

    it('should handle case when first two random picks are the same index', () => {
      // Mock to return same index first two times, then different
      randomSpy
        .mockReturnValueOnce(0.5) // First pick
        .mockReturnValueOnce(0.5) // Second pick (same)
        .mockReturnValueOnce(0.8); // Retry (different)

      const [color1, color2] = pickTwoRandomColors();

      expect(color1).not.toBe(color2);
      expect(randomSpy).toHaveBeenCalledTimes(3); // Should retry
    });

    it('should always return exactly two colors', () => {
      randomSpy.mockReturnValueOnce(0.1).mockReturnValueOnce(0.9);

      const result = pickTwoRandomColors();

      expect(result).toHaveLength(2);
      expect(Array.isArray(result)).toBe(true);
    });

    it('should return valid colors from the color palette', () => {
      randomSpy.mockReturnValueOnce(0.0).mockReturnValueOnce(0.99);

      const [color1, color2] = pickTwoRandomColors();

      // Both should be valid hex colors
      expect(typeof color1).toBe('string');
      expect(typeof color2).toBe('string');
      expect(color1.startsWith('#')).toBe(true);
      expect(color2.startsWith('#')).toBe(true);
    });
  });
});
