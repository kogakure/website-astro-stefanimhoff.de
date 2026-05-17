type UmamiEventData = Record<string, string | number | boolean>;
type UmamiFn = (_name: string, _data?: UmamiEventData) => void | Promise<void>;
type UmamiTracker = UmamiFn | { track?: UmamiFn };

export const trackEvent = (name: string, data?: UmamiEventData): void => {
	if (typeof window === 'undefined') return;
	try {
		const umami = (window as typeof globalThis & { umami?: UmamiTracker }).umami;
		if (typeof umami === 'function') void umami(name, data);
		else if (umami && typeof umami.track === 'function') void umami.track(name, data);
	} catch {
		// analytics must never throw
	}
};

export const queryLengthBucket = (q: string): 'short' | 'medium' | 'long' => {
	const len = q.trim().length;
	if (len <= 3) return 'short';
	if (len <= 10) return 'medium';
	return 'long';
};

export const resultCountBucket = (n: number): '0' | '1-3' | '4-8' | '9+' => {
	if (n === 0) return '0';
	if (n <= 3) return '1-3';
	if (n <= 8) return '4-8';
	return '9+';
};
