'use client';

import {
	Article,
	Briefcase,
	Clock,
	House,
	Info,
	Leaf,
	MagnifyingGlass,
	Moon,
	Sun,
	User,
	Wrench,
	X,
} from '@phosphor-icons/react';
import { Command } from 'cmdk';
import { AnimatePresence, motion } from 'motion/react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { cn } from '../../lib/utils';

declare global {
	interface Window {
		openCommandMenu?: () => void;
	}
}

type PagefindResult = {
	url: string;
	meta: { title: string };
	excerpt: string;
};

const navItems = [
	{ title: 'Home', url: '/', Icon: House },
	{ title: 'Writing', url: '/writing/', Icon: Article },
	{ title: 'Work', url: '/work/', Icon: Briefcase },
	{ title: 'Haiku', url: '/haiku/', Icon: Leaf },
	{ title: 'About', url: '/about/', Icon: User },
	{ title: 'Colophon', url: '/colophon/', Icon: Info },
	{ title: 'Tools', url: '/tools/', Icon: Wrench },
	{ title: 'Now', url: '/now/', Icon: Clock },
];

const itemClasses =
	'flex cursor-pointer items-center gap-3 rounded-1 px-4 py-3 text-shibui-950 outline-none data-[selected=true]:bg-beni data-[selected=true]:text-kiri dark:text-shibui-100';

const groupHeadingClasses =
	'[&_[cmdk-group-heading]]:px-4 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:text-2 [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wide [&_[cmdk-group-heading]]:text-shibui-400 [&_[cmdk-group-heading]]:dark:text-shibui-600';

