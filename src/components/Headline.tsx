import cx from 'classnames';

import type { ComponentChild, FunctionalComponent } from 'preact';

interface Props {
	as?: any;
	class?: string;
	children: ComponentChild;
}

export const Headline: FunctionalComponent<Props> = ({
	as = 'h2',
	class: className,
	children,
	...props
}) => {
	const Tag = as;
	const classes = cx(
		'text-5 font-black tracking-tight mbe-10 mbs-12 dark:font-extrabold [text-wrap:balance]',
		className
	);

	return (
		<Tag class={classes} {...props}>
			{children}
		</Tag>
	);
};
