/* eslint-disable func-names */
const moment = require('moment');

const currentDir = process.cwd();
const templatePath = 'plop';
const date = moment().format();
const year = moment().format('YYYY');

module.exports = function (plop) {
	const tags = [
		'book',
		'code',
		'design',
		'download',
		'film',
		'philosophy',
		'poetry',
		'politics',
		'productivity',
		'recommendation',
		'self-improvement',
		'software',
		'technology',
		'writing',
	];

	plop.setGenerator('Post', {
		description: 'Create a new post',
		prompts: [
			{
				type: 'input',
				name: 'title',
				message: 'Title',
				validate(value) {
					if (/.+/.test(value)) {
						return true;
					}
					return 'Title is required';
				},
			},
			{
				type: 'input',
				name: 'description',
				message: 'Description',
			},
			{
				type: 'checkbox',
				name: 'tags',
				message: 'Tags',
				choices: tags,
			},
		],
		actions() {
			process.chdir(plop.getPlopfilePath());

			return [
				{
					type: 'addMany',
					destination: `${currentDir}/src/content/journal/${year}`,
					base: `${templatePath}/post`,
					templateFiles: '**/*.txt',
					stripExtensions: ['txt'],
					data: {
						date,
					},
				},
			];
		},
	});
};
