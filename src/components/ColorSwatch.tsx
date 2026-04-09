'use client';

import { useState } from 'react';
import { cn } from '../lib/utils';
import { Subheadline } from './Subheadline';
import { Text } from './Text';

interface Props {
	className?: string;
	color: string;
	description?: string;
	title?: string;
}

export const ColorSwatch = ({ className, color, description, title }: Props) => {
	const [flipped, setFlipped] = useState(false);

	return (
		<div
			className={cn(
				'h-[100vw] max-h-[200px] w-full max-w-[300px] [perspective:500px]',
				description && 'cursor-pointer',
				className
			)}
			onClick={() => description && setFlipped((f) => !f)}
		>
			<div
				className="relative transition-transform duration-500 ease-in-out [transform-style:preserve-3d]"
				style={{ transform: flipped ? 'rotateY(180deg)' : undefined }}
			>
				{/* Front */}
				<div
					className="absolute box-border h-[100vw] max-h-[200px] w-full max-w-[300px] rounded-25 bg-white shadow-book block-start-0 inline-start-0 [backface-visibility:hidden] [perspective:500px] dark:border-[1px] dark:border-white/20 dark:bg-black z-10"
				>
					<div
						className="border-be-solid min-h-[5rem] bg-white border-be-[1px] border-be-black/20 rounded-bs-25 dark:bg-black dark:border-be-white/20"
						style={{ backgroundColor: color }}
					/>
					<div className="h-full min-h-[6rem] pbe-7 pbs-6 pie-6 pis-6">
						{title && (
							<Subheadline className="!text-[20px] !mbe-[8px]">{title}</Subheadline>
						)}
						<Text className="m-0 font-mono text-[16px] text-black/40 dark:text-white/40">
							{color}
						</Text>
					</div>
				</div>
				{/* Back */}
				{description && (
					<div className="absolute box-border h-[100vw] max-h-[200px] w-full max-w-[300px] rounded-25 bg-white shadow-book block-start-0 inline-start-0 [backface-visibility:hidden] [perspective:500px] dark:border-[1px] dark:border-white/20 dark:bg-black plb-7 pli-6 [transform:rotateY(180deg)]">
						<Text className="text-[15px]">{description}</Text>
					</div>
				)}
			</div>
		</div>
	);
};

export default ColorSwatch;
