import { afterEach } from 'vitest';

// Only setup DOM-related utilities if using jsdom environment
if (typeof window !== 'undefined') {
  // Import jest-dom matchers only in jsdom environment
  await import('@testing-library/jest-dom');
  const { cleanup } = await import('@testing-library/preact');

  // Automatically cleanup after each test
  afterEach(() => {
    cleanup();
  });
}
