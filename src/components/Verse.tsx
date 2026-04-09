import type { BlockquoteHTMLAttributes } from 'react';
import { cn } from '../lib/utils';

interface Props extends BlockquoteHTMLAttributes<HTMLQuoteElement> {
	variant?: 'center' | 'left';
}

export const Verse = ({ className, variant = 'center', children, ...props }: Props) => (
	<blockquote
		className={cn(
			'flex italic [&_p]:mbe-0',
			variant === 'center' && 'm-10',
			variant === 'left' && 'mbe-10 mbs-10 mie-0 mis-0',
			className
		)}
		{...props}
	>
		<pre
			className={cn(
				'whitespace-pre font-sans mie-0 mis-0',
				variant === 'center' && 'mbe-auto mbs-auto'
			)}
		>
			{children}
		</pre>
	</blockquote>
);

export default Verse;
