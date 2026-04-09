import type { AnchorHTMLAttributes } from 'react';
import { cn } from '../lib/utils';
import { TextLink } from './TextLink';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
	asin: string;
	text: string;
}

export const ProductLink = ({ asin, className, text, ...props }: Props) => (
	<TextLink
		className={cn('product', className)}
		data-umami-event={`Product: ${asin}`}
		href={`https://www.amazon.de/gp/product/${asin}`}
		{...props}
	>
		{text}
	</TextLink>
);

export default ProductLink;
