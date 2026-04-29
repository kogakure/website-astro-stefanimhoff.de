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
		<span className="bg-linear-to-r bg-size-[0%_1px] bg-position-[0_100%] ease-enter group-hover:bg-size-[100%_1px] from-current to-current bg-no-repeat transition-[background-size] duration-200">
			{text}
		</span>
		<span className="more-icon inset-bs-[0.2em] relative ms-[0.2em] inline-flex">
			<DownloadSimpleIcon
				aria-hidden="true"
				className="icon h-icon w-icon transition-transform duration-500 ease-in-out group-hover:translate-y-1 group-focus:translate-y-1"
			/>
		</span>
	</Link>
);

export default DownloadLink;
