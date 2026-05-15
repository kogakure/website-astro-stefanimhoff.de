'use client';

import {
	ArrowLeftIcon,
	BookOpenIcon,
	BriefcaseIcon,
	ClockIcon,
	FlagIcon,
	HeartIcon,
	HouseIcon,
	InfoIcon,
	LeafIcon,
	MagnifyingGlassIcon,
	MoonIcon,
	PaintBrushIcon,
	PencilSimpleIcon,
	ScrollIcon,
	SunIcon,
	SwatchesIcon,
	WrenchIcon,
} from '@phosphor-icons/react';
import { Command } from 'cmdk';
import { AnimatePresence, LazyMotion, domAnimation, m } from 'motion/react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { cn } from '../../lib/utils';

type View = 'menu' | 'search';

type PagefindResult = {
	url: string;
	meta: { title: string; image?: string };
	excerpt: string;
};

const MOCK_SEARCH: PagefindResult[] = [
	{
		url: '/writing/the-art-of-minimalism/',
		meta: { title: 'The Art of Minimalism' },
		excerpt:
			'Less is more. A meditation on reducing the <mark>noise</mark> in everyday life and finding clarity.',
	},
	{
		url: '/writing/japanese-aesthetics/',
		meta: { title: 'Japanese Aesthetics' },
		excerpt:
			'Exploring wabi-sabi, ma, and the <mark>beauty</mark> of impermanence in design and life.',
	},
	{
		url: '/haiku/morning-mist/',
		meta: { title: 'Morning Mist' },
		excerpt:
			'Morning mist rises / across the bamboo forest / <mark>silence</mark> speaks aloud.',
	},
	{
		url: '/writing/stoicism-and-productivity/',
		meta: { title: 'Stoicism and Productivity' },
		excerpt: 'Applying stoic principles to modern <mark>work</mark> and deliberate focus.',
	},
	{
		url: '/writing/the-value-of-slowness/',
		meta: { title: 'The Value of Slowness' },
		excerpt:
			'In a world obsessed with <mark>speed</mark>, slowness is a radical and necessary act.',
	},
];

const navItems = [
	{ title: 'Home', url: '/', Icon: HouseIcon },
	{ title: 'About', url: '/about/', Icon: InfoIcon },
	{ title: 'Work', url: '/work/', Icon: BriefcaseIcon },
	{ title: 'Writing', url: '/writing/', Icon: PencilSimpleIcon },
];

const linkItems = [
	{ title: 'Design System', url: '/design-system/', Icon: SwatchesIcon },
	{ title: 'Haiku', url: '/haiku/', Icon: LeafIcon },
	{ title: 'Colophon', url: '/colophon/', Icon: BookOpenIcon },
	{ title: 'Tools', url: '/tools/', Icon: WrenchIcon },
	{ title: 'Now', url: '/now/', Icon: ClockIcon },
	{ title: 'Life Rules', url: '/life-rules/', Icon: HeartIcon },
	{
		title: 'Traditional Colors of Japan',
		url: '/traditional-colors-of-japan/',
		Icon: PaintBrushIcon,
	},
	{ title: 'Libertarianism', url: '/libertarianism/', Icon: FlagIcon },
	{ title: 'Imprint', url: '/imprint/', Icon: ScrollIcon },
];

const itemClasses =
	'flex cursor-pointer items-center gap-3 rounded-1 pli-4 pbl-3 text-shibui-950 outline-none data-[selected=true]:bg-beni dark:data-[selected=true]:bg-beni-light data-[selected=true]:text-kiri dark:text-shibui-100';

const groupHeadingClasses =
	'[&_[cmdk-group-heading]]:pli-4 [&_[cmdk-group-heading]]:pbl-2 [&_[cmdk-group-heading]]:text-2 [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wide [&_[cmdk-group-heading]]:text-shibui-400 [&_[cmdk-group-heading]]:dark:text-shibui-600';

