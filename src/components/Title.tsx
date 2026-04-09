import type { ElementType, HTMLAttributes } from 'react';
import { cn } from '../lib/utils';

interface Props extends HTMLAttributes<HTMLElement> {
	as?: ElementType;
}

export const Title = ({ as: Tag = 'h1', className, children, ...props }: Props) => (
	<Tag
		className={cn(
			'text-7 font-black tracking-tight mbe-13 [text-wrap:balance] dark:font-extrabold',
			className
		)}
		{...props}
	>
		{children}
	</Tag>
);

export default Title;
