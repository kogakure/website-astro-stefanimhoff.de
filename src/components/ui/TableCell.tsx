import type { TdHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

type Props = TdHTMLAttributes<HTMLTableCellElement>;

export const TableCell = ({ className, children, ...props }: Props) => (
	<td className={cn('px-3 py-2 align-top', className)} {...props}>
		{children}
	</td>
);

export default TableCell;
