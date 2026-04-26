import type { ThHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

type Props = ThHTMLAttributes<HTMLTableCellElement>;

export const TableHeaderCell = ({ className, children, ...props }: Props) => (
	<th className={cn('px-3 py-2 text-start font-bold', className)} {...props}>
		{children}
	</th>
);

export default TableHeaderCell;
