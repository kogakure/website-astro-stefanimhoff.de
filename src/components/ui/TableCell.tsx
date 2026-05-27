import type { TdHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

type Props = TdHTMLAttributes<HTMLTableCellElement>;

export const TableCell = ({ className, children, ...props }: Props) => (
	<td className={cn('pli-3 pbl-2 align-top', className)} {...props} data-ma="TableCell">
		{children}
	</td>
);

export default TableCell;
