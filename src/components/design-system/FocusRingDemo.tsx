import { useState } from 'react';

const FOCUS_STYLE: React.CSSProperties = {
	outline: '2px solid var(--color-beni)',
	outlineOffset: '2px',
};

const DARK_FOCUS_STYLE: React.CSSProperties = {
	outline: '2px solid var(--color-washi)',
	outlineOffset: '2px',
};

interface DemoRowProps {
	label: string;
	dark?: boolean;
}

const DemoRow = ({ label, dark }: DemoRowProps) => {
	const [focused, setFocused] = useState<string | null>(null);

	const bg = dark ? 'var(--color-yoru)' : 'var(--color-kiri)';
	const text = dark ? 'var(--color-washi)' : 'var(--color-sumi)';
	const ring = dark ? DARK_FOCUS_STYLE : FOCUS_STYLE;
	const border = dark ? 'var(--color-nezumi)' : 'var(--color-usuzumi)';

	return (
		<div className="overflow-hidden rounded-md" style={{ backgroundColor: bg }}>
			<div
				className="flex flex-col gap-1 px-3 py-2"
				style={{ borderBottom: `1px solid ${border}` }}
			>
				<span
					className="font-mono text-[10px] uppercase tracking-wider"
					style={{ color: dark ? 'var(--color-hai)' : 'var(--color-nezumi)' }}
				>
					{label}
				</span>
			</div>
			<div className="flex flex-wrap items-center gap-6 p-6">
				{/* Button */}
				<div className="flex flex-col items-start gap-2">
					<button
						style={{
							...(focused === 'button' ? ring : {}),
							backgroundColor: 'var(--color-beni)',
							color: '#fff',
							border: 'none',
							borderRadius: 'var(--radius-4)',
							padding: '8px 16px',
							fontFamily: 'var(--font-sans)',
							fontSize: 'var(--text-2)',
							cursor: 'pointer',
						}}
						onFocus={() => setFocused('button')}
						onBlur={() => setFocused(null)}
					>
						Primary Button
					</button>
					<span className="font-mono text-[9px]" style={{ color: 'var(--color-hai)' }}>
						{focused === 'button' ? 'focused' : 'unfocused'}
					</span>
				</div>
				{/* Link */}
				<div className="flex flex-col items-start gap-2">
					<a
						href="#"
						style={{
							...(focused === 'link' ? ring : {}),
							color: 'var(--color-beni)',
							fontFamily: 'var(--font-sans)',
							fontSize: 'var(--text-3)',
							textDecoration: 'underline',
						}}
						onFocus={() => setFocused('link')}
						onBlur={() => setFocused(null)}
						onClick={(e) => e.preventDefault()}
					>
						Text link
					</a>
					<span className="font-mono text-[9px]" style={{ color: 'var(--color-hai)' }}>
						{focused === 'link' ? 'focused' : 'unfocused'}
					</span>
				</div>
				{/* Input */}
				<div className="flex flex-col items-start gap-2">
					<input
						type="text"
						placeholder="Input field"
						style={{
							...(focused === 'input' ? ring : {}),
							backgroundColor: dark ? 'var(--color-sumi)' : 'var(--color-washi)',
							color: text,
							border: `1px solid ${border}`,
							borderRadius: 'var(--radius-2)',
							padding: '6px 10px',
							fontFamily: 'var(--font-sans)',
							fontSize: 'var(--text-2)',
							outline: focused === 'input' ? undefined : 'none',
						}}
						onFocus={() => setFocused('input')}
						onBlur={() => setFocused(null)}
					/>
					<span className="font-mono text-[9px]" style={{ color: 'var(--color-hai)' }}>
						{focused === 'input' ? 'focused' : 'unfocused'}
					</span>
				</div>
			</div>
		</div>
	);
};

export const FocusRingDemo = () => (
	<div className="flex flex-col gap-4">
		<DemoRow label="Light background — Beni focus ring" />
		<DemoRow label="Dark background — Washi focus ring" dark />
	</div>
);

export default FocusRingDemo;
