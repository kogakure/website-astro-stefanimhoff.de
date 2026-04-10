import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';
import { SectionLabel } from './SectionLabel';

interface Props extends HTMLAttributes<HTMLElement> {
	label: string;
}

export const PageSection = ({ label, className, children, ...props }: Props) => (
	<section
		className={cn(
			'grid grid-cols-3 gap-x-4 gap-y-6 md:grid-cols-6 md:gap-x-6 lg:grid-cols-12 lg:gap-x-8',
			className
		)}
		{...props}
	>
		<div className="col-span-3 md:col-span-2 md:pt-[0.35em] lg:col-span-2">
			<SectionLabel>{label}</SectionLabel>
		</div>
		<div className="col-span-3 min-w-0 flex-1 md:col-span-4 lg:col-span-10">{children}</div>
	</section>
);

export default PageSection;
