import { describe, expect, it } from 'vitest';
import {
	DUR_DELIBERATE,
	DUR_FAST,
	DUR_INSTANT,
	DUR_MODERATE,
	DUR_SLOW,
	EASE_ENTER,
	EASE_EXIT,
	EASE_STANDARD,
	VIEWPORT_DEFAULTS,
	fadeIn,
	fadeUp,
	fadeUpReduced,
	staggerContainer,
	staggerItem,
} from './motion';

describe('motion constants', () => {
	it('easing curves match CSS token values', () => {
		expect(EASE_ENTER).toEqual([0, 0, 0.38, 0.9]);
		expect(EASE_EXIT).toEqual([0.2, 0, 1, 0.9]);
		expect(EASE_STANDARD).toEqual([0.2, 0, 0.38, 0.9]);
	});

	it('durations match CSS token values (in seconds)', () => {
		expect(DUR_INSTANT).toBe(0.1);
		expect(DUR_FAST).toBe(0.2);
		expect(DUR_MODERATE).toBe(0.3);
		expect(DUR_SLOW).toBe(0.5);
		expect(DUR_DELIBERATE).toBe(0.8);
	});

	it('VIEWPORT_DEFAULTS fires once', () => {
		expect(VIEWPORT_DEFAULTS.once).toBe(true);
	});

	it('fadeUp has hidden and visible states', () => {
		expect(fadeUp.hidden).toBeDefined();
		expect(fadeUp.visible).toBeDefined();
	});

	it('fadeIn has no y transform', () => {
		expect((fadeIn.hidden as Record<string, unknown>).y).toBeUndefined();
	});

	it('fadeUpReduced has no y transform', () => {
		expect((fadeUpReduced.hidden as Record<string, unknown>).y).toBeUndefined();
	});

	it('staggerContainer returns variants with transition', () => {
		const c = staggerContainer(0.1, 0.05);
		expect((c.visible as Record<string, unknown>).transition).toBeDefined();
	});

	it('staggerItem has hidden and visible states', () => {
		expect(staggerItem.hidden).toBeDefined();
		expect(staggerItem.visible).toBeDefined();
	});
});
