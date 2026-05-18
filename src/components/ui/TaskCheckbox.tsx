import type { InputHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

type Props = InputHTMLAttributes<HTMLInputElement>;

export const TaskCheckbox = ({ className, ...props }: Props) => (
	<input type="checkbox" disabled className={cn('mie-2 align-middle', className)} {...props} />
);

export default TaskCheckbox;
