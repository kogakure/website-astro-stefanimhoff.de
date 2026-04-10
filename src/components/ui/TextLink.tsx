import type { AnchorHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';
import { Link } from './Link';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export const TextLink = ({ className, children, ...props }: Props) => (
	<Link
		className={cn('text-beni underline transition-opacity hover:opacity-60', className)}
		{...props}
	>
		{children}
	</Link>
);

export default TextLink;
