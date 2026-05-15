import type AxeCore from 'axe-core';
import { expect } from 'vitest';
import { axe as runAxeCore } from 'vitest-axe';
import * as matchers from 'vitest-axe/matchers';

expect.extend(matchers);

// Disable iframe scanning: cross-frame postMessage doesn't work in happy-dom.
export const axe = (
	element: Element | string,
	options?: AxeCore.RunOptions
): Promise<AxeCore.AxeResults> => runAxeCore(element, { iframes: false, ...options });
