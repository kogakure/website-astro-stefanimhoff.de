import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

type Props = HTMLAttributes<HTMLElement>;

export const FootnoteSection = ({ className, children, ...props }: Props) => (
	<section
		className={cn(
			'text-2 mbs-12 pbs-6 border-bs-1 border-black/10 dark:border-white/10',
			className
		)}
		{...props}
	>
		{children}
	</section>
);

export default FootnoteSection;
