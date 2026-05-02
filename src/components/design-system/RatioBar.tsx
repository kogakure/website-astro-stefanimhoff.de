export const RatioBar = () => (
	<div className="mbe-0">
		<div className="overflow-hidden rounded-md" style={{ height: '3rem' }}>
			<div className="flex h-full">
				<div
					className="flex items-center justify-center"
					style={{ width: '70%', backgroundColor: 'var(--color-kiri)' }}
				>
					<span
						className="font-mono text-xs font-medium"
						style={{ color: 'var(--color-nezumi)' }}
					>
						70%
					</span>
				</div>
				<div
					className="flex items-center justify-center"
					style={{ width: '25%', backgroundColor: 'var(--color-sumi)' }}
				>
					<span
						className="font-mono text-xs font-medium"
						style={{ color: 'var(--color-washi)' }}
					>
						25%
					</span>
				</div>
				<div
					className="flex items-center justify-center"
					style={{ width: '5%', backgroundColor: 'var(--color-beni)' }}
				>
					<span
						className="font-mono text-xs font-medium"
						style={{ color: 'var(--color-washi)' }}
					>
						5%
					</span>
				</div>
			</div>
		</div>
		<div className="mbs-3 flex gap-6">
			<div className="flex items-center gap-2">
				<span
					className="inline-block size-3 rounded-sm"
					style={{ backgroundColor: 'var(--color-kiri)' }}
				/>
				<span className="text-2 text-hai">Washi / Kiri — ground</span>
			</div>
			<div className="flex items-center gap-2">
				<span
					className="inline-block size-3 rounded-sm"
					style={{ backgroundColor: 'var(--color-sumi)' }}
				/>
				<span className="text-2 text-hai">Sumi — text & structure</span>
			</div>
			<div className="flex items-center gap-2">
				<span
					className="inline-block size-3 rounded-sm"
					style={{ backgroundColor: 'var(--color-beni)' }}
				/>
				<span className="text-2 text-hai">Beni — accent</span>
			</div>
		</div>
		<p className="text-2 text-hai mbs-2 mbe-0 italic">
			Use Beni sparingly — like the seal of a Hanko pressed once onto a page.
		</p>
	</div>
);

export default RatioBar;
