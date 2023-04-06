import cx from 'classnames';

import type { FunctionalComponent } from 'preact';

interface Props {
	class?: string;
}

export const Divider: FunctionalComponent<Props> = ({ class: className, ...props }) => {
	const classes = cx(
		'border-solid border-black/[0.1] mbe-14 mbs-14 border-bs-0 border-be-1 border-is-0 border-ie-0 dark:border-white/[0.1]',
		className
	);

	return <hr class={classes} {...props} />;
};
