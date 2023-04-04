import cx from 'classnames';

import type { ComponentChild, FunctionalComponent } from 'preact';

interface Props {
	as?: any;
	class?: string;
	children: ComponentChild;
}

export const Title: FunctionalComponent<Props> = ({
	as = 'h1',
	class: className,
	children,
	...props
}) => {
	const Tag = as;
	const classes = cx('text-7 font-black tracking-tight mbe-13 dark:font-extrabold', className);

	return (
		<Tag class={classes} {...props}>
			{children}
		</Tag>
	);
};
