'use client';

import { useState } from 'react';
import { cn } from '../../lib/utils';
import { Subheadline } from '../ui/Subheadline';
import { Text } from '../ui/Text';

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
				<div className="rounded-25 shadow-book block-start-0 inline-start-0 absolute z-10 box-border h-[100vw] max-h-[200px] w-full max-w-[300px] bg-white [backface-visibility:hidden] [perspective:500px] dark:border-[1px] dark:border-white/20 dark:bg-black">
					<div
						className="border-be-solid border-be-[1px] border-be-black/20 rounded-bs-25 dark:border-be-white/20 min-h-[5rem] bg-white dark:bg-black"
						style={{ backgroundColor: color }}
					/>
					<div className="pbe-7 pbs-6 pie-6 pis-6 h-full min-h-[6rem]">
						{title && (
							<Subheadline className="!mbe-[8px] !text-[20px]">{title}</Subheadline>
						)}
						<Text className="m-0 font-mono text-[16px] text-black/40 dark:text-white/40">
							{color}
						</Text>
					</div>
				</div>
				{/* Back */}
				{description && (
					<div className="rounded-25 shadow-book block-start-0 inline-start-0 plb-7 pli-6 absolute box-border h-[100vw] max-h-[200px] w-full max-w-[300px] bg-white [backface-visibility:hidden] [perspective:500px] [transform:rotateY(180deg)] dark:border-[1px] dark:border-white/20 dark:bg-black">
						<Text className="text-[15px]">{description}</Text>
					</div>
				)}
			</div>
		</div>
	);
};

export default ColorSwatch;