export const CommandMenu = () => {
	const [open, setOpen] = useState(false);
	const [view, setView] = useState<View>('menu');
	const [query, setQuery] = useState('');
	const [results, setResults] = useState<PagefindResult[]>([]);
	const [isDark, setIsDark] = useState(false);
	const pagefindRef = useRef<any>(null);
	const inputRef = useRef<HTMLInputElement>(null);
	const prevFocusRef = useRef<HTMLElement | null>(null);

	useEffect(() => {
		setIsDark(document.documentElement.classList.contains('dark'));
		if (open) {
			prevFocusRef.current = document.activeElement as HTMLElement;
		}
	}, [open]);

	useEffect(() => {
		if (open) inputRef.current?.focus();
	}, [view, open]);

	const loadPagefind = useCallback(async () => {
		if (pagefindRef.current) return;
		try {
			// @ts-expect-error – pagefind only exists after build
			pagefindRef.current = await import(/* @vite-ignore */ '/pagefind/pagefind.js');
			await pagefindRef.current.init();
		} catch {
			// pagefind not available in dev
		}
	}, []);

	// Pagefind search (search view only)
	useEffect(() => {
		if (view !== 'search' || !open || !query.trim()) {
			setResults([]);
			return;
		}
		const timer = setTimeout(async () => {
			if (import.meta.env.DEV) {
				const q = query.toLowerCase();
				setResults(
					MOCK_SEARCH.filter(
						(r) =>
							r.meta.title.toLowerCase().includes(q) ||
							r.excerpt.toLowerCase().includes(q)
					).slice(0, 8)
				);
				return;
			}
			await loadPagefind();
			if (!pagefindRef.current) return;
			const res = await pagefindRef.current.search(query);
			const data = await Promise.all(res.results.slice(0, 8).map((r: any) => r.data()));
			setResults(data);
		}, 150);
		return () => clearTimeout(timer);
	}, [query, view, open, loadPagefind]);

	// Cmd+K / Ctrl+K + ESC
	useEffect(() => {
		const handler = (e: KeyboardEvent) => {
			if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
				e.preventDefault();
				setOpen((o) => !o);
			}
			if (e.key === 'Escape' && open) {
				if (view === 'search' && query) {
					setQuery('');
				} else if (view === 'search') {
					setView('menu');
				} else {
					setOpen(false);
				}
			}
		};
		document.addEventListener('keydown', handler);
		return () => document.removeEventListener('keydown', handler);
	}, [open, view, query]);

	// Global openers
	useEffect(() => {
		if (typeof window !== 'undefined') {
			// @ts-expect-error -- global opener for Astro scripts / header buttons
			window.openCommandMenu = () => setOpen(true);
		}
		const openMenu = () => {
			setView('menu');
			setOpen(true);
		};
		const openSearch = () => {
			setView('search');
			setOpen(true);
		};
		document.addEventListener('command-menu:open', openMenu);
		document.addEventListener('command-menu:open-search', openSearch);
		return () => {
			if (typeof window !== 'undefined') {
				// @ts-expect-error -- global opener for Astro scripts / header buttons
				delete window.openCommandMenu;
			}
			document.removeEventListener('command-menu:open', openMenu);
			document.removeEventListener('command-menu:open-search', openSearch);
		};
	}, []);

	// Lock scroll
	useEffect(() => {
		document.body.style.overflow = open ? 'hidden' : '';
		return () => {
			document.body.style.overflow = '';
		};
	}, [open]);

	// Reset on close
	useEffect(() => {
		if (!open) {
			setQuery('');
			setView('menu');
		}
	}, [open]);

	const close = () => {
		setOpen(false);
		requestAnimationFrame(() => prevFocusRef.current?.focus());
	};

	const navigate = (url: string) => {
		close();
		if (typeof window !== 'undefined') {
			window.location.href = url;
		}
	};

	const toggleTheme = () => {
		const newDark = !isDark;
		document.documentElement.classList[newDark ? 'add' : 'remove']('dark');
		localStorage.setItem('theme', newDark ? 'dark' : 'light');
		setIsDark(newDark);
		close();
	};

	const goToSearch = () => {
		setQuery('');
		setView('search');
	};

	const goToMenu = () => {
		setQuery('');
		setView('menu');
	};

	return (
		<LazyMotion features={domAnimation}>
			<AnimatePresence>
				{open && (
					<>
						{/* Backdrop */}
						<m.div
							key="backdrop"
							className="bg-shibui-100/80 dark:bg-shibui-900/80 fixed inset-0 z-50 backdrop-blur-sm"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.2 }}
							onClick={close}
							aria-hidden="true"
						/>

						{/* Panel */}
						<m.div
							key="panel"
							role="dialog"
							aria-modal="true"
							aria-label="Command menu"
							className="max-w-160 inline-start-0 inline-end-0 block-start-[10vh] fixed z-50 mx-auto w-[calc(100%-2rem)]"
							initial={{ opacity: 0, y: -8 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -8 }}
							transition={{ duration: 0.2, ease: [0.0, 0.0, 0.38, 0.9] }}
						>
							<Command
								className="rounded-2 bg-kiri dark:bg-yoru overflow-hidden border border-black/10 shadow-sm dark:border-white/10 dark:shadow-none"
								loop
								shouldFilter={view === 'menu'}
							>
								{/* Input bar */}
								<div className="border-be-1 border-be-solid border-be-black/10 dark:border-be-white/10 flex items-center">
									{view === 'search' && (
										<button
											onClick={goToMenu}
											className="rounded-1 text-shibui-400 hover:text-shibui-950 dark:hover:text-shibui-100 focus-visible:ring-beni dark:focus-visible:ring-beni-light mis-2 shrink-0 p-2 focus-visible:outline-none focus-visible:ring-2"
											aria-label="Back to navigation"
											type="button"
										>
											<ArrowLeftIcon className="h-4 w-4" aria-hidden="true" />
										</button>
									)}
									<Command.Input
										ref={inputRef}
										value={query}
										onValueChange={setQuery}
										placeholder={
											view === 'menu' ? 'Type a command…' : 'Search the site…'
										}
										className={cn(
											'text-3 text-shibui-950 placeholder:text-shibui-400 dark:text-shibui-100 dark:placeholder:text-shibui-600 flex h-12 w-full border-0 bg-transparent outline-none focus-visible:ring-0 focus-visible:ring-offset-0',
											view === 'search' ? 'pis-3 pie-4' : 'pis-4 pie-4'
										)}
										autoFocus
									/>
								</div>

								<Command.List className="pbe-2 pbs-2 max-h-[60vh] overflow-y-auto">
									{/* Menu view */}
									{view === 'menu' && (
										<>
											<Command.Empty className="text-2 text-shibui-400 pbl-8 text-center">
												No results found.
											</Command.Empty>

											<Command.Item
												value="Search"
												onSelect={goToSearch}
												className={itemClasses}
											>
												<MagnifyingGlassIcon
													className="size-4 shrink-0"
													aria-hidden="true"
												/>
												Search
											</Command.Item>

											<Command.Group
												heading="Navigation"
												className={groupHeadingClasses}
											>
												{navItems.map(({ title, url, Icon }) => (
													<Command.Item
														key={url}
														value={title}
														onSelect={() => navigate(url)}
														className={itemClasses}
													>
														<Icon
															className="size-4 shrink-0"
															aria-hidden="true"
														/>
														{title}
													</Command.Item>
												))}
											</Command.Group>

											<Command.Group
												heading="Links"
												className={groupHeadingClasses}
											>
												{linkItems.map(({ title, url, Icon }) => (
													<Command.Item
														key={url}
														value={title}
														onSelect={() => navigate(url)}
														className={itemClasses}
													>
														<Icon
															className="size-4 shrink-0"
															aria-hidden="true"
														/>
														{title}
													</Command.Item>
												))}
											</Command.Group>

											<Command.Group
												heading="Theme"
												className={groupHeadingClasses}
											>
												<Command.Item
													value={
														isDark
															? 'Switch to light mode'
															: 'Switch to dark mode'
													}
													onSelect={toggleTheme}
													className={itemClasses}
												>
													{isDark ? (
														<SunIcon
															className="size-4 shrink-0"
															aria-hidden="true"
														/>
													) : (
														<MoonIcon
															className="size-4 shrink-0"
															aria-hidden="true"
														/>
													)}
													{isDark
														? 'Switch to light mode'
														: 'Switch to dark mode'}
												</Command.Item>
											</Command.Group>
										</>
									)}

									{/* Search view */}
									{view === 'search' && (
										<>
											{!query.trim() && (
												<div className="text-2 text-shibui-400 pbl-8 text-center">
													Type to search posts, haiku and work.
												</div>
											)}
											{query.trim() && results.length === 0 && (
												<div className="text-2 text-shibui-400 pbl-8 text-center">
													Nothing found for &lsquo;{query}&rsquo;.
												</div>
											)}
											{results.length > 0 && (
												<Command.Group className={groupHeadingClasses}>
													{results.map((result) => (
														<Command.Item
															key={result.url}
															value={`${result.meta.title} ${result.url}`}
															onSelect={() => navigate(result.url)}
															className={itemClasses}
														>
															<div className="min-w-0 flex-1">
																<div className="text-3 truncate font-semibold">
																	{result.meta.title}
																</div>
																<div
																	className="text-2 [&_mark]:bg-beni-pale [&_mark]:text-sumi [&_mark]:dark:bg-beni-dark/40 [&_mark]:dark:text-washi [&_mark]:rounded-1 truncate opacity-60 [&_mark]:px-[0.2em]"
																	dangerouslySetInnerHTML={{
																		__html: result.excerpt,
																	}}
																/>
															</div>
														</Command.Item>
													))}
												</Command.Group>
											)}
										</>
									)}
								</Command.List>

								{/* Footer hint */}
								<div className="border-bs-1 border-bs-solid border-bs-black/10 text-2 text-shibui-400 dark:border-bs-white/10 pli-4 pbl-2 flex items-center justify-end gap-4">
									<span>
										<kbd className="rounded-1 bg-shibui-200 dark:bg-shibui-800 dark:text-shibui-100 pli-1 font-mono text-[0.7em] shadow-none [text-shadow:none]">
											↑↓
										</kbd>{' '}
										navigate
									</span>
									<span>
										<kbd className="rounded-1 bg-shibui-200 dark:bg-shibui-800 dark:text-shibui-100 pli-1 font-mono text-[0.7em] shadow-none [text-shadow:none]">
											↵
										</kbd>{' '}
										select
									</span>
									<span>
										<kbd className="rounded-1 bg-shibui-200 dark:bg-shibui-800 dark:text-shibui-100 pli-1 font-mono text-[0.7em] shadow-none [text-shadow:none]">
											esc
										</kbd>{' '}
										close
									</span>
								</div>
							</Command>
						</m.div>
					</>
				)}
			</AnimatePresence>
		</LazyMotion>
	);
};

export default CommandMenu;
