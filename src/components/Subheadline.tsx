import type { ElementType, HTMLAttributes } from 'react';
import { cn } from '../lib/utils';

interface Props extends HTMLAttributes<HTMLElement> {
	as?: ElementType;
}

export const Subheadline = ({ as: Tag = 'h3', className, children, ...props }: Props) => (
	<Tag
		className={cn(
			'text-4 font-black tracking-tight mbe-8 [text-wrap:balance] dark:font-extrabold',
			className
		)}
		{...props}
	>
		{children}
	</Tag>
);

export default Subheadline;
