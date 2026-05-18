// Mock for astro:assets virtual module — provides a no-op getImage for Vitest
export const getImage = async () => ({
	src: '/mock-image.webp',
	srcSet: { attribute: '', values: [{ url: '/mock-image.webp' }] },
	attributes: {},
});

export const Image = () => null;
