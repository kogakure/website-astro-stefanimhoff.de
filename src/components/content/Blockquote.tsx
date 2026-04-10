import type { BlockquoteHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';
import { TextLink } from '../ui/TextLink';

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
			'mbe-12 mbs-12 mie-8 mis-8 md:mie-10 md:mis-10 relative overflow-hidden',
			className
		)}
		{...props}
	>
		{children}
		{(author || source) && (
			<footer className="text-2 mbs-6 font-normal opacity-60">
				{(author || source) && '—'}
				{author && <b className="font-normal">{author}</b>}
				{author && source && ','}
				{source &&
					(sourceUrl ? (
						<cite>
							<TextLink href={sourceUrl}>{source}</TextLink>
						</cite>
					) : (
						<cite>{source}</cite>
					))}
			</footer>
		)}
	</blockquote>
);

export default Blockquote;
