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
		<div className="bg-kiri dark:bg-sumi overflow-hidden rounded-md">
			<div className="p-6 md:p-8">
				<p
					className="text-sumi dark:text-washi"
					style={{
						fontFamily: fontFamilyMap[font],
						fontSize: `var(--${token})`,
						lineHeight,
						letterSpacing: tracking
							? `calc(${tracking.replace('−', '-').replace('%', '')} * 0.001em)`
							: undefined,
						fontWeight: weight,
						fontStyle: 'normal',
						margin: 0,
					}}
				>
					{text}
				</p>
			</div>
			<div className="border-usuzumi dark:border-nezumi border-bs-1 pli-6 pbl-3 flex flex-wrap gap-x-6 gap-y-1">
				<span className="text-beni dark:text-beni-light font-mono text-xs">{token}</span>
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
