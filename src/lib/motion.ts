import type { Variants } from 'motion/react';
import { useReducedMotion } from 'motion/react';

// Easing curves — mirrors --ease-* tokens in global.css:211-213
export const EASE_ENTER: [number, number, number, number] = [0, 0, 0.38, 0.9];
export const EASE_EXIT: [number, number, number, number] = [0.2, 0, 1, 0.9];
export const EASE_STANDARD: [number, number, number, number] = [0.2, 0, 0.38, 0.9];

// Durations in seconds — mirrors --duration-* tokens in global.css:214-218
export const DUR_INSTANT = 0.1;
export const DUR_FAST = 0.2;
export const DUR_MODERATE = 0.3;
export const DUR_SLOW = 0.5;
export const DUR_DELIBERATE = 0.8;

// Viewport defaults for whileInView triggers
export const VIEWPORT_DEFAULTS = {
	once: true,
	margin: '0px 0px -10% 0px',
} as const;

// Reveal variants
export const fadeUp: Variants = {
	hidden: { opacity: 0, y: 16 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: DUR_MODERATE, ease: EASE_ENTER },
	},
};

export const fadeIn: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { duration: DUR_MODERATE, ease: EASE_ENTER },
	},
};

// Reduced-motion fallback — opacity only, instant
export const fadeUpReduced: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { duration: DUR_INSTANT },
	},
};

// Stagger orchestration
export const staggerContainer = (delay = 0, stagger = 0.06): Variants => ({
	hidden: {},
	visible: {
		transition: { delayChildren: delay, staggerChildren: stagger },
	},
});

export const staggerItem: Variants = {
	hidden: { opacity: 0, y: 12 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: DUR_MODERATE, ease: EASE_ENTER },
	},
};

// Hook: returns motion-preset variants honoring prefers-reduced-motion
export const useMotionPreset = () => {
	const reduced = useReducedMotion();
	return {
		reduced,
		fadeUp: reduced ? fadeUpReduced : fadeUp,
		fadeIn: reduced ? fadeUpReduced : fadeIn,
		staggerItem: reduced ? fadeUpReduced : staggerItem,
		container: (delay = 0, stagger = 0.06) =>
			reduced ? staggerContainer(0, 0) : staggerContainer(delay, stagger),
	};
};
