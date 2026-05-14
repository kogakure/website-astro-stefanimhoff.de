import { format, formatISO } from 'date-fns';

export const dateToFormat = (date: Date, formatStr = 'MMMM do, yyyy') => {
	return format(date, formatStr);
};

export const dateToISO = (date: Date) => {
	return formatISO(date);
};
