import type { AnchorHTMLAttributes } from 'react';
import { DownloadSimple } from '@phosphor-icons/react';
import { cn } from '../lib/utils';
import { TextLink } from './TextLink';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
	href: string;
	text: string;
}

export const DownloadLink = ({ href, text, className, ...props }: Props) => (
	<TextLink
		className={cn('group', className)}
		href={href}
		data-umami-event={`Download: ${text}`}
		{...props}
	>
		{text}
		<span className="more-icon relative inline-flex mis-[0.2em] block-start-[0.2em]">
			<DownloadSimple
				aria-hidden="true"
				className="icon h-icon w-icon transition-transform duration-500 ease-in-out group-hover:translate-y-1 group-focus:translate-y-1"
			/>
		</span>
	</TextLink>
);

export default DownloadLink;
