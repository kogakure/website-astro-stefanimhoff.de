import { XIcon } from '@phosphor-icons/react';
import type { ButtonHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	count: number;
}

export const ClearFiltersButton = ({ count, className, ...props }: Props) => (
	<button
		type="button"
		aria-label="Clear all active tag filters"
		className={cn(
			'border-beni dark:border-beni-light text-beni dark:text-beni-light hover:bg-beni/10 dark:hover:bg-beni-light/10 mbs-3 pli-[0.625rem] pbl-[0.125rem] inline-flex items-center gap-1.5 rounded-full border text-xs transition-all duration-200 active:scale-[0.97]',
			count > 0
				? 'pointer-events-auto translate-y-0 opacity-100'
				: 'pointer-events-none -translate-y-1 opacity-0',
			className
		)}
		{...props}
	>
		<XIcon weight="bold" className="size-3" aria-hidden="true" />
		{count === 1 ? 'Clear 1 filter' : `Clear ${count} filters`}
	</button>
);

export default ClearFiltersButton;
