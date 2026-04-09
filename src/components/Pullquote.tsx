import type { BlockquoteHTMLAttributes } from 'react';
import { cn } from '../lib/utils';
import { TextLink } from './TextLink';

interface Props extends BlockquoteHTMLAttributes<HTMLQuoteElement> {
	alignment?: 'center' | 'left';
	author?: string;
	lang?: string;
	source?: string;
	sourceUrl?: string;
	text: string;
}

export const Pullquote = ({
	alignment = 'center',
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
			'pullquote p-9 mbe-10 [text-wrap:balance]',
			alignment === 'center' && 'text-center',
			alignment === 'left' && 'text-left',
			className
		)}
		{...props}
	>
		<p dangerouslySetInnerHTML={{ __html: text }} />
		{(author || source) && (
			<footer className="text-2 font-normal opacity-60 mbs-6">
				{author && <b className="font-normal">{author}</b>}
				{author && source && ', '}
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

export default Pullquote;
