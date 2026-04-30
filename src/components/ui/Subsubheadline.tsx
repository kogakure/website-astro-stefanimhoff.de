import type { ElementType, HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface Props extends HTMLAttributes<HTMLElement> {
	as?: ElementType;
}

export const Subsubheadline = ({ as: Tag = 'h4', className, children, ...props }: Props) => (
	<Tag className={cn('text-2 mbe-5 text-balance font-normal', className)} {...props}>
		{children}
	</Tag>
);

export default Subsubheadline;
