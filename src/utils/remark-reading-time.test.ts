import { describe, expect, it } from 'vitest';
import { remarkReadingTime } from './remark-reading-time';

import type { MdastVisitorContext } from 'satteri';

function makeContext(frontmatter: Record<string, unknown> = {}) {
	return {
		data: { astro: { frontmatter } },
	} as unknown as MdastVisitorContext;
}

describe('remark-reading-time', () => {
	it('should calculate reading time for short text', () => {
		const ctx = makeContext();
		const plugin = remarkReadingTime();

		plugin.text?.({ type: 'text', value: 'Hello world this is a short text.' }, ctx);

		expect(ctx.data.astro?.frontmatter.minutesRead).toBeDefined();
		expect(typeof ctx.data.astro?.frontmatter.minutesRead).toBe('number');
		expect(ctx.data.astro?.frontmatter.minutesRead).toBeGreaterThan(0);
	});

	it('should calculate reading time for longer text', () => {
		const longText = Array(500).fill('word').join(' '); // 500 words
		const ctx = makeContext();
		const plugin = remarkReadingTime();

		plugin.text?.({ type: 'text', value: longText }, ctx);

		expect(ctx.data.astro?.frontmatter.minutesRead).toBeGreaterThan(1);
	});

	it('should handle empty text', () => {
		const ctx = makeContext();
		remarkReadingTime();

		expect(ctx.data.astro?.frontmatter.minutesRead).toBeUndefined();
	});

	it('should handle nested content across multiple text nodes', () => {
		const ctx = makeContext();
		const plugin = remarkReadingTime();

		plugin.text?.({ type: 'text', value: 'First paragraph.' }, ctx);
		plugin.text?.({ type: 'text', value: 'Second paragraph with ' }, ctx);
		plugin.text?.({ type: 'text', value: 'emphasis' }, ctx);
		plugin.text?.({ type: 'text', value: ' text.' }, ctx);

		expect(ctx.data.astro?.frontmatter.minutesRead).toBeDefined();
		expect(ctx.data.astro?.frontmatter.minutesRead).toBeGreaterThan(0);
	});

	it('should not overwrite existing frontmatter properties', () => {
		const ctx = makeContext({ title: 'Existing Title', date: new Date() });
		const plugin = remarkReadingTime();

		plugin.text?.({ type: 'text', value: 'Some text content.' }, ctx);

		expect(ctx.data.astro?.frontmatter.title).toBe('Existing Title');
		expect(ctx.data.astro?.frontmatter.date).toBeDefined();
		expect(ctx.data.astro?.frontmatter.minutesRead).toBeDefined();
	});

	it('should accumulate inline code and fenced code blocks into word count', () => {
		const ctx = makeContext();
		const plugin = remarkReadingTime();

		plugin.text?.({ type: 'text', value: 'Some prose.' }, ctx);
		plugin.inlineCode?.({ type: 'inlineCode', value: 'const x = 1' }, ctx);
		plugin.code?.({ type: 'code', value: 'function foo() {}' }, ctx);

		expect(ctx.data.astro?.frontmatter.words).toBeGreaterThan(0);
	});
});
