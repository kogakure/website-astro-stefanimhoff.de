import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

type Variant = 'default' | 'favorite' | 'paid' | 'language';

interface Props extends HTMLAttributes<HTMLSpanElement> {
	variant?: Variant;
}

const variantClasses: Record<Variant, string> = {
	default: 'bg-kiri text-sumi border-usuzumi dark:bg-sumi dark:text-washi dark:border-nezumi',
	favorite:
		'bg-beni-pale text-beni border-beni/25 dark:bg-beni-light/15 dark:text-beni-light dark:border-beni-light/30',
	paid: 'bg-kiri text-nezumi border-usuzumi dark:bg-sumi dark:text-usuzumi dark:border-nezumi',
	language:
		'bg-kiri text-nezumi border-usuzumi dark:bg-sumi dark:text-usuzumi dark:border-nezumi',
};

export const Badge = ({ variant = 'default', className, children, ...props }: Props) => (
	<span
		className={cn(
			'rounded-25 text-1 pli-2 pbl-px2 inline-flex items-center border font-medium uppercase leading-none',
			variantClasses[variant],
			className
		)}
		{...props}
		data-ma="Badge"
	>
		{children}
	</span>
);

export default Badge;
