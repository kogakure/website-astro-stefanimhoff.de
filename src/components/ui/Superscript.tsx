import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

type Props = HTMLAttributes<HTMLElement>;

export const Superscript = ({ className, children, ...props }: Props) => (
	<sup className={cn('align-super text-[0.75em]', className)} {...props}>
		{children}
	</sup>
);

export default Superscript;
