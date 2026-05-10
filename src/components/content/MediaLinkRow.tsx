import {
	AmazonLogoIcon,
	ApplePodcastsLogoIcon,
	InstagramLogoIcon,
	LinkSimpleIcon,
	PatreonLogoIcon,
	SpotifyLogoIcon,
	YoutubeLogoIcon,
} from '@phosphor-icons/react';
import { cn } from '../../lib/utils';
import { Link } from '../ui/Link';

interface MediaLink {
	kind: 'apple' | 'spotify' | 'amazon' | 'youtube' | 'web' | 'instagram' | 'patreon';
	url?: string | null;
	label?: string;
}

interface Props {
	className?: string;
	links: MediaLink[];
}

const iconMap = {
	apple: ApplePodcastsLogoIcon,
	spotify: SpotifyLogoIcon,
	amazon: AmazonLogoIcon,
	youtube: YoutubeLogoIcon,
	web: LinkSimpleIcon,
	instagram: InstagramLogoIcon,
	patreon: PatreonLogoIcon,
};

const labelMap: Record<string, string> = {
	apple: 'Apple Podcasts',
	spotify: 'Spotify',
	amazon: 'Amazon',
	youtube: 'YouTube',
	web: 'Website',
	instagram: 'Instagram',
	patreon: 'Patreon',
};

export const MediaLinkRow = ({ className, links }: Props) => {
	const activeLinks = links.filter((l) => l.url);
	if (!activeLinks || activeLinks.length === 0) return null;

	return (
		<div className={cn('flex flex-wrap gap-2', className)}>
			{activeLinks.map((link, i) => {
				const Icon = iconMap[link.kind];
				const ariaLabel = link.label ?? labelMap[link.kind];
				return (
					<Link
						key={i}
						href={link.url!}
						aria-label={ariaLabel}
						className="text-hai hover:text-beni dark:hover:text-beni-light transition-colors duration-150"
					>
						<Icon size={20} aria-hidden />
					</Link>
				);
			})}
		</div>
	);
};

export default MediaLinkRow;
