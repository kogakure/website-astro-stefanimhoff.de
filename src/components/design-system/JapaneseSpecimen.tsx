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
	<div className="bg-kiri dark:bg-sumi overflow-hidden rounded-md" data-ma="JapaneseSpecimen">
		<div className="flex flex-col">
			{lines.map((line, i) => (
				<div
					key={line.japanese}
					className={`flex flex-col gap-1 p-5 md:p-6${i > 0 ? 'border-usuzumi dark:border-nezumi border-bs-1' : ''}`}
				>
					<p
						lang="ja"
						className="text-sumi dark:text-washi"
						style={{
							fontFamily: 'var(--font-japanese)',
							fontSize: i === 0 ? 'var(--text-7)' : 'var(--text-5)',
							lineHeight: i === 0 ? 1.1 : 1.3,
							margin: 0,
						}}
					>
						{line.japanese}
					</p>
					<div className="flex flex-wrap gap-x-4 gap-y-0.5">
						<span className="text-nezumi font-mono text-xs italic">{line.romaji}</span>
						<span className="text-hai font-mono text-xs">{line.translation}</span>
					</div>
				</div>
			))}
		</div>
		<div className="border-usuzumi dark:border-nezumi border-bs-1 pli-6 pbl-3">
			<span className="text-beni dark:text-beni-light font-mono text-xs">
				--font-japanese
			</span>
			<span className="mis-4 text-hai font-mono text-[10px]">
				Toppan Bunkyu Midashi Mincho · YuMincho · Hiragino Mincho ProN · Noto Serif JP
			</span>
		</div>
	</div>
);

export default JapaneseSpecimen;
