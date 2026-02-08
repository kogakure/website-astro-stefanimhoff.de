import { describe, it, expect } from 'vitest';
import { wordCount } from './word-count';

describe('word-count', () => {
  describe('wordCount', () => {
    it('should count words in plain text', () => {
      expect(wordCount('Hello world')).toBe(2);
      expect(wordCount('One two three four five')).toBe(5);
    });

    it('should strip HTML tags before counting', () => {
      expect(wordCount('<p>Hello world</p>')).toBe(2);
      expect(wordCount('<strong>Bold</strong> text')).toBe(2);
    });

    it('should handle complex HTML', () => {
      const html = '<div><p>Hello <strong>world</strong></p><span>Test</span></div>';
      expect(wordCount(html)).toBe(2); // "Hello worldTest" -> 2 words (no space between tags)
    });

    it('should handle self-closing tags', () => {
      expect(wordCount('Text<br/>More text')).toBe(2); // "TextMore text" -> 2 words
    });

    it('should handle multiple spaces', () => {
      expect(wordCount('Hello    world')).toBe(5); // Splits on each space, creating empty strings
    });

    it('should handle newlines and tabs', () => {
      expect(wordCount('Hello\nworld\ttab')).toBe(3);
    });

    it('should handle empty string', () => {
      expect(wordCount('')).toBe(1); // split('') returns ['']
    });

    it('should handle only HTML tags', () => {
      expect(wordCount('<div></div>')).toBe(1); // After stripping HTML, empty string splits to ['']
    });

    it('should handle text with special characters', () => {
      expect(wordCount('Hello, world!')).toBe(2);
      expect(wordCount('Test: one-two-three')).toBe(2);
    });

    it('should handle mixed content', () => {
      const text = '<p>This is <em>emphasized</em> text with <code>code</code>.</p>';
      expect(wordCount(text)).toBe(6); // "This is emphasized text with code."
    });

    it('should handle nested HTML tags', () => {
      const html = '<div><ul><li>Item 1</li><li>Item 2</li></ul></div>';
      expect(wordCount(html)).toBe(3); // "Item 1Item 2" -> 3 words (no space between </li><li>)
    });

    it('should handle HTML entities (not decoded)', () => {
      expect(wordCount('Test &amp; test')).toBe(3); // "&amp;" counts as a word
    });
  });
});
