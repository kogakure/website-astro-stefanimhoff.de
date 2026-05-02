'use client';

import { useEffect, useRef, useState } from 'react';

interface Props {
	name: string;
	p1x: number;
	p1y: number;
	p2x: number;
	p2y: number;
	role: string;
	cssVar: string;
}

const SIZE = 120;
const PAD = 16;
const INNER = SIZE - PAD * 2;

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
		const svgX = PAD + x * INNER;
		const svgY = PAD + (1 - y) * INNER;
		points.push(`${i === 0 ? 'M' : 'L'}${svgX.toFixed(2)},${svgY.toFixed(2)}`);
	}
	return points.join(' ');
}

export const EasingCurvePlot = ({ name, p1x, p1y, p2x, p2y, role, cssVar }: Props) => {
	const [t, setT] = useState(0);
	const rafRef = useRef<number | null>(null);
	const startRef = useRef<number | null>(null);
	const ANIM_MS = 1200;

	const animate = (ts: number) => {
		if (startRef.current === null) startRef.current = ts;
		const elapsed = ts - startRef.current;
		const progress = Math.min(elapsed / ANIM_MS, 1);
		setT(progress);
		if (progress < 1) {
			rafRef.current = requestAnimationFrame(animate);
		} else {
			setTimeout(() => {
				startRef.current = null;
				setT(0);
			}, 600);
		}
	};

	const play = () => {
		if (rafRef.current) cancelAnimationFrame(rafRef.current);
		startRef.current = null;
		setT(0);
		rafRef.current = requestAnimationFrame(animate);
	};

	useEffect(
		() => () => {
			if (rafRef.current) cancelAnimationFrame(rafRef.current);
		},
		[]
	);

	const curveX = cubicBezier(t, 0, p1x, p2x, 1);
	const curveY = cubicBezier(t, 0, p1y, p2y, 1);
	const dotX = PAD + curveX * INNER;
	const dotY = PAD + (1 - curveY) * INNER;

	const path = buildPath(p1x, p1y, p2x, p2y);
	const cp1x = PAD + p1x * INNER;
	const cp1y = PAD + (1 - p1y) * INNER;
	const cp2x = PAD + p2x * INNER;
	const cp2y = PAD + (1 - p2y) * INNER;

	return (
		<div
			className="flex flex-col items-center gap-3 rounded-md p-4"
			style={{ backgroundColor: 'var(--color-kiri)' }}
		>
			<button
				onClick={play}
				className="group relative cursor-pointer"
				title={`Play ${name} animation`}
				aria-label={`Play ${name} animation`}
			>
				<svg
					width={SIZE}
					height={SIZE}
					viewBox={`0 0 ${SIZE} ${SIZE}`}
					style={{ overflow: 'visible' }}
				>
					{/* Grid lines */}
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
						strokeDasharray="3,3"
					/>

					{/* Control point handles */}
					<line
						x1={PAD}
						y1={PAD + INNER}
						x2={cp1x}
						y2={cp1y}
						stroke="var(--color-hai)"
						strokeWidth="0.75"
						strokeDasharray="2,2"
					/>
					<line
						x1={PAD + INNER}
						y1={PAD}
						x2={cp2x}
						y2={cp2y}
						stroke="var(--color-hai)"
						strokeWidth="0.75"
						strokeDasharray="2,2"
					/>
					<circle cx={cp1x} cy={cp1y} r={2.5} fill="var(--color-hai)" />
					<circle cx={cp2x} cy={cp2y} r={2.5} fill="var(--color-hai)" />

					{/* Curve */}
					<path
						d={path}
						fill="none"
						stroke="var(--color-beni)"
						strokeWidth="2"
						strokeLinecap="round"
					/>

					{/* Animated dot */}
					{t > 0 && t < 1 && (
						<circle cx={dotX} cy={dotY} r={4} fill="var(--color-beni)" />
					)}
				</svg>
			</button>

			<div className="flex flex-col items-center gap-0.5 text-center">
				<span
					className="font-mono text-xs font-medium"
					style={{ color: 'var(--color-sumi)' }}
				>
					{name}
				</span>
				<span className="font-mono text-[10px]" style={{ color: 'var(--color-beni)' }}>
					{cssVar}
				</span>
				<span className="font-mono text-[10px]" style={{ color: 'var(--color-hai)' }}>
					{role}
				</span>
			</div>
		</div>
	);
};

export default EasingCurvePlot;
