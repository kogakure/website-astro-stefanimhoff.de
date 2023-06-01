import cx from 'classnames';

import type { FunctionalComponent, JSX } from 'preact';

import { Link } from '.';

interface Props extends JSX.HTMLAttributes<HTMLAnchorElement> {}

export const TextLink: FunctionalComponent<Props> = ({
	class: className,
	children,
	...props
}: Props) => {
	const classes = cx(
		'inline font-semibold text-shibui-950 underline decoration-shibui-900/20 decoration-4 underline-offset-auto no-common-ligatures hover:!decoration-accent focus:!decoration-accent dark:text-shibui-200/[0.87] dark:decoration-shibui-100/20',
		className as string
	);

	return (
		<Link class={classes} {...props}>
			{children}
		</Link>
	);
};
