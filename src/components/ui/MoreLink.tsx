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
		className={cn(
			'text-3 hover:text-beni active:text-beni-dark ease-enter group font-bold transition-colors duration-200',
			className
		)}
		href={href}
		{...props}
	>
		{text}
		<ArrowCta
			aria-hidden="true"
			className="text-beni group-active:text-beni-dark ease-enter ml-2 inline-block h-[0.6em] w-auto align-middle transition-transform duration-200 group-hover:translate-x-1"
		/>
	</Link>
);

export default MoreLink;
