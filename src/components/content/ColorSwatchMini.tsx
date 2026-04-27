import type { HTMLAttributes } from 'react';
import { isVeryLightColor } from '../../lib/color-contrast';
import { cn } from '../../lib/utils';

interface Props extends HTMLAttributes<HTMLSpanElement> {
	className?: string;
	color: string;
}

export const ColorSwatchMini = ({ className, color, ...props }: Props) => {
	const light = isVeryLightColor(color);

	return (
		<span
			className={cn(
				'inline-block size-4 rounded-sm align-middle',
				light && 'border-usuzumi/40 border-[1px]',
				className
			)}
			style={{ backgroundColor: color }}
			{...props}
		/>
	);
};

export default ColorSwatchMini;
