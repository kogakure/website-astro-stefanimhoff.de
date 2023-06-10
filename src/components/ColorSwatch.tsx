import cx from 'classnames';

import type { FunctionalComponent, JSX } from 'preact';
import { useState } from 'preact/hooks';

import { Subheadline, Text } from '.';

interface ColorCardProps extends JSX.HTMLAttributes<HTMLDivElement> {
	class?: string;
}

interface Props extends JSX.HTMLAttributes<HTMLDivElement> {
	class?: string;
	color: string;
	title?: string;
	description?: string;
}

const ColorCard: FunctionalComponent<ColorCardProps> = ({
	class: className,
	children,
	...props
}) => {
	const classes = cx(
		'absolute box-border h-[100vw] max-h-[200px] w-full max-w-[300px] rounded-25 bg-white shadow-book inline-start-0 block-start-0 [perspective:500px] [backface-visibility:hidden] dark:bg-black dark:border-[1px] dark:border-white/20',
		className
	);

	return (
		<div class={classes} {...props}>
			{children}
		</div>
	);
};

export const ColorSwatch: FunctionalComponent<Props> = ({
	class: className,
	color,
	title,
	description,
	...props
}) => {
	const [active, setActive] = useState(false);
	const classes = cx(
		'h-[100vw] max-h-[200px] w-full max-w-[300px] [perspective:500px]',
		{ 'cursor-pointer': description },
		className
	);
	const flipperClasses = cx(
		'relative transition-transform duration-500 ease-in-out [transform-style:preserve-3d]',
		{ '[transform:rotateY(180deg)]': active }
	);

	const handleClick = () => {
		description && setActive(!active);
	};

	return (
		<div class={classes} onClick={handleClick} {...props}>
			<div class={flipperClasses}>
				<ColorCard class="z-10" data-info="front">
					<div
						class="border-be-solid min-h-[5rem] bg-white border-be-[1px] border-be-black/20 rounded-bs-25 dark:bg-black dark:border-be-white/20"
						style={{ backgroundColor: color }}
					></div>
					<div class="h-full min-h-[6rem] pbe-7 pbs-6 pie-6 pis-6">
						{title && (
							<Subheadline class="!text-[20px] !mbe-[8px]">{title}</Subheadline>
						)}
						<Text class="m-0 font-mono text-[16px] text-black/40 dark:text-white/40">
							{color}
						</Text>
					</div>
				</ColorCard>
				{description && (
					<ColorCard class="plb-7 pli-6 [transform:rotateY(180deg)]" data-info="back">
						<Text class="text-[15px]">{description}</Text>
					</ColorCard>
				)}
			</div>
		</div>
	);
};
