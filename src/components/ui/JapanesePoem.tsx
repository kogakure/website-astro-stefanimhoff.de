import type { ElementType, HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface Props extends HTMLAttributes<HTMLElement> {
	as?: ElementType;
}

export const JapanesePoem = ({ as: Tag = 'span', className, children, ...props }: Props) => (
	<Tag
		className={cn(
			'marquee-content font-japanese text-beni px-12 text-[clamp(3rem,6vw,7.5rem)] font-bold not-italic',
			className
		)}
		{...props}
	>
		{children ?? '無限の沈黙である私はお前に言葉を與へてやろう。'}
	</Tag>
);

export default JapanesePoem;
