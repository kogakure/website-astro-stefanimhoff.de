import { BookOpenIcon, HeadphonesIcon, MicrophoneIcon, VideoIcon } from '@phosphor-icons/react';
import React from 'react';

import { cn } from '../../lib/utils';
import type { RoadmapMilestoneData } from '../../utils/resolve-roadmap';
import { Badge } from '../ui/Badge';
import { Link } from '../ui/Link';

const kindLabel: Record<RoadmapMilestoneData['kind'], string> = {
	audiobook: 'Audiobook',
	book: 'Book',
	podcast: 'Podcast',
	video: 'Video',
};

const kindIcon: Record<RoadmapMilestoneData['kind'], React.ElementType> = {
	audiobook: HeadphonesIcon,
	book: BookOpenIcon,
	podcast: MicrophoneIcon,
	video: VideoIcon,
};

interface Props extends RoadmapMilestoneData {
	index: number;
	isLast: boolean;
}

export const RoadmapMilestone = ({
	contributor,
	cover,
	featured,
	href,
	index,
	isLast,
	kind,
	language,
	note,
	title,
}: Props) => {
	const ordinal = String(index + 1).padStart(2, '0');
	const Icon = kindIcon[kind];

	return (
		<li className="relative flex items-stretch" data-ma="RoadmapMilestone">
			{/* Rail dot column — decorative */}
			<div aria-hidden className="flex w-5 shrink-0 flex-col items-center">
				<div
					className={cn('w-px flex-1', index > 0 ? 'bg-hai dark:bg-nezumi' : 'invisible')}
				/>
				<span className="bg-beni dark:bg-beni-light block size-2.5 shrink-0 rounded-full" />
				<div
					className={cn('w-px flex-1', !isLast ? 'bg-hai dark:bg-nezumi' : 'invisible')}
				/>
			</div>

			{/* Row content — full row is the link */}
			<Link
				aria-label={`${ordinal}. ${title}`}
				className={cn(
					'rounded-2 pli-3 pbl-3 group flex flex-1 items-start gap-4',
					'transition-colors duration-200',
					'hover:bg-kiri dark:hover:bg-sumi/60'
				)}
				href={href}
			>
				{/* Thumbnail */}
				<div className="bg-muted rounded-2 size-16 shrink-0 overflow-hidden">
					{cover ? (
						<img
							alt=""
							aria-hidden
							className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
							loading="lazy"
							src={cover}
						/>
					) : (
						<div className="text-usuzumi dark:text-nezumi flex h-full w-full items-center justify-center">
							<Icon aria-hidden size={24} />
						</div>
					)}
				</div>

				{/* Text */}
				<div className="flex min-w-0 flex-1 flex-col gap-1">
					<div className="flex flex-wrap items-baseline gap-1.5">
						<span className="text-2 text-hai dark:text-nezumi tabular-nums">
							{ordinal}.
						</span>
						<span className="text-sumi dark:text-washi text-2 font-medium leading-snug">
							{title}
						</span>
					</div>

					{contributor && (
						<span className="text-2 text-hai dark:text-nezumi">{contributor}</span>
					)}

					<div className="flex flex-wrap items-center gap-2">
						<span className="text-1 text-hai dark:text-nezumi uppercase tracking-wider">
							{kindLabel[kind]}
						</span>
						{language && <Badge variant="language">{language.toUpperCase()}</Badge>}
						{featured && <Badge variant="favorite">Favorite</Badge>}
					</div>

					{note && (
						<p className="text-2 text-muted-foreground mbe-0 mbs-px2 italic">{note}</p>
					)}
				</div>
			</Link>
		</li>
	);
};

export default RoadmapMilestone;
