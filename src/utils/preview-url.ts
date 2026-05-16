import type { ImageMetadata } from 'astro';

const FALLBACK = '/assets/images/preview/ma.webp';

export const getPreviewUrl = (cover?: ImageMetadata | string): string => {
	if (!cover) return FALLBACK;
	const src = typeof cover === 'string' ? cover : cover.src;
	const basename = src
		.split('/')
		.pop()
		?.replace(/\.[^.]+$/, '');
	if (!basename) return FALLBACK;
	return `/assets/images/preview/${basename}.webp`;
};
