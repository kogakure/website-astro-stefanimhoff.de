import React, { useRef, useState } from 'react';
import { cn } from '../../lib/utils';
import ArrowCta from '../icons/ArrowCta';
import { Link } from '../ui/Link';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

interface Props {
	'data-name': string;
	'data-domain': string;
	'data-tld': string;
	text?: string;
	className?: string;
	[key: string]: unknown;
}

export const EmailLink = ({
	className,
	text = 'Email',
	'data-name': name,
	'data-domain': domain,
	'data-tld': tld,
	...rest
}: Props) => {
	const [open, setOpen] = useState(false);
	const [copied, setCopied] = useState(false);
	const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

	const handleClick = (e: React.MouseEvent) => {
		e.preventDefault();
		navigator.clipboard.writeText(`${name}@${domain}.${tld}`);
		setCopied(true);
		setOpen(true);
		clearTimeout(timerRef.current);
		timerRef.current = setTimeout(() => {
			setCopied(false);
			setOpen(false);
		}, 2000);
	};

	const handleOpenChange = (next: boolean) => {
		if (!copied) setOpen(next);
	};

	return (
		<TooltipProvider>
			<Tooltip open={open} onOpenChange={handleOpenChange}>
				<TooltipTrigger asChild>
					<Link
						className={cn(
							'text-3 hover:text-beni active:text-beni-dark ease-enter group font-bold transition-colors duration-200',
							className
						)}
						href="#"
						onClick={handleClick}
						{...rest}
					>
						{text}
						<ArrowCta
							aria-hidden="true"
							className="text-beni group-active:text-beni-dark ease-enter ml-2 inline-block h-[0.6em] w-auto align-middle transition-transform duration-200 group-hover:translate-x-1"
						/>
					</Link>
				</TooltipTrigger>
				<TooltipContent>
					{copied ? 'Email address copied!' : 'Copy email address'}
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
};

export default EmailLink;
