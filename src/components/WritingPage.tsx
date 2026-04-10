'use client';

import { useState, useEffect, useCallback } from 'react';
import { Funnel } from '@phosphor-icons/react';
import Tag from './Tag';
import WritingList, { type PostItem } from './WritingList';

interface Props {
	allTags: string[];
	posts: (PostItem & { tags: string[] })[];
}

export const WritingPage = ({ allTags, posts }: Props) => {
	const [selectedTags, setSelectedTags] = useState<string[]>(() => {
		if (typeof window !== 'undefined') {
			const params = new URLSearchParams(window.location.search);
			const tag = params.get('tag');
			return tag ? tag.split(',').filter(Boolean) : [];
		}
		return [];
	});

	const updateUrl = useCallback((tags: string[]) => {
		const url = new URL(window.location.href);
		if (tags.length > 0) {
			url.searchParams.set('tag', tags.join(','));
		} else {
			url.searchParams.delete('tag');
		}
		window.history.replaceState({}, '', url.toString());
	}, []);

	const toggleTag = (tag: string) => {
		setSelectedTags((prev) => {
			const next = prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag];
			updateUrl(next);
			return next;
		});
	};

	const clearFilters = () => {
		setSelectedTags([]);
		updateUrl([]);
	};

	useEffect(() => {
		const params = new URLSearchParams(window.location.search);
		const tag = params.get('tag');
		if (tag) {
			setSelectedTags(tag.split(',').filter(Boolean));
		}
	}, []);

	const filteredPosts =
		selectedTags.length > 0
			? posts.filter((post) => selectedTags.every((tag) => post.tags.includes(tag)))
			: posts;

	return (
		<>
			<aside
				aria-label="Filter by tags"
				className="col-start-1 col-end-18 flex flex-wrap items-center gap-y-3"
				data-pagefind-ignore
			>
				<span className="mie-3 flex items-center gap-1 text-2 text-shibui-500 dark:text-shibui-400">
					<Funnel className="h-3 w-3" aria-hidden="true" />
					Filter
				</span>
				{allTags.map((tag) => (
					<Tag
						key={tag}
						active={selectedTags.includes(tag)}
						onClick={() => toggleTag(tag)}
					>
						{tag}
					</Tag>
				))}
				{selectedTags.length > 0 && (
					<button
						type="button"
						onClick={clearFilters}
						className="mis-2 text-2 text-shibui-500 underline hover:text-shibui-950 dark:text-shibui-400 dark:hover:text-shibui-100"
					>
						Clear
					</button>
				)}
			</aside>
			<nav className="col-start-1 col-end-18" aria-label="Writing">
				{filteredPosts.length > 0 ? (
					<WritingList entries={filteredPosts} />
				) : (
					<p className="text-3 text-shibui-500 dark:text-shibui-400">
						No posts found for the selected tags.
					</p>
				)}
			</nav>
		</>
	);
};

export default WritingPage;
