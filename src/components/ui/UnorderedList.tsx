import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface Props extends HTMLAttributes<HTMLUListElement> {}

export const UnorderedList = ({ className, children, ...props }: Props) => (
	<ul
		className={cn(
			'list-square text-3 mbe-12 pis-[1.5rem] md:pis-0 [li>&]:mbe-0 [li>&]:pis-[1.5rem]',
			className
		)}
		{...props}
	>
		{children}
	</ul>
);

export default UnorderedList;
