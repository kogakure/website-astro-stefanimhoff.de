import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface Props extends HTMLAttributes<HTMLUListElement> {}

export const UnorderedList = ({ className, children, ...props }: Props) => (
	<ul
		className={cn(
			'text-3 [&>li]:before:text-beni dark:[&>li]:before:text-beni-light mbe-10 md:-mis-6 [&>li]:pis-6 [&>li]:before:inline-start-0 flex list-none flex-col gap-3 [&>li]:relative [&>li]:before:absolute [&>li]:before:content-["—"]',
			className
		)}
		{...props}
		data-ma="UnorderedList"
	>
		{children}
	</ul>
);

export default UnorderedList;
