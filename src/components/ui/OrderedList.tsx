import type { OlHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface Props extends OlHTMLAttributes<HTMLOListElement> {}

export const OrderedList = ({ className, children, ...props }: Props) => (
	<ol
		className={cn(
			'text-3 mbe-12 pis-[1.5rem] md:pis-0 [li>&]:mbe-0 [li>&]:pis-[1.5rem] list-decimal',
			className
		)}
		{...props}
	>
		{children}
	</ol>
);

export default OrderedList;
