import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface Props extends HTMLAttributes<HTMLDivElement> {
	kanji: string;
	romaji: string;
	japanese: string;
	gloss: string;
	principle: string;
}

export const PrincipleCard = ({
	kanji,
	romaji,
	japanese,
	gloss,
	principle,
	className,
	...props
}: Props) => (
	<div
		className={cn(
			'bg-kiri dark:bg-sumi rounded-2 flex flex-col justify-between gap-6 p-6',
			className
		)}
		{...props}
	>
		<div className="flex items-start justify-between gap-4">
			<span
				className="font-japanese text-usuzumi dark:text-nezumi leading-none"
				style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}
				aria-hidden="true"
			>
				{kanji}
			</span>
			<span className="text-hai text-2 font-mono uppercase tracking-wider">{principle}</span>
		</div>
		<div>
			<p className="text-sumi dark:text-washi mbe-1 font-bold">
				{romaji} <span className="font-japanese text-nezumi font-normal">{japanese}</span>
			</p>
			<p className="text-hai text-2 mbe-0">{gloss}</p>
		</div>
	</div>
);

export default PrincipleCard;
