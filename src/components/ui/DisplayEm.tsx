import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

type Props = HTMLAttributes<HTMLElement>;

export const DisplayEm = ({ className, children, ...props }: Props) => (
	<em className={cn('font-display font-normal', className)} {...props} data-ma="DisplayEm">
		{children}
	</em>
);

export default DisplayEm;
