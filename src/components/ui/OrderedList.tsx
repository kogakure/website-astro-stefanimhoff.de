import type { OlHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface Props extends OlHTMLAttributes<HTMLOListElement> {}

export const OrderedList = ({ className, children, ...props }: Props) => (
	<ol
		className={cn(
			'text-3 marker:text-beni flex list-decimal flex-col gap-1 pl-[1.25em] md:pl-0',
			className
		)}
		{...props}
	>
		{children}
	</ol>
);

export default OrderedList;
