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
	text: string;
}

export const Pullquote: FunctionalComponent<Props> = ({
	author,
	children,
	class: className,
	lang = 'en',
	source,
	sourceUrl,
	text,
	...props
}) => {
	const classes = cx('pullquote mbe-10 p-9 text-center', className);

	return (
		<blockquote lang={lang} class={classes} {...props}>
			<p dangerouslySetInnerHTML={{ __html: text }} />
			{(author || source) && (
				<footer class="text-2 font-normal opacity-60 mbs-6">
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
