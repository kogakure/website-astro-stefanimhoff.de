/** @vitest-environment happy-dom */

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import ArrowCta from './ArrowCta';
import Hanko from './Hanko';

describe('icon components', () => {
	it('passes SVG props through ArrowCta', () => {
		render(<ArrowCta data-testid="arrow" aria-hidden="true" className="size-4" />);

		expect(screen.getByTestId('arrow').tagName).toBe('svg');
		expect(screen.getByTestId('arrow')).toHaveClass('size-4');
	});

	it('passes SVG props through Hanko', () => {
		render(<Hanko data-testid="hanko" role="img" aria-label="Hanko mark" />);

		expect(screen.getByRole('img', { name: 'Hanko mark' })).toBe(screen.getByTestId('hanko'));
	});
});
