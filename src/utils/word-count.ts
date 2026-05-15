export const wordCount = (text: string) => {
	const clean = text.replace(/<\/?[^>]+(>|$)/g, '');
	const numberOfWords = clean.split(/\s+/g).filter(Boolean).length;

	return numberOfWords;
};
