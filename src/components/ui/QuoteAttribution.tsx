import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';
import TextLink from './TextLink';

interface Props extends HTMLAttributes<HTMLElement> {
	author?: string;
	source?: string;
	sourceUrl?: string;
}

export const QuoteAttribution = ({ author, source, sourceUrl, className, ...props }: Props) => {
	if (!author && !source) return null;

	return (
		<footer className={cn('text-3 mbs-6 mbe-0 not-italic', className)} {...props}>
			<span aria-hidden="true" className="text-beni dark:text-beni-light">
				—
			</span>{' '}
			{author && (
				<>
					<b className="text-beni dark:text-beni-light font-bold">{author}</b>
					{source && ', '}
				</>
			)}
			{source && (
				<cite>{sourceUrl ? <TextLink href={sourceUrl}>{source}</TextLink> : source}</cite>
			)}
		</footer>
	);
};

export default QuoteAttribution;
