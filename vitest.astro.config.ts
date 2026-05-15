import { getViteConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';

// Separate Vitest config for Astro .astro component tests.
// Uses Astro's Vite plugin chain so .astro files can be imported and compiled.
export default getViteConfig({
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
			'/pagefind/pagefind.js': fileURLToPath(
				new URL('./src/test/pagefind-mock.ts', import.meta.url)
			),
		},
	},
	test: {
		environment: 'node',
		setupFiles: ['./src/test/setup.ts'],
		include: ['src/components/site/**/*.a11y.test.ts'],
		globals: true,
	},
});
