import type { SVGProps } from 'preact/compat';
const Circle = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="currentColor"
		fillRule="evenodd"
		strokeLinejoin="round"
		strokeMiterlimit={2}
		clipRule="evenodd"
		viewBox="0 0 24 24"
		{...props}
	>
		<circle cx={12} cy={12} r={5} />
	</svg>
);
export default Circle;
