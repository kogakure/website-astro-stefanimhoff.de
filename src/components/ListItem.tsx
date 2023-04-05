import cx from 'classnames';

import type { ComponentChild, FunctionalComponent } from 'preact';

interface Props {
	class?: string;
	children: ComponentChild;
}

export const ListItem: FunctionalComponent<Props> = ({ class: className, children, ...props }) => {
	const classes = cx('mbe-2', className);

	return (
		<li class={classes} {...props}>
			{children}
		</li>
	);
};
