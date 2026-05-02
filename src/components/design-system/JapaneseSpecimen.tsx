interface Line {
	japanese: string;
	romaji: string;
	translation: string;
}

const lines: Line[] = [
	{ japanese: '間', romaji: 'Ma', translation: 'The space between' },
	{
		japanese: '静寂の中に美しさがある',
		romaji: 'Seijaku no naka ni utsukushisa ga aru',
		translation: 'Beauty dwells within tranquility',
	},
	{ japanese: '墨と和紙', romaji: 'Sumi to washi', translation: 'Ink and Japanese paper' },
	{
		japanese: '不均齊の調和',
		romaji: 'Fukinsei no chōwa',
		translation: 'The harmony of asymmetry',
	},
];

export const JapaneseSpecimen = () => (
	<div className="overflow-hidden rounded-md" style={{ backgroundColor: 'var(--color-kiri)' }}>
		<div className="flex flex-col">
			{lines.map((line, i) => (
				<div
					key={i}
					className="flex flex-col gap-1 p-5 md:p-6"
					style={i > 0 ? { borderTop: '1px solid var(--color-usuzumi)' } : undefined}
				>
					<p
						lang="ja"
						style={{
							fontFamily: 'var(--font-japanese)',
							fontSize: i === 0 ? 'var(--text-7)' : 'var(--text-5)',
							lineHeight: i === 0 ? 1.1 : 1.3,
							color: 'var(--color-sumi)',
							margin: 0,
						}}
					>
						{line.japanese}
					</p>
					<div className="flex flex-wrap gap-x-4 gap-y-0.5">
						<span
							className="font-mono text-xs italic"
							style={{ color: 'var(--color-nezumi)' }}
						>
							{line.romaji}
						</span>
						<span className="font-mono text-xs" style={{ color: 'var(--color-hai)' }}>
							{line.translation}
						</span>
					</div>
				</div>
			))}
		</div>
		<div className="px-6 py-3" style={{ borderTop: '1px solid var(--color-usuzumi)' }}>
			<span className="font-mono text-xs" style={{ color: 'var(--color-beni)' }}>
				--font-japanese
			</span>
			<span className="mis-4 font-mono text-[10px]" style={{ color: 'var(--color-hai)' }}>
				Toppan Bunkyu Midashi Mincho · YuMincho · Hiragino Mincho ProN · Noto Serif JP
			</span>
		</div>
	</div>
);

export default JapaneseSpecimen;
