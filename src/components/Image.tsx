import cx from 'classnames';

import type { FunctionalComponent } from 'preact';

interface Props {
	alt: string;
	class?: string;
	noMargin?: boolean;
	src: string;
}

export const Image: FunctionalComponent<Props> = ({
	alt,
	class: className,
	noMargin,
	src,
	...props
}) => {
	const classes = cx('image-shadow mbe-10 mbs-0', { 'mbe-0': noMargin }, className);

	return (
		<div class={classes}>
			<img
				alt={alt}
				class="block h-auto w-full rounded-1 border-1 border-solid border-black/[0.1] bg-black/[0.1] shadow shadow-black/10 dark:border-white/[0.1] dark:opacity-[0.87] dark:shadow-white/10"
				src={src}
				{...props}
			/>
		</div>
	);
};
