import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

type Props = HTMLAttributes<HTMLTableRowElement>;

export const TableRow = ({ className, children, ...props }: Props) => (
	<tr className={cn('border-be-1 border-black/8 dark:border-white/8', className)} {...props}>
		{children}
	</tr>
);

export default TableRow;
