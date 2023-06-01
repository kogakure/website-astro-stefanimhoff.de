import type { ComponentChild, FunctionalComponent } from 'preact';

interface Props {
	children: ComponentChild;
}

export const ColorStack: FunctionalComponent<Props> = ({ children, ...props }) => {
	return (
		<article
			class="col-start-1 col-end-17 grid grid-cols-[repeat(auto-fill,_minmax(150px,_1fr))] gap-[20px]"
			{...props}
		>
			{children}
		</article>
	);
};
