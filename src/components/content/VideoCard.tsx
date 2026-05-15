import {
	FilmReelIcon,
	PlayCircleIcon,
	TelevisionSimpleIcon,
	VideoIcon,
} from '@phosphor-icons/react';
import { cn } from '../../lib/utils';
import { Badge } from '../ui/Badge';
import { Link } from '../ui/Link';
import { Text } from '../ui/Text';

interface Props {
	channel?: string;
	className?: string;
	cover?: string;
	description?: string;
	featured?: boolean;
	kind?: 'video' | 'playlist' | 'channel';
	language?: string;
	title: string;
	url: string;
	youtubeId?: string;
}

const kindLabel: Record<string, string> = {
	playlist: 'Playlist',
	channel: 'Channel',
};

const kindIcon: Record<string, React.ElementType> = {
	playlist: FilmReelIcon,
	channel: TelevisionSimpleIcon,
};

export const VideoCard = ({
	channel,
	className,
	cover,
	description,
	featured,
	kind = 'video',
	language,
	title,
	url,
	youtubeId,
}: Props) => {
	const thumbnailSrc = youtubeId
		? `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`
		: (cover ?? null);

	const KindIcon = kindIcon[kind] ?? VideoIcon;

	return (
		<Link
			href={url}
			aria-label={title}
			className={cn(
				'rounded-4 group block overflow-hidden border border-black/5 shadow-sm transition-shadow duration-300 ease-in-out hover:shadow-md dark:border-white/5',
				className
			)}
		>
			<div className="bg-muted relative aspect-video overflow-hidden">
				{thumbnailSrc ? (
					<img
						alt={title}
						className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
						loading="lazy"
						src={thumbnailSrc}
					/>
				) : (
					<div className="text-usuzumi dark:text-nezumi flex h-full w-full items-center justify-center">
						<KindIcon aria-hidden size={48} />
					</div>
				)}
				<div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors duration-200 group-hover:bg-black/30">
					<PlayCircleIcon
						aria-hidden
						className="text-white drop-shadow-md"
						size={48}
						weight="fill"
					/>
				</div>
				{kind !== 'video' && (
					<div className="inline-end-2 block-start-2 absolute">
						<Badge>{kindLabel[kind]}</Badge>
					</div>
				)}
			</div>

			<div className="flex flex-col gap-1 p-3">
				<Text className="text-2 mbe-0 line-clamp-2 font-medium">{title}</Text>
				{channel && <Text className="text-2 text-nezumi mbe-0">{channel}</Text>}
				{(language || featured) && (
					<div className="flex flex-wrap items-center gap-1">
						{featured && <Badge variant="favorite">Favorite</Badge>}
						{language && <Badge variant="language">{language.toUpperCase()}</Badge>}
					</div>
				)}
				{description && (
					<Text className="text-muted-foreground mbe-0 line-clamp-2 text-xs">
						{description}
					</Text>
				)}
			</div>
		</Link>
	);
};

export default VideoCard;