export const CommandMenu = () => {
	const [open, setOpen] = useState(false);
	const [query, setQuery] = useState('');
	const [results, setResults] = useState<PagefindResult[]>([]);
	const [isDark, setIsDark] = useState(false);
	const pagefindRef = useRef<any>(null);

	useEffect(() => {
		setIsDark(document.documentElement.classList.contains('dark'));
	}, [open]);

	const loadPagefind = useCallback(async () => {
		if (pagefindRef.current) return;
		try {
			pagefindRef.current = await import(/* @vite-ignore */ '/pagefind/pagefind.js');
			await pagefindRef.current.init();
		} catch {
			// pagefind not available in dev
		}
	}, []);

	useEffect(() => {
		if (!query.trim() || !open) {
			setResults([]);
			return;
		}
		const timer = setTimeout(async () => {
			await loadPagefind();
			if (!pagefindRef.current) return;
			const res = await pagefindRef.current.search(query);
			const data = await Promise.all(res.results.slice(0, 8).map((r: any) => r.data()));
			setResults(data);
		}, 150);
		return () => clearTimeout(timer);
	}, [query, open, loadPagefind]);

	// Cmd+K / Ctrl+K shortcut
	useEffect(() => {
		const handler = (e: KeyboardEvent) => {
			if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
				e.preventDefault();
				setOpen((o) => !o);
			}
			if (e.key === 'Escape' && open) {
				setOpen(false);
			}
		};
		document.addEventListener('keydown', handler);
		return () => document.removeEventListener('keydown', handler);
	}, [open]);

	// Global opener for Astro scripts / header buttons
	useEffect(() => {
		window.openCommandMenu = () => setOpen(true);
		const handler = () => setOpen(true);
		document.addEventListener('command-menu:open', handler);
		return () => {
			delete window.openCommandMenu;
			document.removeEventListener('command-menu:open', handler);
		};
	}, []);

	// Lock body scroll when open
	useEffect(() => {
		document.body.style.overflow = open ? 'hidden' : '';
		return () => {
			document.body.style.overflow = '';
		};
	}, [open]);

	// Reset query on close
	useEffect(() => {
		if (!open) setQuery('');
	}, [open]);

	const close = () => setOpen(false);

	const navigate = (url: string) => {
		close();
		window.location.href = url;
	};

	const toggleTheme = () => {
		const newDark = !isDark;
		document.documentElement.classList[newDark ? 'add' : 'remove']('dark');
		localStorage.setItem('theme', newDark ? 'dark' : 'light');
		setIsDark(newDark);
		close();
	};

	return (
		<AnimatePresence>
			{open && (
				<>
					{/* Backdrop */}
					<motion.div
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
					<motion.div
						key="panel"
						role="dialog"
						aria-modal="true"
						aria-label="Command menu"
						className="fixed inset-x-0 top-[10vh] z-50 mx-auto w-[calc(100%-2rem)] max-w-[640px]"
						initial={{ opacity: 0, y: -8 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -8 }}
						transition={{ duration: 0.2, ease: [0.0, 0.0, 0.38, 0.9] }}
					>
						<Command
							className="rounded-2 bg-kiri shadow-beveled dark:bg-yoru overflow-hidden"
							loop
						>
							{/* Input bar */}
							<div className="border-be-1 border-be-solid border-be-black/10 pis-4 dark:border-be-white/10 flex items-center">
								<MagnifyingGlass
									className="text-shibui-500 dark:text-shibui-400 h-5 w-5 shrink-0"
									aria-hidden="true"
								/>
								<Command.Input
									value={query}
									onValueChange={setQuery}
									placeholder="Search or navigate…"
									className="pis-3 text-3 text-shibui-950 placeholder:text-shibui-400 dark:text-shibui-100 dark:placeholder:text-shibui-600 flex h-12 w-full bg-transparent outline-none"
									autoFocus
								/>
								<button
									onClick={close}
									className="rounded-1 text-shibui-400 hover:text-shibui-950 dark:hover:text-shibui-100 mie-2 p-2"
									aria-label="Close command menu"
								>
									<X className="h-4 w-4" />
								</button>
							</div>

							<Command.List className="pbe-2 pbs-2 max-h-[60vh] overflow-y-auto">
								<Command.Empty className="text-2 text-shibui-400 py-8 text-center">
									No results found.
								</Command.Empty>

								{/* Search results */}
								{results.length > 0 && (
									<Command.Group
										heading="Search Results"
										className={groupHeadingClasses}
									>
										{results.map((result) => (
											<Command.Item
												key={result.url}
												value={`search:${result.url}`}
												onSelect={() => navigate(result.url)}
												className={itemClasses}
											>
												<MagnifyingGlass
													className="mt-0.5 h-4 w-4 shrink-0 opacity-60"
													aria-hidden="true"
												/>
												<div className="min-w-0 flex-1">
													<div className="text-3 truncate font-semibold">
														{result.meta.title}
													</div>
													<div
														className={cn(
															'text-2 truncate opacity-60',
															'data-[selected=true]:opacity-80'
														)}
														dangerouslySetInnerHTML={{
															__html: result.excerpt,
														}}
													/>
												</div>
											</Command.Item>
										))}
									</Command.Group>
								)}

								{/* Navigation */}
								<Command.Group heading="Navigate" className={groupHeadingClasses}>
									{navItems.map(({ title, url, Icon }) => (
										<Command.Item
											key={url}
											value={title}
											onSelect={() => navigate(url)}
											className={itemClasses}
										>
											<Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
											{title}
										</Command.Item>
									))}
								</Command.Group>

								{/* Theme toggle */}
								<Command.Group heading="Theme" className={groupHeadingClasses}>
									<Command.Item
										value={isDark ? 'light mode' : 'dark mode'}
										onSelect={toggleTheme}
										className={itemClasses}
									>
										{isDark ? (
											<Sun className="h-4 w-4 shrink-0" aria-hidden="true" />
										) : (
											<Moon className="h-4 w-4 shrink-0" aria-hidden="true" />
										)}
										{isDark ? 'Switch to light mode' : 'Switch to dark mode'}
									</Command.Item>
								</Command.Group>
							</Command.List>

							{/* Footer hint */}
							<div className="border-bs-1 border-bs-solid border-bs-black/10 text-2 text-shibui-400 dark:border-bs-white/10 flex items-center justify-end gap-4 px-4 py-2">
								<span>
									<kbd className="rounded-1 bg-shibui-200 dark:bg-shibui-800 px-1 font-mono text-[0.7em]">
										↑↓
									</kbd>{' '}
									navigate
								</span>
								<span>
									<kbd className="rounded-1 bg-shibui-200 dark:bg-shibui-800 px-1 font-mono text-[0.7em]">
										↵
									</kbd>{' '}
									select
								</span>
								<span>
									<kbd className="rounded-1 bg-shibui-200 dark:bg-shibui-800 px-1 font-mono text-[0.7em]">
										esc
									</kbd>{' '}
									close
								</span>
							</div>
						</Command>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
};

export default CommandMenu;
