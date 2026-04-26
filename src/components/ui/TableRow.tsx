import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

type Props = HTMLAttributes<HTMLTableRowElement>;

export const TableRow = ({ className, children, ...props }: Props) => (
	<tr
		className={cn('border-be-1 border-black/[0.08] dark:border-white/[0.08]', className)}
		{...props}
	>
		{children}
	</tr>
);

export default TableRow;
