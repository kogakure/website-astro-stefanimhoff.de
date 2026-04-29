// TODO: Is this still needed?
import type { ReactNode } from 'react';

interface Props {
	dark?: ReactNode;
	light?: ReactNode;
}

export const ThemeBox = ({ dark, light }: Props) => (
	<>
		<div className="hidden dark:block">{dark}</div>
		<div className="block dark:hidden">{light}</div>
	</>
);

export default ThemeBox;
