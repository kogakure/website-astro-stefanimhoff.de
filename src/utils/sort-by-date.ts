export const sortByDate = (a: { data: { date: Date } }, b: { data: { date: Date } }) => {
	return Date.parse(b.data.date.toISOString()) - Date.parse(a.data.date.toISOString());
};
