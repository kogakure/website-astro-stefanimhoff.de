import {
	DesktopIcon,
	DeviceMobileIcon,
	GlobeSimpleIcon,
	TelevisionSimpleIcon,
} from '@phosphor-icons/react';
import type { HTMLAttributes } from 'react';

import { cn } from '../../lib/utils';

const map = {
	iphone: { Icon: DeviceMobileIcon, label: 'iPhone / iPad' },
	desktop: { Icon: DesktopIcon, label: 'Desktop' },
	appletv: { Icon: TelevisionSimpleIcon, label: 'Apple TV' },
	web: { Icon: GlobeSimpleIcon, label: 'Web' },
} as const;

interface Props extends HTMLAttributes<HTMLElement> {
	kind: keyof typeof map;
}

export const Platform = ({ kind, className, ...props }: Props) => {
	const { Icon, label } = map[kind];
	return (
		<span
			role="img"
			aria-label={label}
			className={cn('inline-flex size-4 shrink-0 align-middle', className)}
			{...props}
		>
			<Icon size={16} aria-hidden="true" />
		</span>
	);
};

export default Platform;
