import type AxeCore from 'axe-core';
import { expect } from 'vitest';
import { axe as runAxeCore } from 'vitest-axe';
import * as matchers from 'vitest-axe/matchers';

expect.extend(matchers);

// Disable iframe scanning and region rule: cross-frame postMessage doesn't work in
// happy-dom, and the region rule is not meaningful for isolated component fragments.
export const axe = (
	element: Element | string,
	options?: AxeCore.RunOptions
): Promise<AxeCore.AxeResults> =>
	runAxeCore(element, {
		iframes: false,
		rules: { region: { enabled: false } },
		...options,
	});
