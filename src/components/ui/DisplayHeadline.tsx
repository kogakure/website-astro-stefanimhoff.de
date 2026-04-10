import type { ElementType, HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface Props extends HTMLAttributes<HTMLElement> {
	as?: ElementType;
}

export const DisplayHeadline = ({ as: Tag = 'h2', className, children, ...props }: Props) => (
	<Tag
		className={cn(
			'font-display text-5 text-sumi dark:text-washi font-bold tracking-tight',
			className
		)}
		{...props}
	>
		{children}
	</Tag>
);

export default DisplayHeadline;
