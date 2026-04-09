import type { HTMLAttributes } from 'react';
import { cn } from '../lib/utils';
import { Link } from './Link';
import { Book } from './Book';

interface Props extends HTMLAttributes<HTMLAnchorElement> {
	alt?: string;
	asin: string;
}

export const AmazonBook = ({ alt = '', asin, className, ...props }: Props) => (
	<Link
		aria-label={alt}
		className={cn(className)}
		data-umami-event={`Book: ${asin}`}
		href={`https://www.amazon.de/gp/product/${asin}`}
		{...props}
	>
		<Book
			alt={alt}
			src={`https://images-na.ssl-images-amazon.com/images/P/${asin}.01.LZZZZZZZ.jpg`}
		/>
	</Link>
);

export default AmazonBook;
