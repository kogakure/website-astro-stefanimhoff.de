import type { AnchorHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';
import { Link } from './Link';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export const EssayLink = ({ className, children, ...props }: Props) => (
	<Link className={cn('hover:text-beni no-underline transition-colors', className)} {...props}>
		{children}
	</Link>
);

export default EssayLink;
