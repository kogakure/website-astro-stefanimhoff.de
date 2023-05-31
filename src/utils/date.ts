import moment from 'moment';

export const dateToFormat = (date: Date, format = 'MMMM Do, YYYY') => {
	return moment(date).format(format);
};

export const dateToISO = (date: Date) => {
	return moment(date).format();
};
