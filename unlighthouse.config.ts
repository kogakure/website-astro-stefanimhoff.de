import { defineUnlighthouseConfig } from 'unlighthouse/config';

export default defineUnlighthouseConfig({
	site: 'https://www.stefanimhoff.de',
	ci: {
		budget: {
			performance: 85,
			accessibility: 100,
			'best-practices': 100,
			seo: 100,
		},
		buildStatic: true,
	},
	scanner: {
		samples: 1,
		throttle: true,
		exclude: ['/cv/', '/imprint/', '/design-system/*'],
	},
});
