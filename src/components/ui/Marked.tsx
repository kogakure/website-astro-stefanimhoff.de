import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

type Props = HTMLAttributes<HTMLElement>;

export const Marked = ({ className, children, ...props }: Props) => (
	<mark
		className={cn(
			'bg-beni-pale text-sumi dark:bg-beni-dark/40 dark:text-washi pbe-[0.05em] rounded-sm px-[0.25em]',
			className
		)}
		{...props}
	>
		{children}
	</mark>
);

export default Marked;
