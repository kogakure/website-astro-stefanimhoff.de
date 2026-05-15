import { cn } from '../../lib/utils';

interface Props {
	active?: boolean;
	children: React.ReactNode;
	className?: string;
	href?: string;
	onClick?: () => void;
}

const baseClasses =
	'relative inline-flex min-w-[40px] items-center justify-center rounded-2 border border-usuzumi bg-kiri pli-3 pbl-1 text-1 font-normal capitalize leading-none text-sumi mie-1 dark:border-nezumi dark:bg-yoru dark:text-washi print:hidden transition-colors duration-150';

const activeClasses =
	'border-beni/25 bg-beni text-kiri hover:bg-beni-light focus:bg-beni-light dark:border-beni/50 dark:bg-beni dark:text-kiri dark:hover:bg-beni-light dark:focus:bg-beni-light';

const inactiveClasses =
	'cursor-pointer hover:bg-usuzumi/50 focus:bg-usuzumi/50 dark:hover:bg-nezumi/50 dark:focus:bg-nezumi/50';

export const Tag = ({ active, children, className, href, onClick }: Props) => {
	if (href) {
		return (
			<a
				href={href}
				className={cn(baseClasses, active ? activeClasses : inactiveClasses, className)}
				aria-current={active ? 'true' : undefined}
			>
				{children}
			</a>
		);
	}

	return (
		<button
			type="button"
			onClick={onClick}
			className={cn(baseClasses, active ? activeClasses : inactiveClasses, className)}
			aria-pressed={active}
		>
			{children}
		</button>
	);
};

export default Tag;
