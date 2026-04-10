import type { AnchorHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';
import ArrowCta from '../icons/ArrowCta';
import { Link } from './Link';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
	href: string;
	text: string;
}

export const MoreLink = ({ href, text, className, ...props }: Props) => (
	<Link
		className={cn('text-3 font-bold transition-opacity hover:opacity-60', className)}
		href={href}
		{...props}
	>
		{text}
		<ArrowCta
			aria-hidden="true"
			className="text-beni ml-2 inline-block h-[0.6em] w-auto align-middle"
		/>
	</Link>
);

export default MoreLink;
