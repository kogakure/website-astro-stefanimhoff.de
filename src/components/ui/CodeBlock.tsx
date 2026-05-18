import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

type Props = HTMLAttributes<HTMLPreElement>;

export const CodeBlock = ({ className, children, ...props }: Props) => (
	<pre
		className={cn('rounded-2 text-code mbe-8 overflow-auto p-4 font-mono', className)}
		{...props}
	>
		{children}
	</pre>
);

export default CodeBlock;
