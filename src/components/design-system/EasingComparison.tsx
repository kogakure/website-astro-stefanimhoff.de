'use client';

import { useEffect, useRef, useState } from 'react';

const curves = [
	{
		name: 'Enter',
		cssVar: '--ease-enter',
		p1x: 0,
		p1y: 0,
		p2x: 0.38,
		p2y: 0.9,
		color: 'var(--color-beni)',
	},
	{
		name: 'Exit',
		cssVar: '--ease-exit',
		p1x: 0.2,
		p1y: 0,
		p2x: 1,
		p2y: 0.9,
		color: 'var(--color-nezumi)',
	},
	{
		name: 'Standard',
		cssVar: '--ease-standard',
		p1x: 0.2,
		p1y: 0,
		p2x: 0.38,
		p2y: 0.9,
		color: 'var(--color-sumi)',
	},
];

const SIZE = 200;
const PAD = 20;
const INNER = SIZE - PAD * 2;
const ANIM_MS = 1200;

function cubicBezier(t: number, p0: number, p1: number, p2: number, p3: number): number {
	const mt = 1 - t;
	return mt * mt * mt * p0 + 3 * mt * mt * t * p1 + 3 * mt * t * t * p2 + t * t * t * p3;
}

function buildPath(p1x: number, p1y: number, p2x: number, p2y: number): string {
	const points: string[] = [];
	for (let i = 0; i <= 60; i++) {
		const t = i / 60;
		const x = cubicBezier(t, 0, p1x, p2x, 1);
		const y = cubicBezier(t, 0, p1y, p2y, 1);
		points.push(
			`${i === 0 ? 'M' : 'L'}${(PAD + x * INNER).toFixed(2)},${(PAD + (1 - y) * INNER).toFixed(2)}`
		);
	}
	return points.join(' ');
}

export const EasingComparison = () => {
	const [t, setT] = useState(0);
	const rafRef = useRef<number | null>(null);
	const startRef = useRef<number | null>(null);

	const play = () => {
		if (rafRef.current) cancelAnimationFrame(rafRef.current);
		startRef.current = null;
		setT(0);
		const animate = (ts: number) => {
			if (startRef.current === null) startRef.current = ts;
			const progress = Math.min((ts - startRef.current) / ANIM_MS, 1);
			setT(progress);
			if (progress < 1) rafRef.current = requestAnimationFrame(animate);
			else
				setTimeout(() => {
					startRef.current = null;
					setT(0);
				}, 600);
		};
		rafRef.current = requestAnimationFrame(animate);
	};

	useEffect(
		() => () => {
			if (rafRef.current) cancelAnimationFrame(rafRef.current);
		},
		[]
	);

	return (
		<div className="flex flex-col gap-4">
			<button
				onClick={play}
				className="rounded-md"
				style={{ backgroundColor: 'var(--color-kiri)', padding: 0, cursor: 'pointer' }}
				title="Play all three curves"
				aria-label="Play all three easing curves"
			>
				<svg
					width="100%"
					viewBox={`0 0 ${SIZE} ${SIZE}`}
					style={{ display: 'block', maxWidth: 320 }}
				>
					<line
						x1={PAD}
						y1={PAD}
						x2={PAD}
						y2={PAD + INNER}
						stroke="var(--color-usuzumi)"
						strokeWidth="1"
					/>
					<line
						x1={PAD}
						y1={PAD + INNER}
						x2={PAD + INNER}
						y2={PAD + INNER}
						stroke="var(--color-usuzumi)"
						strokeWidth="1"
					/>
					<line
						x1={PAD}
						y1={PAD}
						x2={PAD + INNER}
						y2={PAD + INNER}
						stroke="var(--color-usuzumi)"
						strokeWidth="0.5"
						strokeDasharray="4,4"
					/>

					{curves.map((c) => {
						const path = buildPath(c.p1x, c.p1y, c.p2x, c.p2y);
						const cx = cubicBezier(t, 0, c.p1x, c.p2x, 1);
						const cy = cubicBezier(t, 0, c.p1y, c.p2y, 1);
						return (
							<g key={c.name}>
								<path
									d={path}
									fill="none"
									stroke={c.color}
									strokeWidth="1.5"
									strokeLinecap="round"
								/>
								{t > 0 && t < 1 && (
									<circle
										cx={PAD + cx * INNER}
										cy={PAD + (1 - cy) * INNER}
										r={3.5}
										fill={c.color}
									/>
								)}
							</g>
						);
					})}
				</svg>
			</button>

			<div className="flex gap-4">
				{curves.map((c) => (
					<div key={c.name} className="flex items-center gap-1.5">
						<span
							className="inline-block size-2.5 rounded-sm"
							style={{ backgroundColor: c.color }}
						/>
						<span
							className="font-mono text-[11px]"
							style={{ color: 'var(--color-hai)' }}
						>
							{c.name}
						</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default EasingComparison;
