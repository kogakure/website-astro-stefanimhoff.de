import type { AnchorHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';
import { Link } from './Link';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export const TextLink = ({ className, children, ...props }: Props) => (
	<Link
		className={cn(
			'text-beni visited:text-beni-muted active:text-beni-dark no-underline',
			'bg-linear-to-r bg-size-[0%_1px] bg-position-[0_100%] from-current to-current bg-no-repeat',
			'ease-enter transition-[background-size] duration-200',
			'hover:text-beni hover:bg-size-[100%_1px]',
			className
		)}
		{...props}
	>
		{children}
	</Link>
);

export default TextLink;
