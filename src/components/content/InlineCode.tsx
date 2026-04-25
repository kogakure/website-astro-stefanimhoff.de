import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

type Props = HTMLAttributes<HTMLElement>;

export const InlineCode = ({ className, children, ...props }: Props) => (
	<code
		className={cn(
			'relative inline whitespace-normal rounded-[0.3em] not-italic',
			'text-code font-mono',
			'bg-kiri text-sumi border-nezumi/30 border',
			'dark:bg-code-1 dark:text-code-2 dark:border-white/10',
			'px-[0.4em] py-[0.15em]',
			className
		)}
		{...props}
	>
		{children}
	</code>
);

export default InlineCode;
