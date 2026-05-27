import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

type Props = HTMLAttributes<HTMLElement>;

export const Strong = ({ className, children, ...props }: Props) => (
	<strong className={cn('font-bold', className)} {...props} data-ma="Strong">
		{children}
	</strong>
);

export default Strong;
