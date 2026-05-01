import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

type Props = HTMLAttributes<HTMLElement>;

export const FootnoteSection = ({ className, children, ...props }: Props) => (
	<section className={cn('footnotes text-2 mbs-12', className)} {...props}>
		{children}
	</section>
);

export default FootnoteSection;
