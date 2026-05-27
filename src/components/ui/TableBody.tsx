import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

type Props = HTMLAttributes<HTMLTableSectionElement>;

export const TableBody = ({ className, children, ...props }: Props) => (
	<tbody className={cn(className)} {...props} data-ma="TableBody">
		{children}
	</tbody>
);

export default TableBody;
