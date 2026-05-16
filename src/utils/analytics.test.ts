import { afterEach, describe, expect, it, vi } from 'vitest';
import { queryLengthBucket, resultCountBucket, trackEvent } from './analytics';

describe('analytics', () => {
	describe('trackEvent', () => {
		afterEach(() => {
			vi.unstubAllGlobals();
		});

		it('no-ops when window.umami is undefined', () => {
			vi.stubGlobal('window', { umami: undefined });
			expect(() => trackEvent('Test: Event')).not.toThrow();
		});

		it('calls function-form window.umami with name', () => {
			const spy = vi.fn();
			vi.stubGlobal('window', { umami: spy });
			trackEvent('Test: Event');
			expect(spy).toHaveBeenCalledWith('Test: Event', undefined);
		});

		it('calls function-form window.umami with name and data', () => {
			const spy = vi.fn();
			vi.stubGlobal('window', { umami: spy });
			trackEvent('Test: Event', { key: 'value' });
			expect(spy).toHaveBeenCalledWith('Test: Event', { key: 'value' });
		});

		it('calls object-form window.umami.track', () => {
			const spy = vi.fn();
			vi.stubGlobal('window', { umami: { track: spy } });
			trackEvent('Test: Event', { count: 3 });
			expect(spy).toHaveBeenCalledWith('Test: Event', { count: 3 });
		});

		it('swallows thrown errors', () => {
			vi.stubGlobal('window', {
				umami: () => {
					throw new Error('network error');
				},
			});
			expect(() => trackEvent('Test: Event')).not.toThrow();
		});
	});

	describe('queryLengthBucket', () => {
		it('empty string → short', () => {
			expect(queryLengthBucket('')).toBe('short');
		});

		it('3 chars → short', () => {
			expect(queryLengthBucket('abc')).toBe('short');
		});

		it('4 chars → medium', () => {
			expect(queryLengthBucket('abcd')).toBe('medium');
		});

		it('10 chars → medium', () => {
			expect(queryLengthBucket('abcdefghij')).toBe('medium');
		});

		it('11 chars → long', () => {
			expect(queryLengthBucket('abcdefghijk')).toBe('long');
		});

		it('trims whitespace before measuring', () => {
			expect(queryLengthBucket('  ab  ')).toBe('short');
		});
	});

	describe('resultCountBucket', () => {
		it('0 → "0"', () => {
			expect(resultCountBucket(0)).toBe('0');
		});

		it('1 → "1-3"', () => {
			expect(resultCountBucket(1)).toBe('1-3');
		});

		it('3 → "1-3"', () => {
			expect(resultCountBucket(3)).toBe('1-3');
		});

		it('4 → "4-8"', () => {
			expect(resultCountBucket(4)).toBe('4-8');
		});

		it('8 → "4-8"', () => {
			expect(resultCountBucket(8)).toBe('4-8');
		});

		it('9 → "9+"', () => {
			expect(resultCountBucket(9)).toBe('9+');
		});
	});
});
