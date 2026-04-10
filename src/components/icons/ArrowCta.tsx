import type { SVGProps } from 'react';

const ArrowCta = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="1 8 22 10"
		fill="currentColor"
		style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2 }}
		{...props}
	>
		<path d="M22.533,13.004l-3.778,-3.778l0,3.131l-16.222,0l0,1.294l16.222,0l0,3.131l3.778,-3.778Z" />
	</svg>
);

export default ArrowCta;
