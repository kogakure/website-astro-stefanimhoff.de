export const PhosphorNote = () => (
	<div className="bg-kiri dark:bg-sumi overflow-hidden rounded-md">
		<div className="flex flex-col gap-4 p-6 md:flex-row md:items-start md:gap-8">
			<div className="shrink-0">
				<div className="text-beni dark:text-beni-light font-mono text-xs font-medium">
					Phosphor Icons
				</div>
				<div className="font-mono text-[10px]" style={{ color: 'var(--color-hai)' }}>
					phosphoricons.com · MIT
				</div>
			</div>
			<div className="flex flex-col gap-3">
				<div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
					{[
						{ rule: 'Weight', value: 'Regular only — 1.5 px stroke on 16 × 16 grid' },
						{ rule: 'Size', value: '24 × 24 px UI · 16 × 16 px inline with text' },
						{
							rule: 'Color',
							value: 'Sumi on light · Washi on dark · Beni for interactive states',
						},
					].map((item) => (
						<div key={item.rule}>
							<div
								className="font-mono text-[10px] font-medium uppercase tracking-wider"
								style={{ color: 'var(--color-nezumi)' }}
							>
								{item.rule}
							</div>
							<div className="text-sumi dark:text-washi font-mono text-[11px]">
								{item.value}
							</div>
						</div>
					))}
				</div>
				<div
					className="border-usuzumi dark:border-nezumi border-bs-1 pbs-3 font-mono text-[10px]"
					style={{ color: 'var(--color-hai)' }}
				>
					Icons do not replace text labels — they accompany them. Kanso: clarity over
					cleverness.
				</div>
			</div>
		</div>
	</div>
);

export default PhosphorNote;
