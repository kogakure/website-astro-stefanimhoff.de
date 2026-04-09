import type { ElementType, HTMLAttributes } from 'react';
import { cn } from '../lib/utils';

interface Props extends HTMLAttributes<HTMLElement> {
	as?: ElementType;
}

export const Text = ({ as: Tag = 'p', className, children, ...props }: Props) => (
	<Tag
		className={cn('text-3 font-normal tracking-normal mbe-10 mbs-0 dark:font-light', className)}
		{...props}
	>
		{children}
	</Tag>
);

export default Text;
