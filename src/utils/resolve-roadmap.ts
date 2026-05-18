import type { CollectionEntry } from 'astro:content';

import type { RoadmapEntry } from '../data/roadmap-libertarianism';

export interface RoadmapMilestoneData {
	kind: 'book' | 'audiobook' | 'podcast' | 'video';
	title: string;
	contributor?: string;
	cover?: string;
	href: string;
	note: string;
	language?: string;
	featured?: boolean;
}

type Collections = {
	books: CollectionEntry<'books'>[];
	audiobooks: CollectionEntry<'audiobooks'>[];
	podcasts: CollectionEntry<'podcasts'>[];
	videos: CollectionEntry<'videos'>[];
};

const collectionKey = (type: RoadmapEntry['type']): keyof Collections =>
	`${type}s` as keyof Collections;

export function resolveRoadmap(
	entries: RoadmapEntry[],
	collections: Collections
): RoadmapMilestoneData[] {
	return entries.flatMap((entry) => {
		const key = collectionKey(entry.type);
		const found = collections[key].find((e) => e.id.endsWith(`/${entry.slug}`));
		if (!found) return [];

		let href = '';
		let contributor: string | undefined;
		let cover: string | undefined;

		if (entry.type === 'video') {
			const d = found.data as CollectionEntry<'videos'>['data'];
			href = d.url ?? '';
			contributor = d.channel;
			cover = d.youtubeId ? `https://i.ytimg.com/vi/${d.youtubeId}/hqdefault.jpg` : d.cover;
		} else if (entry.type === 'book') {
			const d = found.data as CollectionEntry<'books'>['data'];
			href =
				d.links?.[0]?.url ?? (d.asin ? `https://www.amazon.de/gp/product/${d.asin}` : '');
			contributor = d.author;
			cover =
				d.cover ??
				(d.asin
					? `https://images-na.ssl-images-amazon.com/images/P/${d.asin}.01.LZZZZZZZ.jpg`
					: undefined);
		} else if (entry.type === 'audiobook') {
			const d = found.data as CollectionEntry<'audiobooks'>['data'];
			href = d.links?.[0]?.url ?? '';
			contributor = d.author;
			cover = d.cover;
		} else {
			const d = found.data as CollectionEntry<'podcasts'>['data'];
			href = d.links?.[0]?.url ?? '';
			contributor = d.moderator;
			cover = d.cover;
		}

		if (!href) return [];

		return [
			{
				kind: entry.type,
				title: found.data.title,
				contributor,
				cover,
				href,
				note: entry.note,
				language: found.data.language,
				featured: found.data.featured,
			},
		];
	});
}
