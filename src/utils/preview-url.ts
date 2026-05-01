const FALLBACK = '/assets/images/preview/ma.webp';

export const getPreviewUrl = (cover?: string): string => {
	if (!cover) return FALLBACK;
	if (cover.startsWith('/assets/images/cover/')) {
		return cover
			.replace('/assets/images/cover/', '/assets/images/preview/')
			.replace(/\.(webp|png|jpe?g)$/i, '.webp');
	}
	return FALLBACK;
};
