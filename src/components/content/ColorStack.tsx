import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface Props extends HTMLAttributes<HTMLElement> {}

export const ColorStack = ({ className, children, ...props }: Props) => (
	<article
		className={cn(
			'col-end-17 mbe-10 pbs-4 col-start-1 grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-[20px]',
			className
		)}
		{...props}
	>
		{children}
	</article>
);

export default ColorStack;
