import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

type Props = HTMLAttributes<HTMLElement>;

export const Strong = ({ className, children, ...props }: Props) => (
	<strong className={cn('font-bold', className)} {...props}>
		{children}
	</strong>
);

export default Strong;
