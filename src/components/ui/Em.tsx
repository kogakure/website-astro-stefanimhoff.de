import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

type Props = HTMLAttributes<HTMLElement>;

export const Em = ({ className, children, ...props }: Props) => (
	<em className={cn('italic', className)} {...props}>
		{children}
	</em>
);

export default Em;
