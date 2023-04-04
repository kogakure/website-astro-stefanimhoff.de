import cx from 'classnames';

import type { ComponentChild, FunctionalComponent } from 'preact';

interface Props {
	as?: any;
	class?: string;
	children: ComponentChild;
}

export const Text: FunctionalComponent<Props> = ({
	as = 'p',
	class: className,
	children,
	...props
}) => {
	const Tag = as;
	const classes = cx(
		'text-3 font-normal tracking-normal mbe-10 mbs-0 last-of-type:mbe-0 dark:font-light',
		className
	);

	return (
		<Tag class={classes} {...props}>
			{children}
		</Tag>
	);
};
