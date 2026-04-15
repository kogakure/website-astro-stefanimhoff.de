import type { ElementType, HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface Props extends HTMLAttributes<HTMLElement> {
	as?: ElementType;
}

export const SectionLabel = ({ as: Tag = 'span', className, children, ...props }: Props) => (
	<Tag className={cn('text-2 text-hai block uppercase', className)} {...props}>
		{children}
	</Tag>
);

export default SectionLabel;
