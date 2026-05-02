interface ScaleEntry {
	token: string;
	role: string;
	maxSize: string;
	lineHeight: string;
	tracking: string;
	font: 'display' | 'sans';
	cssVar: string;
}

const scale: ScaleEntry[] = [
	{
		token: 'text-9',
		role: 'H1 Page Title',
		maxSize: '144px',
		lineHeight: '0.95',
		tracking: '−25%',
		font: 'display',
		cssVar: '--text-9',
	},
	{
		token: 'text-8',
		role: 'Blog Title',
		maxSize: '96px',
		lineHeight: '1.0',
		tracking: '−15%',
		font: 'display',
		cssVar: '--text-8',
	},
	{
		token: 'text-7',
		role: 'H2 Section',
		maxSize: '72px',
		lineHeight: '1.1',
		tracking: '−10%',
		font: 'sans',
		cssVar: '--text-7',
	},
	{
		token: 'text-6',
		role: 'H3 Section',
		maxSize: '48px',
		lineHeight: '1.15',
		tracking: '−5%',
		font: 'sans',
		cssVar: '--text-6',
	},
	{
		token: 'text-5',
		role: 'H2 Blog / Subtitle',
		maxSize: '40px',
		lineHeight: '1.15',
		tracking: '−5%',
		font: 'sans',
		cssVar: '--text-5',
	},
	{
		token: 'text-4',
		role: 'H3 Blog',
		maxSize: '28px',
		lineHeight: '1.2',
		tracking: '−2%',
		font: 'sans',
		cssVar: '--text-4',
	},
	{
		token: 'text-3',
		role: 'Paragraph',
		maxSize: '18px',
		lineHeight: '1.55',
		tracking: '−2%',
		font: 'sans',
		cssVar: '--text-3',
	},
	{
		token: 'text-2',
		role: 'Caption / Footnote',
		maxSize: '14px',
		lineHeight: '1.4',
		tracking: '0',
		font: 'sans',
		cssVar: '--text-2',
	},
	{
		token: 'text-code',
		role: 'Code',
		maxSize: '15px',
		lineHeight: '1.625',
		tracking: '0',
		font: 'sans',
		cssVar: '--text-code',
	},
];

const SAMPLE = 'The space between';

export const TypeScale = () => (
	<div className="mbe-0 flex flex-col" style={{ borderTop: '1px solid var(--color-usuzumi)' }}>
		{scale.map((entry) => (
			<div
				key={entry.token}
				className="flex flex-col gap-2 py-5 md:flex-row md:items-baseline md:gap-8"
				style={{ borderBottom: '1px solid var(--color-usuzumi)' }}
			>
				<div className="flex shrink-0 flex-col gap-0.5 md:w-40">
					<span className="font-mono text-xs" style={{ color: 'var(--color-beni)' }}>
						{entry.token}
					</span>
					<span className="font-mono text-[10px]" style={{ color: 'var(--color-hai)' }}>
						{entry.role}
					</span>
					<span className="font-mono text-[10px]" style={{ color: 'var(--color-hai)' }}>
						{entry.maxSize} · lh {entry.lineHeight} · tr {entry.tracking}
					</span>
				</div>
				<div className="min-w-0 flex-1 overflow-hidden">
					<span
						className="block truncate"
						style={{
							fontSize: `var(${entry.cssVar})`,
							lineHeight: entry.lineHeight,
							fontFamily:
								entry.font === 'display'
									? 'var(--font-display)'
									: entry.token === 'text-code'
										? 'var(--font-mono)'
										: 'var(--font-sans)',
							color: 'var(--color-sumi)',
							letterSpacing:
								entry.tracking !== '0'
									? `calc(${entry.tracking.replace('−', '-').replace('%', '')} * 0.001em)`
									: undefined,
						}}
					>
						{SAMPLE}
					</span>
				</div>
			</div>
		))}
	</div>
);

export default TypeScale;
