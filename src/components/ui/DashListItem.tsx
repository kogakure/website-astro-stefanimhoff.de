import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface Props extends HTMLAttributes<HTMLLIElement> {}

export const DashListItem = ({ className, children, ...props }: Props) => (
	<li className={cn('[text-indent:-1.25em]', className)} {...props}>
		{children}
	</li>
);

export default DashListItem;
