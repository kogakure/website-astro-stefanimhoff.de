export const LegalDate = () => {
	const currentDate = new Date();
	const isoDate = currentDate.toISOString();
	const currentYear = currentDate.getFullYear();

	return <time dateTime={isoDate}>2006–{currentYear}</time>;
};
