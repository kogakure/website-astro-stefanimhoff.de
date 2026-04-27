import type { HTMLAttributes } from 'react';
import { getContrastColor, isVeryLightColor } from '../../lib/color-contrast';
import { cn } from '../../lib/utils';

interface Props extends HTMLAttributes<HTMLElement> {
	className?: string;
	color: string;
	description?: string;
	hiragana?: string;
	kanji?: string;
	name?: string;
}

export const ColorSwatchPrimary = ({
	className,
	color,
	description,
	hiragana,
	kanji,
	name,
	...props
}: Props) => {
	const light = isVeryLightColor(color);
	const contrastColor = getContrastColor(color);
	const textColor = contrastColor === 'dark' ? 'var(--color-sumi)' : 'var(--color-washi)';

	return (
		<div className={cn('w-full', className)} {...props}>
			{/* Color field with centered kanji */}
			<div
				className={cn(
					'rounded-bs-2 relative flex aspect-[3/2] w-full items-center justify-center',
					light && 'border-usuzumi/40 border-[1px] border-b-0'
				)}
				style={{ backgroundColor: color }}
			>
				{kanji && (
					<span
						className="px-4 text-center font-sans text-[1.25rem] leading-snug"
						style={{ color: textColor }}
					>
						{kanji}
					</span>
				)}
			</div>

			{/* Info area */}
			<div className="pbs-3">
				{name && (
					<span className="text-3 text-sumi dark:text-washi block truncate font-semibold">
						{name}
					</span>
				)}
				<span className="text-2 text-hai font-mono">{color}</span>

				{description && (
					<p className="text-2 mbs-1 text-hai overflow-hidden [-webkit-box-orient:vertical] [-webkit-line-clamp:2] [display:-webkit-box]">
						{description}
					</p>
				)}
			</div>
		</div>
	);
};

export default ColorSwatchPrimary;
