import cx from 'classnames';

import type { ComponentChild, FunctionalComponent } from 'preact';

interface Props {
	class?: string;
	children: ComponentChild;
}

export const ProjectIntro: FunctionalComponent<Props> = ({
	class: className,
	children,
	...props
}) => {
	const classes = cx('max-w-[66ch]', className);

	return (
		<div class={classes} {...props}>
			{children}
		</div>
	);
};
