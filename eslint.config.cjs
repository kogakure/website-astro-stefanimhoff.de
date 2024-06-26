module.exports = {
	env: {
		es6: true,
		node: true,
		browser: true,
	},
	extends: ['eslint:recommended', 'plugin:prettier/recommended', 'plugin:astro/recommended'],
	plugins: ['prettier', 'astro'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		sourceType: 'module',
		project: './tsconfig.json',
		extraFileExtensions: ['.astro'],
	},
	rules: {
		'prettier/prettier': 'error',
	},
	ignorePatterns: ['public/assets/scripts/'],
	overrides: [
		{
			files: ['*.astro'],
			parser: 'astro-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
				extraFileExtensions: ['.astro'],
				sourceType: 'module',
			},
			rules: {
				'astro/no-conflict-set-directives': 'error',
				'astro/no-unused-define-vars-in-style': 'error',
			},
		},
		{
			files: ['**/*.astro/*.js', '*.astro/*.js'],
			env: {
				browser: true,
				es2020: true,
			},
			parserOptions: {
				sourceType: 'module',
			},
			rules: {
				'prettier/prettier': 'off',
			},
		},
	],
};
