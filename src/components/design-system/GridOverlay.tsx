'use client';

import { useState } from 'react';

type View = 'mobile' | 'tablet' | 'desktop';

const views: { id: View; label: string; cols: number; margins: string; gutters: string }[] = [
	{ id: 'mobile', label: 'Mobile · 3 col', cols: 3, margins: '16px', gutters: '16px' },
	{ id: 'tablet', label: 'Tablet · 6 col', cols: 6, margins: '32px', gutters: '24px' },
	{ id: 'desktop', label: 'Desktop · 12 col', cols: 12, margins: '32px', gutters: '32px' },
];

export const GridOverlay = () => {
	const [active, setActive] = useState<View>('desktop');
	const view = views.find((v) => v.id === active)!;

	return (
		<div className="flex flex-col gap-4">
			<div className="flex gap-2">
				{views.map((v) => (
					<button
						key={v.id}
						onClick={() => setActive(v.id)}
						className={`pli-3 pbl-1.5 rounded font-mono text-xs transition-colors ${
							active === v.id
								? 'bg-beni dark:bg-beni-light border-beni dark:border-beni-light border text-white'
								: 'bg-kiri dark:bg-sumi border-usuzumi dark:border-nezumi text-nezumi border'
						}`}
					>
						{v.label}
					</button>
				))}
			</div>

			<div className="bg-kiri dark:bg-sumi overflow-hidden rounded-md">
				<div
					style={{
						display: 'grid',
						gridTemplateColumns: `repeat(${view.cols}, 1fr)`,
						gap: view.gutters,
						padding: `24px ${view.margins}`,
					}}
				>
					{Array.from({ length: view.cols }).map((_, i) => (
						<div
							key={i}
							style={{
								height: '80px',
								backgroundColor: 'var(--color-beni-pale)',
								borderRadius: '2px',
								border: '1px solid var(--color-beni-muted)',
								opacity: 0.6,
							}}
						/>
					))}
				</div>

				<div className="border-usuzumi dark:border-nezumi border-bs-1 pli-4 pbl-3 flex flex-wrap gap-x-6 gap-y-1">
					<span className="text-beni dark:text-beni-light font-mono text-[11px]">
						{view.cols} columns
					</span>
					<span className="text-hai font-mono text-[11px]">{view.gutters} gutter</span>
					<span className="text-hai font-mono text-[11px]">{view.margins} margin</span>
					{active === 'desktop' && (
						<span className="text-hai font-mono text-[11px]">1440px max</span>
					)}
				</div>
			</div>
		</div>
	);
};

export default GridOverlay;
