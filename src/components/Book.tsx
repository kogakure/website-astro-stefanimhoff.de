import cx from 'classnames';

import type { FunctionalComponent, JSX } from 'preact';

interface Props extends JSX.HTMLAttributes<HTMLImageElement> {
	alt?: string;
	class?: string;
	src: string;
}

export const Book: FunctionalComponent<Props> = ({ alt = '', class: className, src, ...props }) => {
	const classes = cx(
		"image-shadow relative box-border grid h-auto max-w-[250px] shrink grow justify-self-center overflow-hidden align-bottom shadow-book before:absolute before:z-10 before:block before:h-full before:w-[0.5em] before:bg-gradient-to-r before:from-black/30 before:to-transparent before:shadow-book-before before:content-[''] before:rounded-is-1",
		className
	);

	return (
		<div class={classes} tabIndex={0}>
			<img alt={alt} src={src} {...props} />
		</div>
	);
};
