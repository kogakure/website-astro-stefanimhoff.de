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
			'border-beni text-beni hover:bg-beni/10 mt-3 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs transition-all duration-200 active:scale-[0.97]',
			count > 0
				? 'pointer-events-auto translate-y-0 opacity-100'
				: 'pointer-events-none -translate-y-1 opacity-0',
			className
		)}
		{...props}
	>
		<XIcon weight="bold" className="h-3 w-3" aria-hidden="true" />
		{count === 1 ? 'Clear 1 filter' : `Clear ${count} filters`}
	</button>
);

export default ClearFiltersButton;
