import cx from 'classnames';

import type { ComponentChild, FunctionalComponent } from 'preact';

interface Props {
	class?: string;
	children: ComponentChild;
	summary: string;
	open?: boolean;
}

export const Banner: FunctionalComponent<Props> = ({
	class: className,
	children,
	open,
	summary,
	...props
}) => {
	const classes = cx(
		'rounded-2 bg-black/5 p-10 mbe-10 dark:bg-white/5 [&_p:last-of-type]:mbe-0',
		className
	);

	return (
		<aside class={classes} {...props}>
			<details open={open} class="group">
				<summary class="cursor-pointer font-black leading-4 tracking-tight group-open:mbe-8">
					{summary}
				</summary>
				{children}
			</details>
		</aside>
	);
};
