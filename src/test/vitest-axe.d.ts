/* eslint-disable no-unused-vars */
import type AxeCore from 'axe-core';
import 'vitest';

interface AxeMatchers {
	toHaveNoViolations(): { message(): string; pass: boolean; actual: AxeCore.Result[] };
}

declare module 'vitest' {
	interface Assertion<T = unknown> extends AxeMatchers {}
	interface AsymmetricMatchersContaining extends AxeMatchers {}
}
