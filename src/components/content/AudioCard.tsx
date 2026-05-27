import { HeadphonesIcon, MicrophoneIcon } from '@phosphor-icons/react';
import { cn } from '../../lib/utils';
import { Badge } from '../ui/Badge';
import { Link } from '../ui/Link';
import { Text } from '../ui/Text';
import { MediaLinkRow } from './MediaLinkRow';

interface MediaLink {
	kind: 'apple' | 'spotify' | 'amazon' | 'youtube' | 'web';
	url: string;
	label?: string;
}

interface Props {
	author?: string;
	className?: string;
	cover?: string;
	description?: string;
	featured?: boolean;
	kind: 'audiobook' | 'podcast';
	language?: string;
	links?: MediaLink[];
	moderator?: string;
	paid?: boolean;
	subtitle?: string;
	title: string;
}

export const AudioCard = ({
	author,
	className,
	cover,
	description,
	featured,
	kind,
	language,
	links,
	moderator,
	paid,
	subtitle,
	title,
}: Props) => {
	const contributor = kind === 'podcast' ? moderator : author;
	const PlaceholderIcon = kind === 'podcast' ? MicrophoneIcon : HeadphonesIcon;
	const primaryLink = links?.[0]?.url;

	const coverEl = cover ? (
		<img alt={title} className="h-full w-full object-cover" loading="lazy" src={cover} />
	) : (
		<div className="text-usuzumi dark:text-nezumi flex h-full w-full items-center justify-center">
			<PlaceholderIcon aria-hidden size={48} />
		</div>
	);

	return (
		<div
			className={cn(
				'rounded-4 bg-card duration-moderate ease-standard flex w-full flex-col overflow-hidden border border-black/5 shadow-sm transition-shadow hover:shadow-md dark:border-white/5',
				className
			)}
			tabIndex={0}
			data-ma="AudioCard"
		>
			<div className="bg-muted aspect-square overflow-hidden">
				{primaryLink ? (
					<Link href={primaryLink} aria-label={title} className="block h-full w-full">
						{coverEl}
					</Link>
				) : (
					coverEl
				)}
			</div>

			<div className="flex flex-col gap-1 p-3">
				<div>
					<Text className="text-2 mbe-0 font-medium leading-snug">{title}</Text>
					{subtitle && (
						<Text className="text-1 text-muted-foreground mbe-0 leading-snug">
							{subtitle}
						</Text>
					)}
					{contributor && <Text className="text-2 text-nezumi mbe-0">{contributor}</Text>}
				</div>

				{description && (
					<Text className="text-1 text-muted-foreground mbe-0 line-clamp-3">
						{description}
					</Text>
				)}

				{(featured || paid || language) && (
					<div className="flex flex-wrap gap-1">
						{featured && <Badge variant="favorite">Favorite</Badge>}
						{paid && <Badge variant="paid">Paid</Badge>}
						{language && <Badge variant="language">{language.toUpperCase()}</Badge>}
					</div>
				)}

				{links && links.length > 0 && <MediaLinkRow links={links} />}
			</div>
		</div>
	);
};

export default AudioCard;
