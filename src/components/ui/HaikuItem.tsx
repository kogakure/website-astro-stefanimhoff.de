import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';
import { Text } from './Text';

interface Props extends HTMLAttributes<HTMLLIElement> {
	de: string;
	en: string;
}

const formatLines = (text: string) =>
	text
		.trim()
		.split('\n')
		.map((line) => line.trim())
		.join(' / ');

export const HaikuItem = ({ className, de, en, ...props }: Props) => (
	<li className={cn('text-3 flex flex-col', className)} {...props}>
		<Text className="text-sumi dark:text-washi mbe-0 font-bold">{formatLines(de)}</Text>
		<Text className="text-hai mbe-0">{formatLines(en)}</Text>
	</li>
);

export default HaikuItem;
