import { afterEach } from 'vitest';

// Only setup DOM-related utilities if using happy-dom or jsdom environment
if (typeof window !== 'undefined') {
	// Import jest-dom matchers only in DOM environment
	await import('@testing-library/jest-dom/vitest');
	const { cleanup } = await import('@testing-library/react');

	// Automatically cleanup after each test
	afterEach(() => {
		cleanup();
	});
}
