interface Props {
	token: string;
	font: 'display' | 'sans' | 'mono' | 'japanese';
	sampleText?: string;
	role: string;
	size: string;
	lineHeight: string;
	tracking?: string;
	weight?: string;
}

const fontFamilyMap: Record<string, string> = {
	display: 'var(--font-display)',
	sans: 'var(--font-sans)',
	mono: 'var(--font-mono)',
	japanese: 'var(--font-japanese)',
};

export const TypeSpecimen = ({
	token,
	font,
	sampleText,
	role,
	size,
	lineHeight,
	tracking,
	weight = 'normal',
}: Props) => {
	const text = sampleText ?? 'The space between.';

	return (
		<div
			className="overflow-hidden rounded-md"
			style={{ backgroundColor: 'var(--color-kiri)' }}
		>
			<div className="p-6 md:p-8">
				<p
					style={{
						fontFamily: fontFamilyMap[font],
						fontSize: `var(--${token})`,
						lineHeight,
						letterSpacing: tracking
							? `calc(${tracking.replace('−', '-').replace('%', '')} * 0.01em)`
							: undefined,
						fontWeight: weight,
						color: 'var(--color-sumi)',
						margin: 0,
					}}
				>
					{text}
				</p>
			</div>
			<div
				className="flex flex-wrap gap-x-6 gap-y-1 px-6 py-3"
				style={{ borderTop: '1px solid var(--color-usuzumi)' }}
			>
				<span className="font-mono text-xs" style={{ color: 'var(--color-beni)' }}>
					{token}
				</span>
				<span className="font-mono text-xs" style={{ color: 'var(--color-hai)' }}>
					{role}
				</span>
				<span className="font-mono text-xs" style={{ color: 'var(--color-hai)' }}>
					{size}
				</span>
				<span className="font-mono text-xs" style={{ color: 'var(--color-hai)' }}>
					lh {lineHeight}
				</span>
				{tracking && (
					<span className="font-mono text-xs" style={{ color: 'var(--color-hai)' }}>
						tr {tracking}
					</span>
				)}
			</div>
		</div>
	);
};

export default TypeSpecimen;
