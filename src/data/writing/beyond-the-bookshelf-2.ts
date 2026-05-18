export const books = {
	labels: [
		'2014',
		'2015',
		'2016',
		'2017',
		'2018',
		'2019',
		'2020',
		'2021',
		'2022',
		'2023',
		'2024',
	],
	datasets: [
		{
			data: [5, 9, 12, 40, 29, 32, 14, 22, 25, 25, 66],
		},
	],
};

export const pages = {
	labels: [
		'2014',
		'2015',
		'2016',
		'2017',
		'2018',
		'2019',
		'2020',
		'2021',
		'2022',
		'2023',
		'2024',
	],
	datasets: [
		{
			data: [1501, 3332, 5600, 10513, 10467, 11872, 4455, 6186, 7249, 9797, 24602],
		},
	],
};

export const format = {
	labels: ['Paper Book', 'Audiobook', 'E-Book', 'E-Book & Audiobook'],
	datasets: [
		{
			label: 'Format',
			data: [22, 14, 28, 2],
		},
	],
};

export const genres = {
	labels: [
		'Architecture',
		'Art',
		'Biography',
		'Business',
		'Childrens',
		'Classics',
		'Comics',
		'Drawing',
		'Dystopia',
		'Economics',
		'Fanatsy',
		'Fiction',
		'Finance',
		'Health',
		'History',
		'Humor',
		'Japan',
		'Money',
		'Nonfiction',
		'Philosophy',
		'Poetry',
		'Russia',
		'Science Fiction',
		'Short Stories',
	],
	datasets: [
		{
			label: 'Genres',
			data: [1, 3, 2, 1, 6, 6, 10, 2, 2, 30, 2, 12, 1, 1, 4, 1, 1, 1, 17, 15, 1, 1, 8, 3],
		},
	],
};

export const options = {
	plugins: {
		legend: {
			position: 'right',
		},
	},
};
