import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

type Props = HTMLAttributes<HTMLBRElement>;

export const LineBreak = ({ className, ...props }: Props) => (
	<br className={cn(className)} {...props} data-ma="LineBreak" />
);

export default LineBreak;
