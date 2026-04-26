import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

type Props = HTMLAttributes<HTMLElement>;

export const Strikethrough = ({ className, children, ...props }: Props) => (
	<del className={cn('line-through opacity-70', className)} {...props}>
		{children}
	</del>
);

export default Strikethrough;
