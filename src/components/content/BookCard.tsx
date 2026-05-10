import { BookOpenIcon } from '@phosphor-icons/react';
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
	asin?: string;
	author?: string;
	className?: string;
	cover?: string;
	description?: string;
	featured?: boolean;
	language?: string;
	links?: MediaLink[];
	paid?: boolean;
	subtitle?: string;
	title: string;
}

export const BookCard = ({
	asin,
	author,
	className,
	cover,
	description,
	featured,
	language,
	links,
	paid,
	subtitle,
	title,
}: Props) => {
	const coverSrc =
		cover ??
		(asin ? `https://images-na.ssl-images-amazon.com/images/P/${asin}.01.LZZZZZZZ.jpg` : null);
	const primaryLink =
		links?.[0]?.url ?? (asin ? `https://www.amazon.de/gp/product/${asin}` : undefined);

	const coverEl = coverSrc ? (
		<img alt={title} className="h-full w-full object-cover" loading="lazy" src={coverSrc} />
	) : (
		<div className="text-usuzumi dark:text-nezumi flex h-full w-full items-center justify-center">
			<BookOpenIcon aria-hidden size={48} />
		</div>
	);

	return (
		<div
			className={cn(
				'rounded-4 bg-card flex w-full flex-col overflow-hidden border border-black/5 shadow-sm transition-shadow duration-300 ease-in-out hover:shadow-md dark:border-white/5',
				className
			)}
			tabIndex={0}
		>
			<div className="bg-muted aspect-[2/3] overflow-hidden">
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
					{author && <Text className="text-2 text-hai mbe-0">{author}</Text>}
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

export default BookCard;
