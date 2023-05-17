import cx from 'classnames';

import type { ComponentChild, FunctionalComponent } from 'preact';

interface Props {
	class?: string;
	children: ComponentChild;
}

export const DisplayBox: FunctionalComponent<Props> = ({
	class: className,
	children,
	...props
}) => {
	const classes = cx('[&_img]:bg-gray-100 [&_img]:p-10', className);

	return (
		<div class={classes} {...props}>
			{children}
		</div>
	);
};
