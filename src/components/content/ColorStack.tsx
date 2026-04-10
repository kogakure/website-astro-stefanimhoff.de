import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface Props extends HTMLAttributes<HTMLElement> {}

export const ColorStack = ({ className, children, ...props }: Props) => (
	<article
		className={cn(
			'col-end-17 mbe-10 col-start-1 grid grid-cols-[repeat(auto-fill,_minmax(150px,_1fr))] gap-[20px]',
			className
		)}
		{...props}
	>
		{children}
	</article>
);

export default ColorStack;
