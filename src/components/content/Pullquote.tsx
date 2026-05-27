import type { BlockquoteHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';
import QuoteAttribution from '../ui/QuoteAttribution';

interface Props extends BlockquoteHTMLAttributes<HTMLQuoteElement> {
	alignment?: 'center' | 'start';
	author?: string;
	lang?: string;
	source?: string;
	sourceUrl?: string;
	text: string;
}

export const Pullquote = ({
	alignment = 'start',
	author,
	className,
	lang = 'en',
	source,
	sourceUrl,
	text,
	...props
}: Props) => (
	<blockquote
		lang={lang}
		className={cn(
			'pullquote mbe-12 mbs-12 mis-8 md:mis-12',
			alignment === 'center' && 'text-center',
			alignment === 'start' && 'text-start',
			className
		)}
		{...props}
		data-ma="Pullquote"
	>
		<p className="font-display text-5 mbe-0 text-balance font-bold">{text}</p>
		<QuoteAttribution author={author} source={source} sourceUrl={sourceUrl} />
	</blockquote>
);

export default Pullquote;
