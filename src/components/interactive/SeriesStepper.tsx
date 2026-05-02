'use client';

import { CaretDownIcon } from '@phosphor-icons/react';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';

import { cn } from '../../lib/utils';

import SectionLabel from '../ui/SectionLabel';
import TextLink from '../ui/TextLink';

export interface SeriesStep {
	id: string;
	title: string;
	subtitle?: string;
}

interface Props {
	steps: SeriesStep[];
	currentId: string;
	seriesName?: string;
}

const EASE_ENTER = [0, 0, 0.38, 0.9] as const;

type StepState = 'past' | 'current' | 'upcoming';

export const SeriesStepper = ({ steps, currentId, seriesName }: Props) => {
	const [open, setOpen] = useState<boolean>(false);
	const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

	useEffect(() => {
		const reduceMql = window.matchMedia('(prefers-reduced-motion: reduce)');
		setPrefersReducedMotion(reduceMql.matches);
		const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
		reduceMql.addEventListener('change', handler);
		return () => reduceMql.removeEventListener('change', handler);
	}, []);

	if (steps.length < 2) return null;

	const currentIndex = steps.findIndex((s) => s.id === currentId);
	if (currentIndex === -1) return null;

	const stateOf = (i: number): StepState =>
		i < currentIndex ? 'past' : i === currentIndex ? 'current' : 'upcoming';

	const srLabel = (state: StepState) =>
		state === 'past' ? 'Visited' : state === 'current' ? 'Current part' : 'Upcoming';

	return (
		<nav
			aria-label={seriesName ? `Series: ${seriesName}` : 'Series navigation'}
			className="rounded-2 border-usuzumi dark:border-nezumi mb-8 border p-4"
		>
			{/* Header — always visible, click to toggle the body */}
			<button
				type="button"
				onClick={() => setOpen((v) => !v)}
				aria-expanded={open}
				aria-controls="series-list"
				className="flex w-full items-center gap-3 bg-transparent p-0 text-left"
			>
				<SectionLabel as="span" className="mbe-0 shrink-0">
					Series
				</SectionLabel>

				{/* Horizontal mini-progress (decorative, aria-hidden) */}
				<motion.div
					className="relative flex flex-1 items-center"
					aria-hidden="true"
					animate={{ opacity: open ? 0 : 1 }}
					transition={
						prefersReducedMotion ? { duration: 0 } : { duration: 0.2, ease: EASE_ENTER }
					}
					style={{ pointerEvents: open ? 'none' : undefined }}
				>
					{/* Full background grey line */}
					<div className="bg-hai dark:bg-nezumi absolute inset-x-0 h-px" />
					{/* Crimson overlay from first dot up to current */}
					{currentIndex > 0 && (
						<div
							className="bg-beni dark:bg-beni-light absolute left-0 h-px"
							style={{
								width: `${(currentIndex / (steps.length - 1)) * 100}%`,
							}}
						/>
					)}
					{/* Dots */}
					<div className="relative flex w-full items-center justify-between">
						{steps.map((step, i) => {
							const state = stateOf(i);
							return (
								<span
									key={step.id}
									className={cn(
										'block size-2 shrink-0 rounded-full',
										state === 'upcoming'
											? 'bg-hai dark:bg-nezumi'
											: 'bg-beni dark:bg-beni-light'
									)}
								/>
							);
						})}
					</div>
				</motion.div>

				<span className="text-2 text-hai dark:text-nezumi shrink-0 uppercase">
					Part {currentIndex + 1} of {steps.length}
				</span>

				<span
					aria-hidden="true"
					className="text-hai dark:text-nezumi inline-flex size-4 shrink-0 items-center justify-center"
					style={{
						transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
						transition: prefersReducedMotion
							? 'none'
							: 'transform 200ms var(--ease-enter)',
					}}
				>
					<CaretDownIcon size={12} weight="bold" />
				</span>
			</button>

			{/* Expandable vertical stepper */}
			<AnimatePresence initial={false}>
				{open && (
					<motion.div
						key="series-body"
						id="series-list"
						initial={prefersReducedMotion ? false : { height: 0, opacity: 0 }}
						animate={{ height: 'auto', opacity: 1 }}
						exit={prefersReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
						transition={{ duration: 0.25, ease: EASE_ENTER }}
						className="overflow-hidden"
					>
						<ol className="mbs-4 flex list-none flex-col">
							{steps.map((step, i) => {
								const state = stateOf(i);
								const isLast = i === steps.length - 1;
								const number = String(i + 1).padStart(2, '0');

								return (
									<li
										key={step.id}
										aria-current={state === 'current' ? 'page' : undefined}
										className="relative flex items-stretch gap-x-3"
									>
										{/* Crimson rail bar for current step — shared layout animation */}
										{state === 'current' && (
											<motion.span
												layoutId="series-indicator"
												aria-hidden="true"
												layout={prefersReducedMotion ? false : true}
												className="bg-beni dark:bg-beni-light absolute top-0 h-full w-px"
												style={{ left: '4.5px' }}
												transition={{ duration: 0.25, ease: EASE_ENTER }}
											/>
										)}

										{/* Dot column with flex connectors — continuous rail */}
										<div className="flex w-2 shrink-0 flex-col items-center">
											<div
												className={cn(
													'min-h-2 w-px flex-1',
													i > 0 ? 'bg-hai dark:bg-nezumi' : 'invisible'
												)}
											/>
											<span
												aria-hidden="true"
												className={cn(
													'block size-2 shrink-0 rounded-full',
													(state === 'past' || state === 'current') &&
														'bg-beni dark:bg-beni-light',
													state === 'upcoming' && 'bg-hai dark:bg-nezumi'
												)}
											/>
											<div
												className={cn(
													'min-h-2 w-px flex-1',
													!isLast ? 'bg-hai dark:bg-nezumi' : 'invisible'
												)}
											/>
										</div>

										{/* Content */}
										<div className="min-w-0 flex-1 py-1.5">
											<span className="sr-only">{srLabel(state)}: </span>
											<span className="text-2 text-hai dark:text-nezumi mr-1 tabular-nums">
												{number}.
											</span>
											{state === 'current' ? (
												<span className="text-sumi dark:text-washi text-balance font-bold">
													{step.title}
												</span>
											) : (
												<TextLink
													href={`/writing/${step.id}/`}
													className="text-balance"
												>
													{step.title}
												</TextLink>
											)}
											{step.subtitle && (
												<p className="text-2 text-hai dark:text-nezumi mbe-0 mt-0.5 text-balance">
													{step.subtitle}
												</p>
											)}
										</div>
									</li>
								);
							})}
						</ol>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
};

export default SeriesStepper;
