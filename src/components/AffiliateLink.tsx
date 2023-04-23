import cx from 'classnames';

import type { FunctionalComponent } from 'preact';

import { TextLink } from '.';

interface Props {
	asin: string;
	class?: string;
	text: string;
}

export const AffiliateLink: FunctionalComponent<Props> = ({
	asin,
	class: className,
	text,
	...props
}) => {
	const classes = cx('affiliate', className);
	const affiliateLink = `http://www.amazon.de/gp/product/${asin}?ie=UTF8&tag=stefanimhoffde-21&linkCode=as2&camp=1638&creative=6742&creativeASIN=${asin}`;

	return (
		<TextLink class={classes} href={affiliateLink} {...props}>
			{text}
		</TextLink>
	);
};
