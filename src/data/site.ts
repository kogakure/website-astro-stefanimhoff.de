const animationType = 'slide-up';
const delay = 300;
const duration = 800;
const easing = 'ease-out-sine';

export const site = {
	title: 'Stefan Imhoff',
	description: 'Front-End Web Developer from Hamburg, Germany',
	url: 'https://www.stefanimhoff.de',
	author: 'Stefan Imhoff',
	tagline: 'Front-End Web Developer • Designer • Minimalist • Japanophile',
	faviconPath: '/assets/images/branding/favicons/',
	twitter: '@kogakure',
};

export const animation = {
	'data-sal': animationType,
	'data-sal-duration': duration,
	'data-sal-easing': easing,
};

export const animationDelay = {
	...animation,
	'data-sal-delay': delay,
};
