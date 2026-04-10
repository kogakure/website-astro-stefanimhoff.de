import { cn } from '../lib/utils';

interface Props {
	active?: boolean;
	children: React.ReactNode;
	className?: string;
	href?: string;
	onClick?: () => void;
}

const baseClasses =
	'relative inline-flex min-w-[40px] items-center justify-center rounded-2 border border-shibui-300 bg-shibui-200 px-3 py-1 text-1 font-normal capitalize leading-none text-shibui-950 mie-1 dark:border-shibui-700 dark:bg-shibui-800 dark:text-shibui-100 print:hidden transition-colors duration-150';

const activeClasses =
	'border-beni/25 bg-beni text-kiri hover:bg-beni-light focus:bg-beni-light dark:border-beni/50 dark:bg-beni dark:text-kiri dark:hover:bg-beni-light dark:focus:bg-beni-light';

const inactiveClasses =
	'cursor-pointer hover:bg-shibui-300 focus:bg-shibui-300 dark:hover:bg-shibui-700 dark:focus:bg-shibui-700';

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
