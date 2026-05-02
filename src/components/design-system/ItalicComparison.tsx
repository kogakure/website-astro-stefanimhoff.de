const SAMPLE = 'The space between things is the substance of design.';

export const ItalicComparison = () => (
	<div className="grid gap-4 md:grid-cols-2">
		<div
			className="overflow-hidden rounded-md"
			style={{ backgroundColor: 'var(--color-kiri)' }}
		>
			<div className="p-6">
				<p
					style={{
						fontFamily: 'var(--font-display)',
						fontSize: 'var(--text-6)',
						lineHeight: 1.15,
						fontWeight: 700,
						fontStyle: 'italic',
						color: 'var(--color-sumi)',
						margin: 0,
					}}
				>
					{SAMPLE}
				</p>
			</div>
			<div className="px-6 py-3" style={{ borderTop: '1px solid var(--color-usuzumi)' }}>
				<span className="font-mono text-xs" style={{ color: 'var(--color-beni)' }}>
					Boska Italic
				</span>
				<span className="mis-4 font-mono text-xs" style={{ color: 'var(--color-hai)' }}>
					True cursive · swash characters · display only
				</span>
			</div>
		</div>

		<div
			className="overflow-hidden rounded-md"
			style={{ backgroundColor: 'var(--color-kiri)' }}
		>
			<div className="p-6">
				<p
					style={{
						fontFamily: 'var(--font-sans)',
						fontSize: 'var(--text-6)',
						lineHeight: 1.15,
						fontStyle: 'italic',
						color: 'var(--color-sumi)',
						margin: 0,
					}}
				>
					{SAMPLE}
				</p>
			</div>
			<div className="px-6 py-3" style={{ borderTop: '1px solid var(--color-usuzumi)' }}>
				<span className="font-mono text-xs" style={{ color: 'var(--color-beni)' }}>
					Switzer Italic
				</span>
				<span className="mis-4 font-mono text-xs" style={{ color: 'var(--color-hai)' }}>
					Slanted roman · body &amp; UI emphasis
				</span>
			</div>
		</div>
	</div>
);

export default ItalicComparison;
