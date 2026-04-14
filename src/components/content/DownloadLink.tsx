import { DownloadSimpleIcon } from '@phosphor-icons/react';
import type { AnchorHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';
import { TextLink } from '../ui/TextLink';

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
		<span className="more-icon mis-[0.2em] block-start-[0.2em] relative inline-flex">
			<DownloadSimpleIcon
				aria-hidden="true"
				className="icon h-icon w-icon transition-transform duration-500 ease-in-out group-hover:translate-y-1 group-focus:translate-y-1"
			/>
		</span>
	</TextLink>
);

export default DownloadLink;
