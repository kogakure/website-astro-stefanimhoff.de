import type { AnchorHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';
import { Link } from './Link';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export const TextLink = ({ className, children, ...props }: Props) => (
	<Link
		className={cn(
			'text-beni visited:text-beni-muted active:text-beni-dark no-underline',
			'bg-gradient-to-r from-current to-current bg-[length:0%_1px] bg-[position:0_100%] bg-no-repeat',
			'transition-[background-size] duration-200 ease-[var(--ease-enter)]',
			'hover:text-beni hover:bg-[length:100%_1px]',
			className
		)}
		{...props}
	>
		{children}
	</Link>
);

export default TextLink;
