function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
	const clean = hex.replace('#', '');
	const full = clean.length === 3 ? clean.replace(/./g, (c) => c + c) : clean;
	if (full.length !== 6) return null;
	return {
		r: parseInt(full.slice(0, 2), 16),
		g: parseInt(full.slice(2, 4), 16),
		b: parseInt(full.slice(4, 6), 16),
	};
}

function linearize(channel: number): number {
	const c = channel / 255;
	return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}

export function getRelativeLuminance(hex: string): number {
	const rgb = hexToRgb(hex);
	if (!rgb) return 0;
	return 0.2126 * linearize(rgb.r) + 0.7152 * linearize(rgb.g) + 0.0722 * linearize(rgb.b);
}

export function getContrastColor(hex: string): 'light' | 'dark' {
	return getRelativeLuminance(hex) > 0.179 ? 'dark' : 'light';
}

export function isVeryLightColor(hex: string): boolean {
	return getRelativeLuminance(hex) > 0.85;
}

export function getContrastRatio(hex1: string, hex2: string): number {
	const l1 = getRelativeLuminance(hex1);
	const l2 = getRelativeLuminance(hex2);
	const lighter = Math.max(l1, l2);
	const darker = Math.min(l1, l2);
	return (lighter + 0.05) / (darker + 0.05);
}
