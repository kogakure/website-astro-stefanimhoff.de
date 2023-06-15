import { sortByAlphabet, sortByDate } from '.';

import type { CollectionEntry } from 'astro:content';

export const formatPosts = (
	posts: CollectionEntry<'journal'>[],
	{
		removeDrafts = true,
		removeFuture = false,
		showFeatured,
		sortBy = 'date',
		sortOrder = 'desc',
		limit,
	}: {
		removeDrafts?: boolean;
		removeFuture?: boolean;
		showFeatured?: boolean;
		sortBy?: 'date' | 'alphabet' | 'random';
		sortOrder?: 'asc' | 'desc';
		limit?: number;
	}
): CollectionEntry<'journal'>[] => {
	const filteredPosts = posts.reduce((acc: CollectionEntry<'journal'>[], post) => {
		const { date, draft, featured } = post.data;

		// Remove draft content
		if (removeDrafts && draft) return acc;

		// Remove future content
		if (removeFuture && new Date(date) > new Date()) return acc;

		// Show featured only
		if (showFeatured && !featured) return acc;

		acc.push(post);

		return acc;
	}, []);

	// Sort posts
	if (sortBy === 'date') {
		filteredPosts.sort(sortByDate);
	} else if (sortBy === 'alphabet') {
		filteredPosts.sort(sortByAlphabet);
	} else {
		filteredPosts.sort(() => Math.random() - 0.5);
	}

	// Sort order
	if (sortOrder === 'asc') {
		filteredPosts.reverse();
	}

	// Limit number of posts
	if (typeof limit === 'number') {
		return filteredPosts.slice(0, limit);
	}

	return filteredPosts;
};
