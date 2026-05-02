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
						className="rounded px-3 py-1.5 font-mono text-xs transition-colors"
						style={{
							backgroundColor:
								active === v.id ? 'var(--color-beni)' : 'var(--color-kiri)',
							color: active === v.id ? '#fff' : 'var(--color-nezumi)',
							border:
								active === v.id
									? '1px solid var(--color-beni)'
									: '1px solid var(--color-usuzumi)',
						}}
					>
						{v.label}
					</button>
				))}
			</div>

			<div
				className="overflow-hidden rounded-md"
				style={{ backgroundColor: 'var(--color-kiri)', padding: '0' }}
			>
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

				<div
					className="flex flex-wrap gap-x-6 gap-y-1 px-4 py-3"
					style={{ borderTop: '1px solid var(--color-usuzumi)' }}
				>
					<span className="font-mono text-[11px]" style={{ color: 'var(--color-beni)' }}>
						{view.cols} columns
					</span>
					<span className="font-mono text-[11px]" style={{ color: 'var(--color-hai)' }}>
						{view.gutters} gutter
					</span>
					<span className="font-mono text-[11px]" style={{ color: 'var(--color-hai)' }}>
						{view.margins} margin
					</span>
					{active === 'desktop' && (
						<span
							className="font-mono text-[11px]"
							style={{ color: 'var(--color-hai)' }}
						>
							1440px max
						</span>
					)}
				</div>
			</div>
		</div>
	);
};

export default GridOverlay;
