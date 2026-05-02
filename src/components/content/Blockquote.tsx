import type { BlockquoteHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';
import QuoteAttribution from '../ui/QuoteAttribution';

interface Props extends BlockquoteHTMLAttributes<HTMLQuoteElement> {
	author?: string;
	lang?: string;
	source?: string;
	sourceUrl?: string;
}

export const Blockquote = ({
	author,
	className,
	lang = 'en',
	source,
	sourceUrl,
	children,
	...props
}: Props) => (
	<blockquote
		lang={lang}
		className={cn(
			'mbe-12 mbs-12 mis-8 md:mis-12 [&_p]:mbe-8 [&_p:last-of-type]:mbe-0 [&_p]:text-balance [&_p]:italic',
			className
		)}
		{...props}
	>
		{children}
		<QuoteAttribution author={author} source={source} sourceUrl={sourceUrl} />
	</blockquote>
);

export default Blockquote;
