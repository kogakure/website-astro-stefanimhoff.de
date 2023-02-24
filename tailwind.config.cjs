/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			screens: {
				xs: '320px', // --phone
				md: '768px', // --tablet
				xl: '1280px', // --desktop (prev. 1200)
				'3xl': '1800px', // --wide
			},
			colors: {
				accent: '#e60510',
				shibui: {
					50: '#f3f3f1',
					100: '#e6e6e3', // bg (light), fg (dark, 0.87 alpha)
					150: '#dad9d5',
					200: '#cdccc7', // bg dark (light)
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
					900: '#1b1917', // bg (dark)
					950: '#0e0d0c', // fg (light), bg dark (dark)
				},
			},
			gridTemplateColumns: {
				10: 'repeat(10, minmax(0, 1fr))', // --grid-narrow
				14: 'repeat(14, minmax(0, 1fr))', // --grid-wide
				18: 'repeat(18, minmax(0, 1fr))', // --grid-fullsize
			},
			gridTemplateRows: ({ theme }) => ({
				layout: `clamp(3rem, ${theme('spacing.layout')}, 9rem)`,
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
			},
			borderRadius: {
				1: '2px', // --radius-1
				2: '5px', // --radius-2
				4: '8px', // --radius-4
				25: '25px', // --radius-25
				50: '50%', // --radius-50
			},
			borderWidth: {
				1: '1px', // --border-width-1, (DEFAULT)
				2: '2px',
				10: '0.1em', // --border-width-10
				15: '0.15em', // --border-width-15
			},
			spacing: {
				1: '0.335rem', // --space-1 (spacing-1.5)
				2: 'clamp(0.335rem, 0.72vw, 0.402rem)', // --space-2
				3: 'clamp(0.402rem, 0.86vw, 0.482rem)', // --space-3
				4: 'clamp(0.482rem, 1.03vw, 0.579rem)', // --space-4
				5: 'clamp(0.579rem, 1.24vw, 0.694rem)', // --space-5
				6: 'clamp(0.694rem, 1.49vw, 0.833rem)', // --space-6
				7: 'clamp(0.833rem, 1.78vw, 1rem)', // --space-7
				8: 'clamp(1rem, 2.14vw, 1.2rem)', // --space-8
				9: 'clamp(1.2rem, 2.57vw, 1.44rem)', // --space-9
				10: 'clamp(1.44rem, 3.7vw, 1.728rem)', // --space-10
				11: 'clamp(1.728rem, 3.7vw, 2.074rem)', // --space-11
				12: 'clamp(2.074rem, 4.44vw, 2.488rem)', // --space-12
				13: 'clamp(2.488rem, 5.32vw, 2.986rem)', // --space-13
				14: 'clamp(2.986rem, 6.39vw, 3.583rem)', // --space-14
				15: 'clamp(3.583rem, 7.67vw, 4.3rem)', // --space-15
				16: 'clamp(4.3rem, 9.2vw, 5.16rem)', // --space-16
				17: 'clamp(5.16rem, 11.04vw, 6.192rem)', // --space-17
				18: 'clamp(6.192rem, 13.25vw, 7.43rem)', // --space-18
				19: 'clamp(7.43rem, 15.9vw, 8.916rem)', // --space-19
				20: 'clamp(8.916rem, 19.08vw, 10.699rem)', // --space-20
				column: '5.55vw', // --space-55 TODO: new name, e.g. spacing-grid
				halfcolumn: '2.775vw',
				layout: 'clamp(1.5rem, 5.55vw, 4.5rem)',
				icon: '24px',
				'icon-small': '20px',
				clickarea: '40px',
			},
			fontFamily: {
				sans: ['SecuelaVariable', 'Arial', 'sans-serif'], // --font-family-base
				mono: ['Fira Code', 'Operator', 'Hasklig', 'Monoid', 'monospace'], // --font-family-mono
			},
			// TODO: Switch to Tshirt sizes
			fontSize: {
				1: ['0.65em', { lineHeight: '' }], // --font-size-1 (0)
				2: ['clamp(0.65rem, 0.8vw, 0.75rem)', { lineHeight: '1.625' }], // --font-size-2 (2)
				3: ['clamp(1rem, 1.1vw, 1.25rem)', { lineHeight: '1.625' }], // --font-size-3 (15)
				4: ['clamp(1.25rem, 1.8vw, 2rem)', { lineHeight: '1' }], // --font-size-4 (5)
				5: ['clamp(1.5rem, 2.9vw, 3.25rem)', { lineHeight: '1' }], // --font-size-5 (1)
				6: ['clamp(2.25rem, 4.7vw, 5.3rem)', { lineHeight: '1' }], // --font-size-6 (1)
				7: ['clamp(3.3rem, 7.3vw, 8.5rem)', { lineHeight: '1' }], // --font-size-7 (1)
				8: ['clamp(4.5rem, 12.2vw, 13.87rem)', { lineHeight: '1' }], // --font-size-8 (0)
				9: ['clamp(5.5rem, 28.7vw, 22.43rem)', { lineHeight: '1' }], // --font-size-9 (1)
			},
			// TODO: Text Shadow?
			boxShadow: {
				subtle: '0 0 50px rgb(0 0 0 / 0.2)', // --shadow-subtle-shade
				beveled: '0 1px 0 rgb(0 0 0 / 0.2), inset 0 0 0 2px #ffffff', // --shadow-beveled-keyboard
				darkInset: 'inset 0 0 0 1px rgb(0 0 0 / 0.2)', // --shadow-dark-inset
			},
			dropShadow: {
				subtle: 'inset 0 0 5px rgb(0 0 0 / 0.15)', // --shadow-dark-inset
			},
		},
	},
	plugins: [require('tailwindcss-logical')],
};
