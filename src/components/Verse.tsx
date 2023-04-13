import cx from 'classnames';

import type { ComponentChild, FunctionalComponent } from 'preact';

interface Props {
	class?: string;
	children: ComponentChild;
	variant?: 'center' | 'left';
}

export const Verse: FunctionalComponent<Props> = ({
	class: className,
	children,
	variant = 'center',
	...props
}) => {
	const classes = cx(
		'flex italic [&_p]:mbe-0',
		{
			'm-10': variant === 'center',
			'mbs-10 mbe-10 mis-0 mie-0': variant === 'left',
		},
		className
	);
	const preClasses = cx('font-sans mis-0 mie-0 whitespace-pre', {
		'mbs-auto mbe-auto': variant === 'center',
	});

	return (
		<blockquote class={classes} {...props}>
			<pre class={preClasses}>{children}</pre>
		</blockquote>
	);
};
