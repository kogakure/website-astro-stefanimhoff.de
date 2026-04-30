import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface Props extends HTMLAttributes<HTMLUListElement> {}

export const UnorderedList = ({ className, children, ...props }: Props) => (
	<ul
		className={cn(
			'text-3 [&>li]:before:text-beni mbe-10 flex list-none flex-col gap-3 md:-ml-6 [&>li]:relative [&>li]:pl-6 [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:content-["—"]',
			className
		)}
		{...props}
	>
		{children}
	</ul>
);

export default UnorderedList;
