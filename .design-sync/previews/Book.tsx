import { Book } from 'ma-design-system';

const sampleBookImg = `data:image/svg+xml,${encodeURIComponent(
	'<svg xmlns="http://www.w3.org/2000/svg" width="200" height="300"><rect width="200" height="300" fill="#900B20"/><text x="100" y="150" text-anchor="middle" dominant-baseline="middle" fill="#E6E6E6" font-family="sans-serif" font-size="12">Book cover</text></svg>'
)}`;

export const Default = () => <Book className="w-fit" src={sampleBookImg} alt="Sample book cover" />;
