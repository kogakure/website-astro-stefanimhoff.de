import type { ElementType, HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface Props extends HTMLAttributes<HTMLElement> {
	as?: ElementType;
}

export const Headline = ({ as: Tag = 'h2', className, children, ...props }: Props) => (
	<Tag className={cn('text-5 mbe-10 text-balance font-normal', className)} {...props}>
		{children}
	</Tag>
);

export default Headline;
