import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface Props extends HTMLAttributes<HTMLElement> {
	className?: string;
}

export const ColorStack = ({ className, children, ...props }: Props) => (
	<article
		className={cn(
			'col-end-17 mbe-10 pbs-4 grid-cols-auto-sm col-start-1 grid gap-5',
			className
		)}
		{...props}
	>
		{children}
	</article>
);

export default ColorStack;
