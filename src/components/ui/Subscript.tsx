import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

type Props = HTMLAttributes<HTMLElement>;

export const Subscript = ({ className, children, ...props }: Props) => (
	<sub className={cn('align-sub text-[0.75em]', className)} {...props}>
		{children}
	</sub>
);

export default Subscript;
