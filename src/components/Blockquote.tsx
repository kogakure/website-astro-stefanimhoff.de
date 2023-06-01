import cx from 'classnames';

import type { ComponentChild, FunctionalComponent, JSX } from 'preact';

import { TextLink } from '.';

interface Props extends JSX.HTMLAttributes<HTMLQuoteElement> {
	author?: string;
	children: ComponentChild;
	class?: string;
	lang?: string;
	source?: string;
	sourceUrl?: string;
}

export const Blockquote: FunctionalComponent<Props> = ({
	author,
	children,
	class: className,
	lang = 'en',
	source,
	sourceUrl,
	...props
}) => {
	const classes = cx(
		'relative overflow-hidden mbe-12 mbs-12 mie-8 mis-8 pie-8 pis-8 md:mie-10 md:mis-10',
		className
	);

	return (
		<blockquote lang={lang} class={classes} {...props}>
			{children}
			{(author || source) && (
				<footer class="text-2 font-normal opacity-60 mbs-6">
					{(author || source) && '—'}
					{author && <b class="font-normal">{author}</b>}
					{author && source && ', '}
					{source &&
						(sourceUrl ? (
							<cite>
								<TextLink href={sourceUrl}>{source}</TextLink>
							</cite>
						) : (
							<cite>{source}</cite>
						))}
				</footer>
			)}
		</blockquote>
	);
};
