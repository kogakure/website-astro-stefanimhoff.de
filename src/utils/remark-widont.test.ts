import { describe, expect, it } from 'vitest';
import { remarkWidont } from './remark-widont';

import type { Text } from 'mdast';
import type { MdastVisitorContext } from 'satteri';

function makeContext() {
	const setProperty = (node: Text, key: string, value: unknown) => {
		if (key === 'value') node.value = value as string;
	};
	return { setProperty } as unknown as MdastVisitorContext;
}

describe('remark-widont', () => {
	it('should add non-breaking space before last word (3+ words)', () => {
		const node: Text = { type: 'text', value: 'This is a test' };
		remarkWidont().text?.(node, makeContext());

		expect(node.value).toBe('This is a test');
	});

	it('should not modify text with less than 3 words', () => {
		const node: Text = { type: 'text', value: 'Two words' };
		remarkWidont().text?.(node, makeContext());

		expect(node.value).toBe('Two words');
	});

	it('should handle single word', () => {
		const node: Text = { type: 'text', value: 'Word' };
		remarkWidont().text?.(node, makeContext());

		expect(node.value).toBe('Word');
	});

	it('should handle multiple text nodes independently', () => {
		const first: Text = { type: 'text', value: 'First text node' };
		const second: Text = { type: 'text', value: 'Second text node' };
		const plugin = remarkWidont();
		const ctx = makeContext();

		plugin.text?.(first, ctx);
		plugin.text?.(second, ctx);

		expect(first.value).toBe('First text node');
		expect(second.value).toBe('Second text node');
	});

	it('should handle text with punctuation', () => {
		const node: Text = { type: 'text', value: 'This is a test.' };
		remarkWidont().text?.(node, makeContext());

		expect(node.value).toBe('This is a test.');
	});

	it('should handle text with multiple spaces', () => {
		const node: Text = { type: 'text', value: 'This  has  extra  spaces' };
		remarkWidont().text?.(node, makeContext());

		expect(node.value).toContain(' spaces');
	});

	it('should handle empty string', () => {
		const node: Text = { type: 'text', value: '' };
		remarkWidont().text?.(node, makeContext());

		expect(node.value).toBe('');
	});

	it('should process each text node independently in nested structures', () => {
		const before: Text = { type: 'text', value: 'Text before emphasis' };
		const emphasized: Text = { type: 'text', value: 'emphasized text here' };
		const after: Text = { type: 'text', value: 'and text after' };
		const plugin = remarkWidont();
		const ctx = makeContext();

		plugin.text?.(before, ctx);
		plugin.text?.(emphasized, ctx);
		plugin.text?.(after, ctx);

		expect(before.value).toBe('Text before emphasis');
		expect(emphasized.value).toBe('emphasized text here');
		expect(after.value).toBe('and text after');
	});

	it('should handle long sentences', () => {
		const node: Text = { type: 'text', value: 'This is a very long sentence with many words' };
		remarkWidont().text?.(node, makeContext());

		expect(node.value).toBe('This is a very long sentence with many words');
	});
});
