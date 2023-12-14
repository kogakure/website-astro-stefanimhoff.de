import type { FunctionalComponent } from 'preact';

import { Link } from '.';
import { ArrowUp } from './icons';

export const UpLink: FunctionalComponent = ({ ...props }) => (
	<div class="flex flex-1 justify-end" {...props}>
		<Link
			id="up-link"
			class="transition-transform duration-500 ease-in-out hover:-translate-y-1 focus:-translate-y-1"
			href="#top"
		>
			<button
				aria-label="Back to top"
				class="flex h-clickarea w-clickarea cursor-pointer items-center justify-center"
			>
				<ArrowUp class="icon h-icon w-icon" />
			</button>
		</Link>
	</div>
);
