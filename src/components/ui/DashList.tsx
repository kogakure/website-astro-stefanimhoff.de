import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface Props extends HTMLAttributes<HTMLUListElement> {}

export const DashList = ({ className, children, ...props }: Props) => (
	<ul className={cn('flex flex-col gap-1 pl-[1.25em] md:pl-0', className)} {...props}>
		{children}
	</ul>
);

export default DashList;
