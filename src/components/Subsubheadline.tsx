import cx from 'classnames';

import type { ComponentChild, FunctionalComponent } from 'preact';

interface Props {
	as?: any;
	class?: string;
	children: ComponentChild;
}

export const Subsubheadline: FunctionalComponent<Props> = ({
	as = 'h4',
	class: className,
	children,
	...props
}) => {
	const Tag = as;
	const classes = cx(
		'text-3 font-black tracking-tight mbe-5 dark:font-extrabold [text-wrap:balance]',
		className
	);

	return (
		<Tag class={classes} {...props}>
			{children}
		</Tag>
	);
};
