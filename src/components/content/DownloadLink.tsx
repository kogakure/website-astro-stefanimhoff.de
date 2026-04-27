import { DownloadSimpleIcon } from '@phosphor-icons/react';
import type { AnchorHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';
import { Link } from '../ui/Link';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
	href: string;
	text: string;
}

export const DownloadLink = ({ href, text, className, ...props }: Props) => (
	<Link
		className={cn(
			'text-beni visited:text-beni-muted active:text-beni-dark group inline-flex items-baseline no-underline',
			className
		)}
		href={href}
		data-umami-event={`Download: ${text}`}
		{...props}
	>
		<span className="bg-gradient-to-r from-current to-current bg-[length:0%_1px] bg-[position:0_100%] bg-no-repeat transition-[background-size] duration-200 ease-[var(--ease-enter)] group-hover:bg-[length:100%_1px]">
			{text}
		</span>
		<span className="more-icon mis-[0.2em] block-start-[0.2em] relative inline-flex">
			<DownloadSimpleIcon
				aria-hidden="true"
				className="icon h-icon w-icon transition-transform duration-500 ease-in-out group-hover:translate-y-1 group-focus:translate-y-1"
			/>
		</span>
	</Link>
);

export default DownloadLink;
