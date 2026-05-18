import type { HTMLAttributes } from 'react';
import { getContrastColor, isVeryLightColor } from '../../lib/color-contrast';
import { cn } from '../../lib/utils';

interface Props extends HTMLAttributes<HTMLElement> {
	className?: string;
	color: string;
	description?: string;
	kanji?: string;
	name?: string;
	title?: string;
}

export const ColorSwatch = ({
	className,
	color,
	description,
	kanji,
	name,
	title,
	...props
}: Props) => {
	const label = name ?? title;
	const light = isVeryLightColor(color);
	const contrastColor = getContrastColor(color);

	return (
		<div className={cn('w-full', className)} {...props}>
			{/* Color field */}
			<div
				className={cn(
					'rounded-bs-2 aspect-4/3 w-full',
					light && 'border-usuzumi/40 border-1'
				)}
				style={{ backgroundColor: color }}
			>
				{kanji && (
					<span
						className="flex h-full items-end justify-end p-2 font-serif text-[1.25rem] opacity-60"
						style={{
							color:
								contrastColor === 'dark'
									? 'var(--color-sumi)'
									: 'var(--color-washi)',
						}}
					>
						{kanji}
					</span>
				)}
			</div>

			{/* Info area */}
			<div className="pbs-3">
				{label && (
					<div className="flex items-baseline justify-between gap-2">
						<span className="text-3 text-sumi dark:text-washi truncate font-medium">
							{label}
							{kanji && (
								<span className="mie-0 mis-2 text-nezumi font-normal">{kanji}</span>
							)}
						</span>
					</div>
				)}
				<p className="text-2 text-nezumi font-mono">{color}</p>
				{description && (
					<p className="text-2 mbs-1 text-nezumi overflow-hidden [-webkit-box-orient:vertical] [-webkit-line-clamp:2] [display:-webkit-box]">
						{description}
					</p>
				)}
			</div>
		</div>
	);
};

export default ColorSwatch;
