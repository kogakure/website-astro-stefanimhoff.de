import cx from 'classnames';

import type { FunctionalComponent } from 'preact';

import { TextLink } from '.';

interface Props {
	asin: string;
	class?: string;
	text: string;
}

export const ProductLink: FunctionalComponent<Props> = ({
	asin,
	class: className,
	text,
	...props
}) => {
	const classes = cx('product', className);

	return (
		<TextLink class={classes} href={`https://www.amazon.de/gp/product/${asin}`} {...props}>
			{text}
		</TextLink>
	);
};
