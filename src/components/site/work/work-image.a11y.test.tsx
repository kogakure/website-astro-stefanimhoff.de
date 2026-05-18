/** @vitest-environment happy-dom */

import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { axe } from '@/test/a11y';

import { WorkImage } from './WorkImage';

describe('WorkImage — axe', () => {
	it('has no a11y violations', async () => {
		const { container } = render(
			<WorkImage src="/assets/images/work/img1.webp" alt="Project screenshot" />
		);
		expect(await axe(container)).toHaveNoViolations();
	});
});
