import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

type Props = HTMLAttributes<HTMLElement>;

export const Strikethrough = ({ className, children, ...props }: Props) => (
	<del
		className={cn(
			'text-nezumi decoration-nezumi/60 dark:text-usuzumi dark:decoration-usuzumi/60 line-through',
			className
		)}
		{...props}
	>
		{children}
	</del>
);

export default Strikethrough;
