export const PhosphorNote = () => (
	<div className="overflow-hidden rounded-md" style={{ backgroundColor: 'var(--color-kiri)' }}>
		<div className="flex flex-col gap-4 p-6 md:flex-row md:items-start md:gap-8">
			<div className="shrink-0">
				<div
					className="font-mono text-xs font-medium"
					style={{ color: 'var(--color-beni)' }}
				>
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
							<div
								className="font-mono text-[11px]"
								style={{ color: 'var(--color-sumi)' }}
							>
								{item.value}
							</div>
						</div>
					))}
				</div>
				<div
					className="border-t pt-3 font-mono text-[10px]"
					style={{
						borderColor: 'var(--color-usuzumi)',
						color: 'var(--color-hai)',
					}}
				>
					Icons do not replace text labels — they accompany them. Kanso: clarity over
					cleverness.
				</div>
			</div>
		</div>
	</div>
);

export default PhosphorNote;
