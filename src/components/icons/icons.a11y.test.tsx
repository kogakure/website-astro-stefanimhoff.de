/** @vitest-environment happy-dom */

import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { axe } from '@/test/a11y';

import ArrowCta from './ArrowCta';
import Hanko from './Hanko';

describe('icons — axe', () => {
	it('ArrowCta has no a11y violations', async () => {
		const { container } = render(<ArrowCta aria-hidden="true" />);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('Hanko has no a11y violations', async () => {
		const { container } = render(<Hanko role="img" aria-label="Hanko seal" />);
		expect(await axe(container)).toHaveNoViolations();
	});
});
