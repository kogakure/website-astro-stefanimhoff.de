import cx from 'classnames';

import type { FunctionalComponent, JSX } from 'preact';

interface Props extends JSX.HTMLAttributes<HTMLAnchorElement> {}

export const Link: FunctionalComponent<Props> = ({
	class: className,
	children,
	href = '#',
	...props
}: Props) => {
	const isExternal = (href as string).startsWith('http');
	const classes = cx('link', { external: isExternal }, className as string);

	return (
		<a
			class={classes}
			href={href}
			rel={isExternal ? 'nofollow noopener noreferrer' : undefined}
			target={isExternal ? '_blank' : undefined}
			{...props}
		>
			{children}
		</a>
	);
};
