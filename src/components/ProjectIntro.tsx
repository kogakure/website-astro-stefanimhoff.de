import type { HTMLAttributes } from 'react';
import { cn } from '../lib/utils';

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const ProjectIntro = ({ className, children, ...props }: Props) => (
	<div className={cn(className)} {...props}>
		{children}
	</div>
);

export default ProjectIntro;
