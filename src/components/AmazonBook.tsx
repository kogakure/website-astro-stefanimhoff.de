import type { FunctionalComponent, JSX } from 'preact';

import { Book, Link } from '.';

interface Props extends JSX.HTMLAttributes<HTMLAnchorElement> {
	alt?: string;
	asin: string;
	class?: string;
}

export const AmazonBook: FunctionalComponent<Props> = ({
	alt = '',
	asin,
	class: className,
	...props
}) => {
	const amazonImageUrl = `https://images-na.ssl-images-amazon.com/images/P/${asin}.01.LZZZZZZZ.jpg`;

	return (
		<Link
			href={`http://www.amazon.de/gp/product/${asin}`}
			class={className}
			aria-label={alt}
			{...props}
		>
			<Book alt={alt} src={amazonImageUrl} />
		</Link>
	);
};
