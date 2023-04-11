import cx from 'classnames';

import type { ComponentChild, FunctionalComponent } from 'preact';

interface Props {
	as?: any;
	class?: string;
	children: ComponentChild;
}

export const Subheadline: FunctionalComponent<Props> = ({
	as = 'h3',
	class: className,
	children,
	...props
}) => {
	const Tag = as;
	const classes = cx(
		'text-4 font-black tracking-tight mbe-8 mbs-12 dark:font-extrabold [text-wrap:balance]',
		className
	);

	return (
		<Tag class={classes} {...props}>
			{children}
		</Tag>
	);
};
