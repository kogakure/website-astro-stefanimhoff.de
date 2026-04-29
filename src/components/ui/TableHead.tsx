import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

type Props = HTMLAttributes<HTMLTableSectionElement>;

export const TableHead = ({ className, children, ...props }: Props) => (
	<thead className={cn('border-be-2 border-black/15 dark:border-white/15', className)} {...props}>
		{children}
	</thead>
);

export default TableHead;
