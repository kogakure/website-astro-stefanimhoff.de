import type { HTMLAttributes } from 'react';
import { cn } from '../lib/utils';

interface Props extends HTMLAttributes<HTMLElement> {}

export const Bookshelf = ({ className, children, ...props }: Props) => (
	<article
		className={cn(
			'grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] place-items-center justify-center gap-[20px] rounded-4 bg-white/50 p-10 mbe-13 mbs-0 mie-0 mis-0 dark:bg-black/80',
			className
		)}
		{...props}
	>
		{children}
	</article>
);

export default Bookshelf;
