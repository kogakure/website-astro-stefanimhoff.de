import { afterEach, vi } from 'vitest';

// Only setup DOM-related utilities if using happy-dom or jsdom environment
if (typeof window !== 'undefined') {
	// Import jest-dom matchers only in DOM environment
	await import('@testing-library/jest-dom/vitest');
	const { cleanup } = await import('@testing-library/react');

	if (!window.matchMedia) {
		Object.defineProperty(window, 'matchMedia', {
			writable: true,
			value: vi.fn().mockImplementation((query: string) => ({
				matches: false,
				media: query,
				onchange: null,
				addEventListener: vi.fn(),
				removeEventListener: vi.fn(),
				addListener: vi.fn(),
				removeListener: vi.fn(),
				dispatchEvent: vi.fn(),
			})),
		});
	}

	if (!window.ResizeObserver) {
		class ResizeObserverMock implements ResizeObserver {
			observe = vi.fn();
			unobserve = vi.fn();
			disconnect = vi.fn();
		}
		Object.defineProperty(window, 'ResizeObserver', { value: ResizeObserverMock });
		Object.defineProperty(globalThis, 'ResizeObserver', { value: ResizeObserverMock });
	}

	if (!window.IntersectionObserver) {
		class IntersectionObserverMock implements IntersectionObserver {
			readonly root = null;
			readonly rootMargin = '';
			readonly thresholds = [];
			disconnect = vi.fn();
			observe = vi.fn();
			takeRecords = vi.fn(() => []);
			unobserve = vi.fn();
		}
		Object.defineProperty(window, 'IntersectionObserver', { value: IntersectionObserverMock });
		Object.defineProperty(globalThis, 'IntersectionObserver', {
			value: IntersectionObserverMock,
		});
	}

	if (!navigator.clipboard) {
		Object.defineProperty(navigator, 'clipboard', {
			writable: true,
			value: { writeText: vi.fn().mockResolvedValue(undefined) },
		});
	}

	const storage = new Map<string, string>();
	const localStorageMock: Storage = {
		get length() {
			return storage.size;
		},
		clear: vi.fn(() => storage.clear()),
		getItem: vi.fn((key: string) => storage.get(key) ?? null),
		key: vi.fn((index: number) => Array.from(storage.keys())[index] ?? null),
		removeItem: vi.fn((key: string) => storage.delete(key)),
		setItem: vi.fn((key: string, value: string) => storage.set(key, String(value))),
	};
	Object.defineProperty(window, 'localStorage', { configurable: true, value: localStorageMock });
	Object.defineProperty(globalThis, 'localStorage', {
		configurable: true,
		value: localStorageMock,
	});

	// Automatically cleanup after each test
	afterEach(() => {
		cleanup();
	});
}
