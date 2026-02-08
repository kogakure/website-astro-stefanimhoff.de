import { describe, it, expect } from 'vitest';
import { remarkReadingTime } from './remark-reading-time';

describe('remark-reading-time', () => {
  it('should calculate reading time for short text', () => {
    const tree: any = {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [{ type: 'text', value: 'Hello world this is a short text.' }],
        },
      ],
    };

    const data: any = {
      astro: {
        frontmatter: {},
      },
    };

    const transformer = remarkReadingTime();
    transformer(tree, { data });

    expect(data.astro.frontmatter.minutesRead).toBeDefined();
    expect(typeof data.astro.frontmatter.minutesRead).toBe('number');
    expect(data.astro.frontmatter.minutesRead).toBeGreaterThan(0);
  });

  it('should calculate reading time for longer text', () => {
    const longText = Array(500).fill('word').join(' '); // 500 words
    const tree: any = {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [{ type: 'text', value: longText }],
        },
      ],
    };

    const data: any = {
      astro: {
        frontmatter: {},
      },
    };

    const transformer = remarkReadingTime();
    transformer(tree, { data });

    expect(data.astro.frontmatter.minutesRead).toBeGreaterThan(1);
  });

  it('should handle empty text', () => {
    const tree: any = {
      type: 'root',
      children: [],
    };

    const data: any = {
      astro: {
        frontmatter: {},
      },
    };

    const transformer = remarkReadingTime();
    transformer(tree, { data });

    expect(data.astro.frontmatter.minutesRead).toBeDefined();
    expect(data.astro.frontmatter.minutesRead).toBeGreaterThanOrEqual(0);
  });

  it('should handle nested content', () => {
    const tree: any = {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [{ type: 'text', value: 'First paragraph.' }],
        },
        {
          type: 'paragraph',
          children: [
            { type: 'text', value: 'Second paragraph with ' },
            { type: 'emphasis', children: [{ type: 'text', value: 'emphasis' }] },
            { type: 'text', value: ' text.' },
          ],
        },
      ],
    };

    const data: any = {
      astro: {
        frontmatter: {},
      },
    };

    const transformer = remarkReadingTime();
    transformer(tree, { data });

    expect(data.astro.frontmatter.minutesRead).toBeDefined();
    expect(data.astro.frontmatter.minutesRead).toBeGreaterThan(0);
  });

  it('should not overwrite existing frontmatter properties', () => {
    const tree: any = {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [{ type: 'text', value: 'Some text content.' }],
        },
      ],
    };

    const data: any = {
      astro: {
        frontmatter: {
          title: 'Existing Title',
          date: new Date(),
        },
      },
    };

    const transformer = remarkReadingTime();
    transformer(tree, { data });

    expect(data.astro.frontmatter.title).toBe('Existing Title');
    expect(data.astro.frontmatter.date).toBeDefined();
    expect(data.astro.frontmatter.minutesRead).toBeDefined();
  });
});
