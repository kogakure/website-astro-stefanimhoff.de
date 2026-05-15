import { getViteConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

const alias = {
	'@': fileURLToPath(new URL('./src', import.meta.url)),
	'/pagefind/pagefind.js': fileURLToPath(new URL('./src/test/pagefind-mock.ts', import.meta.url)),
};

export default defineConfig({
	test: {
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
		projects: [
			{
				resolve: { alias },
				test: {
					name: 'unit',
					environment: 'node',
					setupFiles: ['./src/test/setup.ts'],
					include: ['src/**/*.{test,spec}.{js,ts,tsx}'],
					exclude: [
						'node_modules',
						'dist',
						'.astro',
						'.git',
						'public',
						'src/components/site/**/*.a11y.test.ts',
					],
					globals: true,
				},
			},
			getViteConfig({
				resolve: { alias },
				test: {
					name: 'astro',
					environment: 'node',
					setupFiles: ['./src/test/setup.ts'],
					include: ['src/components/site/**/*.a11y.test.ts'],
					globals: true,
				},
			}),
		],
	},
});
