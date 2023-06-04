import cx from 'classnames';

import type { ComponentChild, FunctionalComponent } from 'preact';

interface Props {
	caption?: string;
	children: ComponentChild;
	class?: string;
	size?: 'regular' | 'wide' | 'fullsize';
}

export const Figure: FunctionalComponent<Props> = ({
	children,
	class: className,
	caption,
	size = 'regular',
	...props
}) => {
	const classes = cx(
		'rounded-4 bg-white/50 p-8 mbe-13 mbs-0 mie-0 mis-0 dark:bg-black/80',
		{ 'figure-wide': size === 'wide', 'figure-fullsize': size === 'fullsize' },
		className
	);

	return (
		<figure class={classes} {...props}>
			<div>{children}</div>
			{caption && (
				<figcaption class="text-center text-2 mbs-2 [text-wrap:balance]">
					{caption}
				</figcaption>
			)}
		</figure>
	);
};
