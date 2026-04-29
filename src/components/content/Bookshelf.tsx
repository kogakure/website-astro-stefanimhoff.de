import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface Props extends HTMLAttributes<HTMLElement> {}

export const Bookshelf = ({ className, children, ...props }: Props) => (
	<article
		className={cn(
			'rounded-4 mbe-13 mbs-0 mie-0 mis-0 grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] place-items-center justify-center gap-[20px] bg-white/50 p-10 dark:bg-black/80',
			className
		)}
		{...props}
	>
		{children}
	</article>
);

export default Bookshelf;
