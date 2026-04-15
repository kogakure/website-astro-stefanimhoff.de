import type { LiHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface Props extends LiHTMLAttributes<HTMLLIElement> {}

export const ListItem = ({ className, children, ...props }: Props) => (
	<li className={cn(className)} {...props}>
		{children}
	</li>
);

export default ListItem;
