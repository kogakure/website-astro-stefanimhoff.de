const SAMPLE = 'The space between things is the substance of design.';

export const ItalicComparison = () => (
	<div className="grid gap-4 md:grid-cols-2">
		<div className="bg-kiri dark:bg-sumi overflow-hidden rounded-md">
			<div className="p-6">
				<p
					className="text-sumi dark:text-washi"
					style={{
						fontFamily: 'var(--font-display)',
						fontSize: 'var(--text-6)',
						lineHeight: 1.15,
						fontWeight: 700,
						fontStyle: 'italic',
						margin: 0,
					}}
				>
					{SAMPLE}
				</p>
			</div>
			<div className="border-usuzumi dark:border-nezumi border-t px-6 py-3">
				<span className="text-beni dark:text-beni-light font-mono text-xs">
					Boska Italic
				</span>
				<span className="mis-4 text-hai font-mono text-xs">
					True cursive · swash characters · display only
				</span>
			</div>
		</div>

		<div className="bg-kiri dark:bg-sumi overflow-hidden rounded-md">
			<div className="p-6">
				<p
					className="text-sumi dark:text-washi"
					style={{
						fontFamily: 'var(--font-sans)',
						fontSize: 'var(--text-6)',
						lineHeight: 1.15,
						fontStyle: 'italic',
						margin: 0,
					}}
				>
					{SAMPLE}
				</p>
			</div>
			<div className="border-usuzumi dark:border-nezumi border-t px-6 py-3">
				<span className="text-beni dark:text-beni-light font-mono text-xs">
					Switzer Italic
				</span>
				<span className="mis-4 text-hai font-mono text-xs">
					Slanted roman · body &amp; UI emphasis
				</span>
			</div>
		</div>
	</div>
);

export default ItalicComparison;
