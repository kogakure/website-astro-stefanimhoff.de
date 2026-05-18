import type { TableHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

type Props = TableHTMLAttributes<HTMLTableElement>;

export const Table = ({ className, children, ...props }: Props) => (
	<div className="mbe-8 overflow-x-auto">
		<table className={cn('text-3 w-full border-collapse text-start', className)} {...props}>
			{children}
		</table>
	</div>
);

export default Table;
