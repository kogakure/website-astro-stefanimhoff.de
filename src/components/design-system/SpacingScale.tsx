interface SpacingEntry {
	token: string;
	maxPx: number;
	use: string;
}

const entries: SpacingEntry[] = [
	{ token: 'spacing-1', maxPx: 4, use: 'Tight gaps — icon + label, inline' },
	{ token: 'spacing-2', maxPx: 8, use: 'Default gap — tags, metadata' },
	{ token: 'spacing-3', maxPx: 12, use: 'Compact component padding' },
	{ token: 'spacing-4', maxPx: 16, use: 'Standard padding, mobile margins' },
	{ token: 'spacing-5', maxPx: 20, use: 'Component internal spacing' },
	{ token: 'spacing-6', maxPx: 24, use: 'Tablet gutters, list item gap' },
	{ token: 'spacing-7', maxPx: 28, use: 'Medium component gap' },
	{ token: 'spacing-8', maxPx: 32, use: 'Desktop gutters and margins' },
	{ token: 'spacing-10', maxPx: 40, use: 'Section padding (small)' },
	{ token: 'spacing-12', maxPx: 48, use: 'Typographic block separation' },
	{ token: 'spacing-16', maxPx: 64, use: 'Major section breaks' },
	{ token: 'spacing-20', maxPx: 80, use: 'Hero sub-section spacing' },
	{ token: 'spacing-24', maxPx: 96, use: 'Hero whitespace' },
	{ token: 'spacing-32', maxPx: 128, use: 'Maximum vertical ma — Seijaku' },
];

const MAX_PX = 128;

export const SpacingScale = () => (
	<div className="flex flex-col gap-2">
		{entries.map((entry) => (
			<div key={entry.token} className="flex items-center gap-4">
				<span
					className="w-28 shrink-0 font-mono text-[11px]"
					style={{ color: 'var(--color-beni)' }}
				>
					{entry.token}
				</span>
				<div className="flex min-w-0 flex-1 items-center gap-3">
					<div className="min-w-0 flex-1">
						<div
							className="h-4 rounded-sm"
							style={{
								width: `${(entry.maxPx / MAX_PX) * 100}%`,
								maxWidth: '100%',
								backgroundColor: 'var(--color-beni)',
								opacity: 0.7 + (entry.maxPx / MAX_PX) * 0.3,
							}}
						/>
					</div>
					<span
						className="w-10 shrink-0 font-mono text-[11px]"
						style={{ color: 'var(--color-hai)' }}
					>
						{entry.maxPx}px
					</span>
				</div>
				<span
					className="hidden w-56 shrink-0 text-[11px] md:block"
					style={{ color: 'var(--color-hai)' }}
				>
					{entry.use}
				</span>
			</div>
		))}
	</div>
);

export default SpacingScale;
