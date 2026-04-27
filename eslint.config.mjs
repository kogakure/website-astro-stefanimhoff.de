import js from '@eslint/js';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import astroPlugin from 'eslint-plugin-astro';
import prettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
	js.configs.recommended,
	prettierRecommended,
	...astroPlugin.configs['flat/recommended'],
	{
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				sourceType: 'module',
				project: './tsconfig.json',
				extraFileExtensions: ['.astro'],
			},
			globals: {
				...globals.es6,
				...globals.node,
				...globals.browser,
			},
		},
	},
	{
		ignores: ['public/assets/scripts/'],
	},
];
