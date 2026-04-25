'use client';

import { useCallback, useEffect, useState } from 'react';
import EssayLink from '../ui/EssayLink';
import ListItem from '../ui/ListItem';
import SectionLabel from '../ui/SectionLabel';
import UnorderedList from '../ui/UnorderedList';

const STORAGE_KEY = 'writing-filter';

interface PostItem {
	slug: string;
	title: string;
	subtitle?: string;
	tags: string[];
	year: number;
}

interface Props {
	allTags: string[];
	posts: PostItem[];
}

export const WritingPage = ({ allTags, posts }: Props) => {
	const [selectedTags, setSelectedTags] = useState<string[]>([]);

	const updateUrl = useCallback((tags: string[]) => {
		const url = new URL(window.location.href);
		if (tags.length > 0) {
			url.searchParams.set('tag', tags.join(','));
			try {
				localStorage.setItem(STORAGE_KEY, JSON.stringify(tags));
			} catch {}
		} else {
			url.searchParams.delete('tag');
			try {
				localStorage.removeItem(STORAGE_KEY);
			} catch {}
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

	// Restore filter after hydration — URL params take priority over localStorage
	useEffect(() => {
		const params = new URLSearchParams(window.location.search);
		const tag = params.get('tag');
		if (tag) {
			setSelectedTags(tag.split(',').filter(Boolean));
			return;
		}
		try {
			const stored = localStorage.getItem(STORAGE_KEY);
			if (stored) {
				const parsed = JSON.parse(stored);
				if (Array.isArray(parsed) && parsed.length > 0) {
					setSelectedTags(parsed);
					updateUrl(parsed);
				}
			}
		} catch {}
	}, [updateUrl]);

	const filteredPosts =
		selectedTags.length > 0
			? posts.filter((post) => selectedTags.every((tag) => post.tags.includes(tag)))
			: posts;

	const byYear = filteredPosts.reduce<Record<number, PostItem[]>>((acc, post) => {
		(acc[post.year] ??= []).push(post);
		return acc;
	}, {});
	const years = Object.keys(byYear)
		.map(Number)
		.sort((a, b) => b - a);

	const sectionGrid =
		'grid grid-cols-3 gap-x-4 gap-y-6 md:grid-cols-6 md:gap-x-6 xl:grid-cols-12 xl:gap-x-8';
	const labelCol = 'col-span-3 md:col-span-2 md:pt-[0.35em] xl:col-span-2 xl:col-start-2';
	const contentCol = 'col-span-3 min-w-0 md:col-span-5 xl:col-span-6';

	return (
		<div className="flex flex-col gap-16">
			{/* FILTER section */}
			<section className={sectionGrid} data-pagefind-ignore>
				<div className={labelCol}>
					<SectionLabel>Filter</SectionLabel>
				</div>
				<div className={contentCol}>
					<p className="text-3 leading-relaxed">
						{allTags.map((tag, i) => (
							<span key={tag}>
								{i > 0 && (
									<span
										className="text-hai mx-1.5 select-none"
										aria-hidden="true"
									>
										·
									</span>
								)}
								<button
									type="button"
									onClick={() => toggleTag(tag)}
									className={`transition-opacity hover:opacity-60 ${
										selectedTags.includes(tag)
											? 'decoration-beni underline decoration-2 underline-offset-2'
											: ''
									}`}
								>
									{tag}
								</button>
							</span>
						))}
						{selectedTags.length > 0 && (
							<button
								type="button"
								onClick={() => {
									setSelectedTags([]);
									updateUrl([]);
								}}
								className="text-2 text-hai ml-4 underline transition-opacity hover:opacity-60"
							>
								Clear
							</button>
						)}
					</p>
				</div>
			</section>

			{/* Separator */}
			<hr className="border-shibui-300 dark:border-shibui-700" />

			{/* Essays grouped by year */}
			{years.length > 0 ? (
				years.map((year) => (
					<section key={year} className={sectionGrid}>
						<div className={labelCol}>
							<SectionLabel className="normal-case tracking-normal">
								{year}
							</SectionLabel>
						</div>
						<UnorderedList className={contentCol}>
							{byYear[year].map((post) => (
								<ListItem key={post.slug}>
									<EssayLink href={`/${post.slug}/`}>
										{post.subtitle
											? `${post.title}: ${post.subtitle}`
											: post.title}
									</EssayLink>
								</ListItem>
							))}
						</UnorderedList>
					</section>
				))
			) : (
				<section className={sectionGrid}>
					<div className={labelCol} />
					<p className={`${contentCol} text-3 text-hai`}>
						No essays found for the selected tags.
					</p>
				</section>
			)}
		</div>
	);
};

export default WritingPage;
