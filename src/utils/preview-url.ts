const FALLBACK = '/assets/images/preview/ma.webp';

export const getPreviewUrl = (cover?: string): string => {
	if (!cover) return FALLBACK;
	const basename = cover.split('/').pop()?.split('.')[0];
	if (!basename) return FALLBACK;
	return `/assets/images/preview/${basename}.webp`;
};
