import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // Use node environment by default (faster, fewer dependencies)
    // Component tests can override with @vitest-environment jsdom
    environment: 'node',

    // Use threads pool to avoid CommonJS/ESM issues
    pool: 'threads',

    // Setup file for test utilities (jest-dom matchers)
    setupFiles: ['./src/test/setup.ts'],

    // Include patterns
    include: ['src/**/*.{test,spec}.{js,ts,tsx}'],

    // Exclude patterns
    exclude: [
      'node_modules',
      'dist',
      '.astro',
      '.git',
      'public',
    ],

    // Coverage configuration
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      exclude: [
        'node_modules/',
        'dist/',
        '.astro/',
        'src/test/',
        '**/*.test.ts',
        '**/*.spec.ts',
        '**/*.test.tsx',
        '**/*.spec.tsx',
        'src/components/icons/**',
        '*.cjs',
        'astro.config.mjs',
        'tailwind.config.cjs',
      ],
      thresholds: {
        statements: 70,
        branches: 70,
        functions: 70,
        lines: 70,
      },
    },

    // Globals for cleaner test syntax
    globals: true,

    // Watch options
    watch: false,
  },
});
