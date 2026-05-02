import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

type Props = HTMLAttributes<HTMLElement>;

export const Inserted = ({ className, children, ...props }: Props) => (
	<ins
		className={cn(
			'decoration-beni dark:decoration-beni-light text-sumi dark:text-washi underline underline-offset-[0.2em]',
			className
		)}
		{...props}
	>
		{children}
	</ins>
);

export default Inserted;
