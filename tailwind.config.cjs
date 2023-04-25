/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			screens: {
				xs: '320px',
				md: '768px',
				xl: '1280px',
				'3xl': '1800px',
				haiku: '25rem',
			},
			colors: {
				accent: '#e60510',
				marked: '#E6F028',
				shibui: {
					50: '#f3f3f1',
					100: '#e6e6e3',
					150: '#dad9d5',
					200: '#cdccc7',
					250: '#c0bfb9',
					300: '#b3b2ab',
					350: '#a7a59e',
					400: '#9a9891',
					450: '#8d8b84',
					500: '#807e77',
					550: '#74716a',
					600: '#67645e',
					650: '#5a5751',
					700: '#4e4b45',
					750: '#413e3a',
					800: '#34322e',
					850: '#272522',
					900: '#1b1917',
					950: '#0e0d0c',
				},
				code: {
					1: '#282c34',
					2: '#abb2bf',
				},
			},
			gridTemplateColumns: {
				2: 'repeat(2, minmax(0, 1fr))',
				6: 'repeat(6, minmax(0, 1fr))',
				8: 'repeat(8, minmax(0, 1fr))',
				10: 'repeat(10, minmax(0, 1fr))',
				14: 'repeat(14, minmax(0, 1fr))',
				16: 'repeat(16, minmax(0, 1fr))',
				18: 'repeat(18, minmax(0, 1fr))',
				books: 'repeat(auto-fill, minmax(150px, 1fr))',
				haiku: 'repeat(auto-fit, minmax(15rem, 1fr))',
				'haiku-xl': 'repeat(auto-fit, minmax(25rem, 1fr))',
			},
			gridTemplateRows: ({ theme }) => ({
				layout: `clamp(3rem, ${theme('spacing.column')}, 9rem)`,
				haiku: `clamp(3rem, ${theme('spacing.column')}, 9rem) 1fr`,
			}),
			columns: {
				13: '13',
				14: '14',
				15: '15',
				16: '16',
				17: '17',
				18: '18',
			},
			gridColumn: {
				'span-13': 'span 13 / span 13',
				'span-14': 'span 14 / span 14',
				'span-15': 'span 15 / span 15',
				'span-16': 'span 16 / span 16',
				'span-17': 'span 17 / span 17',
				'span-18': 'span 18 / span 18',
			},
			gridColumnStart: {
				14: '14',
				15: '15',
				16: '16',
				17: '17',
				18: '18',
			},
			gridColumnEnd: {
				14: '14',
				15: '15',
				16: '16',
				17: '17',
				18: '18',
				19: '19',
			},
			borderRadius: {
				1: '2px',
				2: '5px',
				4: '8px',
				25: '25px',
				50: '50%',
			},
			borderWidth: {
				1: '1px',
				2: '2px',
				10: '0.1em',
				15: '0.15em',
			},
			spacing: {
				1: '0.335rem',
				2: 'clamp(0.335rem, 0.72vw, 0.402rem)',
				3: 'clamp(0.402rem, 0.86vw, 0.482rem)',
				4: 'clamp(0.482rem, 1.03vw, 0.579rem)',
				5: 'clamp(0.579rem, 1.24vw, 0.694rem)',
				6: 'clamp(0.694rem, 1.49vw, 0.833rem)',
				7: 'clamp(0.833rem, 1.78vw, 1rem)',
				8: 'clamp(1rem, 2.14vw, 1.2rem)',
				9: 'clamp(1.2rem, 2.57vw, 1.44rem)',
				10: 'clamp(1.44rem, 3.7vw, 1.728rem)',
				11: 'clamp(1.728rem, 3.7vw, 2.074rem)',
				12: 'clamp(2.074rem, 4.44vw, 2.488rem)',
				13: 'clamp(2.488rem, 5.32vw, 2.986rem)',
				14: 'clamp(2.986rem, 6.39vw, 3.583rem)',
				15: 'clamp(3.583rem, 7.67vw, 4.3rem)',
				16: 'clamp(4.3rem, 9.2vw, 5.16rem)',
				17: 'clamp(5.16rem, 11.04vw, 6.192rem)',
				18: 'clamp(6.192rem, 13.25vw, 7.43rem)',
				19: 'clamp(7.43rem, 15.9vw, 8.916rem)',
				20: 'clamp(8.916rem, 19.08vw, 10.699rem)',
				column: '5.55vw',
				layout: 'clamp(1.5rem, 5.55vw, 4.5rem)',
				gap: 'clamp(1.5rem, 5.55vw, 6rem)',
				icon: '24px',
				'icon-small': '20px',
				clickarea: '40px',
			},
			fontFamily: {
				sans: ['SecuelaVariable', 'Arial', 'sans-serif'],
				mono: ['Fira Code', 'Operator', 'Hasklig', 'Monoid', 'monospace'],
			},
			fontSize: {
				1: ['0.65em', { lineHeight: '' }],
				2: ['clamp(0.65rem, 0.8vw, 0.75rem)', { lineHeight: '1.625' }],
				3: ['clamp(1rem, 1.1vw, 1.25rem)', { lineHeight: '1.625' }],
				4: ['clamp(1.25rem, 1.8vw, 2rem)', { lineHeight: '1' }],
				5: ['clamp(1.5rem, 2.9vw, 3.25rem)', { lineHeight: '1' }],
				6: ['clamp(2.25rem, 4.7vw, 5.3rem)', { lineHeight: '1' }],
				7: ['clamp(3.3rem, 7.3vw, 8.5rem)', { lineHeight: '1' }],
				8: ['clamp(4.5rem, 12.2vw, 13.87rem)', { lineHeight: '1' }],
				9: ['clamp(5.5rem, 28.7vw, 22.43rem)', { lineHeight: '1' }],
			},
			boxShadow: {
				subtle: '0 0 50px rgb(0 0 0 / 0.2)',
				beveled: '0 1px 0 rgb(0 0 0 / 0.2), inset 0 0 0 2px #ffffff',
				darkInset: 'inset 0 0 0 1px rgb(0 0 0 / 0.2)',
				book: '0 0.1em 0.5em rgba(0, 0, 0, 0.5)',
				'book-before': '0.1em 0 rgba(0, 0, 0, 0.1), 2px 0 0px rgba(255, 255, 255, 0.1)',
				'book-after': '0 0 2em rgba(0, 0, 0, 0.8)',
			},
			listStyleType: {
				none: 'none',
				decimal: 'decimal',
				square: 'square',
			},
			dropShadow: {
				subtle: 'inset 0 0 5px rgb(0 0 0 / 0.15)',
			},
		},
	},
	plugins: [require('tailwindcss-logical'), require('tailwindcss-opentype')],
};
