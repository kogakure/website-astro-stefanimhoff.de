import type { OlHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface Props extends OlHTMLAttributes<HTMLOListElement> {}

export const OrderedList = ({ className, children, ...props }: Props) => (
	<ol
		className={cn(
			'text-3 marker:text-beni dark:marker:text-beni-light mbe-10 md:pis-0 flex list-decimal flex-col gap-3 ps-[1.25em]',
			className
		)}
		{...props}
	>
		{children}
	</ol>
);

export default OrderedList;
