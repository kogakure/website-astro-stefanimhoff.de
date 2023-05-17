import cx from 'classnames';

import type { ComponentChild, FunctionalComponent } from 'preact';

interface Props {
	class?: string;
	children: ComponentChild;
}

export const Tag: FunctionalComponent<Props> = ({ class: className, children, ...props }) => {
	const classes = cx(
		'inline-flex items-center justify-center rounded-25 border-2 border-shibui-350 bg-shibui-200 px-3 py-1 text-1 leading-none text-black mie-1 dark:border-shibui-750 dark:bg-shibui-950 dark:text-white',
		className
	);

	return (
		<span class={classes} {...props}>
			{children}
		</span>
	);
};
