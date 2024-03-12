import type { ComponentChild, FunctionalComponent } from 'preact';

interface Props {
	children: ComponentChild;
}

export const Bookshelf: FunctionalComponent<Props> = ({ children, ...props }) => {
	return (
		<article
			class="grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] place-items-center justify-center gap-[20px] rounded-4 bg-white/50 p-10 mbe-13 mbs-0 mie-0 mis-0 dark:bg-black/80"
			{...props}
		>
			{children}
		</article>
	);
};
