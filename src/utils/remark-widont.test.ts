import { describe, it, expect } from 'vitest';
import { remarkWidont } from './remark-widont';

describe('remark-widont', () => {
  it('should add non-breaking space before last word (3+ words)', () => {
    const tree: any = {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'This is a test',
            },
          ],
        },
      ],
    };

    const transformer = remarkWidont();
    transformer(tree);

    expect(tree.children[0].children[0].value).toBe('This is a\u00A0test');
  });

  it('should not modify text with less than 3 words', () => {
    const tree: any = {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Two words',
            },
          ],
        },
      ],
    };

    const transformer = remarkWidont();
    transformer(tree);

    expect(tree.children[0].children[0].value).toBe('Two words');
  });

  it('should handle single word', () => {
    const tree: any = {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Word',
            },
          ],
        },
      ],
    };

    const transformer = remarkWidont();
    transformer(tree);

    expect(tree.children[0].children[0].value).toBe('Word');
  });

  it('should handle multiple text nodes', () => {
    const tree: any = {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'First text node',
            },
          ],
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Second text node',
            },
          ],
        },
      ],
    };

    const transformer = remarkWidont();
    transformer(tree);

    expect(tree.children[0].children[0].value).toBe('First text\u00A0node');
    expect(tree.children[1].children[0].value).toBe('Second text\u00A0node');
  });

  it('should handle text with punctuation', () => {
    const tree: any = {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'This is a test.',
            },
          ],
        },
      ],
    };

    const transformer = remarkWidont();
    transformer(tree);

    expect(tree.children[0].children[0].value).toBe('This is a\u00A0test.');
  });

  it('should handle text with multiple spaces', () => {
    const tree: any = {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'This  has  extra  spaces',
            },
          ],
        },
      ],
    };

    const transformer = remarkWidont();
    transformer(tree);

    // Should replace the last space before "spaces"
    expect(tree.children[0].children[0].value).toContain('\u00A0spaces');
  });

  it('should handle empty string', () => {
    const tree: any = {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: '',
            },
          ],
        },
      ],
    };

    const transformer = remarkWidont();
    transformer(tree);

    expect(tree.children[0].children[0].value).toBe('');
  });

  it('should handle nested structures', () => {
    const tree: any = {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Text before emphasis',
            },
            {
              type: 'emphasis',
              children: [
                {
                  type: 'text',
                  value: 'emphasized text here',
                },
              ],
            },
            {
              type: 'text',
              value: 'and text after',
            },
          ],
        },
      ],
    };

    const transformer = remarkWidont();
    transformer(tree);

    // Each text node is processed independently
    expect(tree.children[0].children[0].value).toBe('Text before\u00A0emphasis');
    expect(tree.children[0].children[1].children[0].value).toBe('emphasized text\u00A0here');
    expect(tree.children[0].children[2].value).toBe('and text\u00A0after');
  });

  it('should handle long sentences', () => {
    const tree: any = {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'This is a very long sentence with many words',
            },
          ],
        },
      ],
    };

    const transformer = remarkWidont();
    transformer(tree);

    expect(tree.children[0].children[0].value).toBe(
      'This is a very long sentence with many\u00A0words'
    );
  });
});
