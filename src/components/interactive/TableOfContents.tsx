'use client';

import { MinusIcon, PlusIcon } from '@phosphor-icons/react';
import { AnimatePresence, LazyMotion, domMax, m, useReducedMotion } from 'motion/react';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { EASE_ENTER } from '../../lib/motion';

import { cn } from '../../lib/utils';

import SectionLabel from '../ui/SectionLabel';

interface Heading {
	id: string;
	text: string;
}

interface Props {
	headings: Heading[];
}

export const TableOfContents = ({ headings }: Props) => {
	const reduced = useReducedMotion();
	const tocDur = reduced ? 0 : 0.25;
	const [activeId, setActiveId] = useState<string>(headings[0]?.id ?? '');
	const [open, setOpen] = useState<boolean>(false);
	const observerRef = useRef<IntersectionObserver | null>(null);

	useEffect(() => {
		const setOpenForViewport = () => setOpen(window.matchMedia('(min-width: 1280px)').matches);
		setOpenForViewport();
		const mql = window.matchMedia('(min-width: 1280px)');
		mql.addEventListener('change', setOpenForViewport);
		return () => mql.removeEventListener('change', setOpenForViewport);
	}, []);

	useEffect(() => {
		if (headings.length === 0) return;

		const elements = headings
			.map(({ id }) => document.getElementById(id))
			.filter((el): el is HTMLElement => el !== null);

		if (elements.length === 0) return;

		observerRef.current?.disconnect();
		observerRef.current = new IntersectionObserver(
			(entries) => {
				const visible = entries
					.filter((entry) => entry.isIntersecting)
					.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
				if (visible[0]) {
					setActiveId(visible[0].target.id);
					return;
				}
				if (window.scrollY < (elements[0]?.offsetTop ?? 0)) {
					setActiveId(elements[0]!.id);
				}
			},
			{ rootMargin: '-25% 0px -65% 0px', threshold: 0 }
		);

		elements.forEach((el) => observerRef.current!.observe(el));
		return () => observerRef.current?.disconnect();
	}, [headings]);

	const handleClick = useCallback((event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
		event.preventDefault();
		const target = document.getElementById(id);
		if (!target) return;
		const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
		history.replaceState(null, '', `#${id}`);
		setActiveId(id);
	}, []);

	if (headings.length < 2) return null;

	return (
		<LazyMotion features={domMax}>
			<nav aria-label="Table of contents">
				<button
					type="button"
					onClick={() => setOpen((v) => !v)}
					aria-expanded={open}
					aria-controls="toc-list"
					className="flex w-full items-center gap-2 bg-transparent p-0 text-start xl:pointer-events-none xl:cursor-default"
				>
					<span
						aria-hidden="true"
						className="text-hai dark:text-nezumi inline-flex size-4 shrink-0 items-center justify-center xl:hidden"
					>
						{open ? <MinusIcon size={12} /> : <PlusIcon size={12} />}
					</span>
					<SectionLabel as="p" className="mbe-0">
						Table of Contents
					</SectionLabel>
				</button>

				<AnimatePresence initial={false}>
					{open && (
						<m.div
							key="toc-body"
							id="toc-list"
							initial={{ height: 0, opacity: 0 }}
							animate={{ height: 'auto', opacity: 1 }}
							exit={{ height: 0, opacity: 0 }}
							transition={{ duration: tocDur, ease: EASE_ENTER }}
							className="overflow-hidden"
						>
							<ol className="border-usuzumi dark:border-nezumi mbs-4 border-is-1 relative flex list-none flex-col">
								{headings.map(({ id, text }) => {
									const isActive = id === activeId;
									return (
										<li key={id} className="relative">
											{isActive && (
												<m.span
													layoutId="toc-indicator"
													aria-hidden="true"
													className="bg-beni dark:bg-beni-light -inline-start-px block-start-0 absolute h-full w-px"
													transition={{
														duration: 0.25,
														ease: EASE_ENTER,
													}}
												/>
											)}
											<a
												href={`#${id}`}
												onClick={(event) => handleClick(event, id)}
												className={cn(
													'pis-4 pbl-px6 block leading-snug transition-colors duration-200',
													isActive
														? 'text-beni dark:text-beni-light'
														: 'text-hai hover:text-sumi dark:hover:text-washi'
												)}
												style={{
													transitionTimingFunction: 'var(--ease-enter)',
												}}
											>
												{text}
											</a>
										</li>
									);
								})}
							</ol>
						</m.div>
					)}
				</AnimatePresence>
			</nav>
		</LazyMotion>
	);
};

export default TableOfContents;
