import cx from 'classnames';

import type { ComponentChild, FunctionalComponent } from 'preact';

interface Props {
	class?: string;
	children: ComponentChild;
}

export const OrderedList: FunctionalComponent<Props> = ({
	class: className,
	children,
	...props
}) => {
	const classes = cx(
		'list-decimal text-3 mbe-12 pis-[1.5rem] md:pis-0 [li>&]:mbe-0 [li>&]:pis-[1.5rem]',
		className
	);

	return (
		<ol class={classes} {...props}>
			{children}
		</ol>
	);
};
