'use client';

import { useState, useEffect, useCallback } from 'react';

interface PostItem {
	slug: string;
	title: string;
	tags: string[];
	year: number;
}

interface Props {
	allTags: string[];
	posts: PostItem[];
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

	const byYear = filteredPosts.reduce<Record<number, PostItem[]>>((acc, post) => {
		(acc[post.year] ??= []).push(post);
		return acc;
	}, {});
	const years = Object.keys(byYear)
		.map(Number)
		.sort((a, b) => b - a);

	return (
		<>
			{/* FILTER section */}
			<section
				className="grid gap-6 md:grid-cols-[160px_1fr] md:gap-16"
				data-pagefind-ignore
			>
				<div>
					<span className="block text-2 tracking-widest uppercase text-hai">
						Filter
					</span>
				</div>
				<div className="min-w-0">
					<p className="text-3 leading-relaxed">
						{allTags.map((tag, i) => (
							<span key={tag}>
								{i > 0 && (
									<span className="mx-1.5 select-none text-hai" aria-hidden="true">
										·
									</span>
								)}
								<button
									type="button"
									onClick={() => toggleTag(tag)}
									className={`transition-opacity hover:opacity-60 ${
										selectedTags.includes(tag)
											? 'underline decoration-beni decoration-2 underline-offset-2'
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
								className="ml-4 text-2 text-hai underline transition-opacity hover:opacity-60"
							>
								Clear
							</button>
						)}
					</p>
					<hr className="mt-8 border-shibui-300 dark:border-shibui-700" />
				</div>
			</section>

			{/* Essays grouped by year */}
			{years.length > 0 ? (
				years.map((year) => (
					<section
						key={year}
						className="grid gap-6 md:grid-cols-[160px_1fr] md:gap-16"
					>
						<div>
							<span className="block text-2 tracking-widest text-hai">
								{year}
							</span>
						</div>
						<ul className="flex flex-col gap-1 pl-[1.25em] min-w-0">
							{byYear[year].map((post) => (
								<li key={post.slug} className="[text-indent:-1.25em]">
									<span className="select-none text-beni">— </span>
									<a
										className="text-3 transition-opacity hover:opacity-60"
										href={`/${post.slug}/`}
									>
										{post.title}
									</a>
								</li>
							))}
						</ul>
					</section>
				))
			) : (
				<section className="grid gap-6 md:grid-cols-[160px_1fr] md:gap-16">
					<div />
					<p className="text-3 text-hai">No essays found for the selected tags.</p>
				</section>
			)}
		</>
	);
};

export default WritingPage;
