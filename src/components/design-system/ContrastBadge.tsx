import { getContrastRatio } from '../../lib/color-contrast';
import { cn } from '../../lib/utils';

interface Props {
	fg: string;
	bg: string;
	className?: string;
}

export const ContrastBadge = ({ fg, bg, className }: Props) => {
	const ratio = getContrastRatio(fg, bg);
	const ratioStr = ratio.toFixed(2);
	const passAA = ratio >= 4.5;
	const passAAA = ratio >= 7;
	const passLargeAA = ratio >= 3;

	return (
		<div className={cn('flex flex-col items-center gap-0.5', className)}>
			<span className="font-mono text-xs font-medium" style={{ color: 'var(--color-sumi)' }}>
				{ratioStr}:1
			</span>
			<div className="flex gap-1">
				<span
					className={cn(
						'rounded px-1 py-0.5 font-mono text-[9px] font-bold leading-none',
						passAA
							? 'bg-beni text-white'
							: passLargeAA
								? 'bg-beni-pale text-beni'
								: 'bg-usuzumi/40 text-hai'
					)}
				>
					AA
				</span>
				<span
					className={cn(
						'rounded px-1 py-0.5 font-mono text-[9px] font-bold leading-none',
						passAAA ? 'bg-beni text-white' : 'bg-usuzumi/40 text-hai'
					)}
				>
					AAA
				</span>
			</div>
		</div>
	);
};

export default ContrastBadge;
