import type { HTMLAttributes } from 'react';
import { cn } from '../lib/utils';

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const DisplayBox = ({ className, children, ...props }: Props) => (
	<div className={cn('[&_img]:bg-gray-100 [&_img]:p-10', className)} {...props}>
		{children}
	</div>
);

export default DisplayBox;
