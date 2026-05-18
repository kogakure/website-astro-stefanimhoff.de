export function computeLightboxSize(
	naturalWidth: number,
	naturalHeight: number,
	vw: number,
	vh: number
): { width: number; height: number; left: number; top: number } {
	const safeNW = naturalWidth > 0 ? naturalWidth : vw;
	const safeNH = naturalHeight > 0 ? naturalHeight : vh;
	const maxW = Math.min(vw * 0.9, safeNW);
	const maxH = Math.min(vh * 0.9, safeNH);
	const ratio = safeNW / safeNH;
	let width = maxW;
	let height = width / ratio;
	if (height > maxH) {
		height = maxH;
		width = height * ratio;
	}
	return { width, height, left: (vw - width) / 2, top: (vh - height) / 2 };
}
