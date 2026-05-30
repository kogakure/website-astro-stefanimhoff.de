import type { ElementType, HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface Props extends HTMLAttributes<HTMLElement> {
	as?: ElementType;
}

export const Title = ({ as: Tag = 'h1', className, children, ...props }: Props) => (
	<Tag
		className={cn(
			'font-display text-sumi dark:text-washi leading-display-sm text-9 tracking-display text-balance font-bold',
			className
		)}
		{...props}
		data-ma="Title"
	>
		{children}
	</Tag>
);

export default Title;
