import type { ElementType, HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface Props extends HTMLAttributes<HTMLElement> {
	as?: ElementType;
}

export const Title = ({ as: Tag = 'h1', className, children, ...props }: Props) => (
	<Tag
		className={cn(
			'font-display text-sumi dark:text-washi text-balance text-[clamp(3rem,10vw,9rem)] font-bold leading-[0.92] tracking-tight',
			className
		)}
		{...props}
	>
		{children}
	</Tag>
);

export default Title;
