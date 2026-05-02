'use client';

import { useState } from 'react';

const tokens = [
	{ label: 'spacing-1 · 4px', value: '4px' },
	{ label: 'spacing-2 · 8px', value: '8px' },
	{ label: 'spacing-3 · 12px', value: '12px' },
	{ label: 'spacing-4 · 16px', value: '16px' },
	{ label: 'spacing-6 · 24px', value: '24px' },
	{ label: 'spacing-8 · 32px', value: '32px' },
	{ label: 'spacing-12 · 48px', value: '48px' },
	{ label: 'spacing-16 · 64px', value: '64px' },
	{ label: 'spacing-24 · 96px', value: '96px' },
	{ label: 'spacing-32 · 128px', value: '128px' },
];

const selectStyle: React.CSSProperties = {
	fontFamily: 'var(--font-mono)',
	fontSize: '0.75rem',
	color: 'var(--color-sumi)',
	backgroundColor: 'var(--color-kiri)',
	border: '1px solid var(--color-usuzumi)',
	borderRadius: '4px',
	padding: '6px 10px',
	outline: 'none',
};

export const SpacingPicker = () => {
	const [gapIdx, setGapIdx] = useState(4);
	const [padIdx, setPadIdx] = useState(3);

	const gap = tokens[gapIdx].value;
	const pad = tokens[padIdx].value;

	return (
		<div className="flex flex-col gap-5">
			<div className="flex flex-wrap gap-6">
				<label className="flex flex-col gap-1.5">
					<span className="font-mono text-[11px]" style={{ color: 'var(--color-hai)' }}>
						Gap between elements
					</span>
					<select
						value={gapIdx}
						onChange={(e) => setGapIdx(Number(e.target.value))}
						style={selectStyle}
					>
						{tokens.map((t, i) => (
							<option key={t.value} value={i}>
								{t.label}
							</option>
						))}
					</select>
				</label>
				<label className="flex flex-col gap-1.5">
					<span className="font-mono text-[11px]" style={{ color: 'var(--color-hai)' }}>
						Container padding
					</span>
					<select
						value={padIdx}
						onChange={(e) => setPadIdx(Number(e.target.value))}
						style={selectStyle}
					>
						{tokens.map((t, i) => (
							<option key={t.value} value={i}>
								{t.label}
							</option>
						))}
					</select>
				</label>
			</div>

			<div
				className="overflow-hidden rounded-md"
				style={{
					backgroundColor: 'var(--color-kiri)',
					padding: pad,
					border: '1px solid var(--color-usuzumi)',
				}}
			>
				<div className="flex flex-col" style={{ gap }}>
					{['Element A', 'Element B', 'Element C'].map((label) => (
						<div
							key={label}
							className="flex items-center rounded"
							style={{
								backgroundColor: 'var(--color-washi)',
								border: '1px solid var(--color-usuzumi)',
								padding: '12px 16px',
								color: 'var(--color-sumi)',
								fontSize: 'var(--text-2)',
								fontFamily: 'var(--font-sans)',
							}}
						>
							{label}
						</div>
					))}
				</div>
				<div
					className="mt-4 flex gap-4 font-mono text-[11px]"
					style={{ color: 'var(--color-hai)' }}
				>
					<span>
						gap: <span style={{ color: 'var(--color-beni)' }}>{gap}</span>
					</span>
					<span>
						padding: <span style={{ color: 'var(--color-beni)' }}>{pad}</span>
					</span>
				</div>
			</div>
		</div>
	);
};

export default SpacingPicker;
