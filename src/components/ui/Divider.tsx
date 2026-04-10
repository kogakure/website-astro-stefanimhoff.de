import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface Props extends HTMLAttributes<HTMLHRElement> {}

export const Divider = ({ className, ...props }: Props) => (
	<hr
		className={cn(
			'mbe-14 mbs-14 border-be-1 border-bs-0 border-ie-0 border-is-0 border-solid border-black/[0.1] dark:border-white/[0.1]',
			className
		)}
		{...props}
	/>
);

export default Divider;
