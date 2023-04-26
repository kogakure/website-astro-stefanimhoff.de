export const sortByDate = (a: any, b: any) => {
	return Date.parse(b.data.date.toISOString()) - Date.parse(a.data.date.toISOString());
};
