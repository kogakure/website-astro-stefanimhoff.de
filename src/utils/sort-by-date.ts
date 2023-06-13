export const sortByDate = (a: any, b: any) => {
	return Date.parse(b.data.date.toISOString()) - Date.parse(a.data.date.toISOString());
};

export const sortMarkdownByDate = (a: any, b: any) => {
	return Date.parse(b.frontmatter.date) - Date.parse(a.frontmatter.date);
};
