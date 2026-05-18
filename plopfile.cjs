/* eslint-disable func-names */
const fs = require('node:fs');
const path = require('node:path');

const currentDir = process.cwd();
const date = new Date().toISOString().slice(0, 10);

const tags = [
	'ai',
	'book',
	'code',
	'design',
	'download',
	'film',
	'japan',
	'minimalism',
	'personal',
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

const categories = [
	'Design',
	'Graphic Design',
	'Icon Design',
	'Illustration',
	'Painting',
	'Photography',
	'Poetry',
	'Typeface Design',
	'Web Design',
	'Web Development',
	'Writing',
];

const languageChoices = [
	{ name: 'English', value: 'en' },
	{ name: 'German', value: 'de' },
	{ name: 'Japanese', value: 'ja' },
];

const linkKindChoices = ['apple', 'spotify', 'amazon', 'youtube', 'web', 'instagram', 'patreon'];
const videoKindChoices = ['video', 'playlist', 'channel'];
const workVariantChoices = [
	{ name: 'None', value: '' },
	'gallery-2',
	'gallery-2-stagger',
	'gallery-3',
	'gallery-3-stagger',
	'full-bleed',
	'image-inset',
	'text-only',
	'featured',
];

const slugify = (value) =>
	String(value ?? '')
		.trim()
		.toLowerCase()
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '');

const yamlString = (value) => JSON.stringify(value ?? '');
const yamlStringArray = (value) => JSON.stringify(value ?? []);
const indent = (value) =>
	String(value ?? '')
		.split('\n')
		.map((line) => `  ${line}`)
		.join('\n');

const required = (label) => (value) => (String(value).trim() ? true : `${label} is required`);
const requiredUrl = (label) => (value) => {
	try {
		new URL(value);
		return true;
	} catch {
		return `${label} must be a valid URL`;
	}
};
const optionalUrl = (label) => (value) => {
	if (!String(value).trim()) {
		return true;
	}
	return requiredUrl(label)(value);
};
const optionalNumber = (label) => (value) => {
	if (!String(value).trim()) {
		return true;
	}
	return Number.isFinite(Number(value)) ? true : `${label} must be a number`;
};
const requiredDate = (label) => (value) =>
	/^\d{4}-\d{2}-\d{2}$/.test(value) ? true : `${label} must use YYYY-MM-DD`;

const titlePrompt = { type: 'input', name: 'title', message: 'Title', validate: required('Title') };
const subtitlePrompt = { type: 'input', name: 'subtitle', message: 'Subtitle (optional)' };
const authorPrompt = { type: 'input', name: 'author', message: 'Author (optional)' };
const topicPrompt = {
	type: 'input',
	name: 'topic',
	message: 'Topic',
	default: 'libertarianism',
	validate: required('Topic'),
};
const sortPrompt = {
	type: 'input',
	name: 'sort',
	message: 'Sort order (optional)',
	validate: optionalNumber('Sort order'),
};
const languagePrompt = {
	type: 'list',
	name: 'language',
	message: 'Language',
	choices: languageChoices,
	default: 'en',
};
const descriptionPrompt = { type: 'input', name: 'description', message: 'Description (optional)' };
const featuredPrompt = { type: 'confirm', name: 'featured', message: 'Featured?', default: false };
const coverPrompt = (collection) => ({
	type: 'input',
	name: 'cover',
	message: 'Cover path (optional)',
	default: (answers) =>
		`/assets/images/${collection}/${slugify(answers.topic)}/${slugify(answers.title)}.webp`,
});
const linkPrompts = [
	{
		type: 'list',
		name: 'linkKind',
		message: 'Primary link kind',
		choices: linkKindChoices,
		default: 'web',
	},
	{
		type: 'input',
		name: 'linkUrl',
		message: 'Primary link URL (optional)',
		validate: optionalUrl('Primary link URL'),
	},
];

const getNextHaikuNumber = () => {
	const haikuDir = path.join(currentDir, 'src/content/haiku');
	const numbers = fs
		.readdirSync(haikuDir, { withFileTypes: true })
		.filter((entry) => entry.isFile())
		.map((entry) => Number.parseInt(entry.name, 10))
		.filter(Number.isFinite);

	return String(Math.max(0, ...numbers) + 1);
};

module.exports = function (plop) {
	const contentPath = (...parts) => path.join(currentDir, 'src/content', ...parts);
	const templatePath = (...parts) => path.join(plop.getPlopfilePath(), 'plop', ...parts);

	plop.setHelper('slug', slugify);
	plop.setHelper('yearFromDate', (value) => String(value).slice(0, 4));
	plop.setHelper('yamlString', yamlString);
	plop.setHelper('yamlSlug', (value) => yamlString(slugify(value)));
	plop.setHelper('yamlStringArray', yamlStringArray);
	plop.setHelper('indent', indent);

	plop.setGenerator('Writing', {
		description: 'Create a new writing post',
		prompts: [
			titlePrompt,
			subtitlePrompt,
			{
				type: 'input',
				name: 'date',
				message: 'Date',
				default: date,
				validate: requiredDate('Date'),
			},
			{
				type: 'input',
				name: 'subtitle',
				message: 'Subtitle (optional)',
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
		actions: [
			{
				type: 'add',
				path: contentPath('writing', '{{yearFromDate date}}', '{{slug title}}.mdx'),
				templateFile: templatePath('writing', 'writing.mdx.txt'),
			},
		],
	});

	plop.setGenerator('Article', {
		description: 'Create a new article resource',
		prompts: [
			titlePrompt,
			{ type: 'input', name: 'url', message: 'URL', validate: requiredUrl('URL') },
			authorPrompt,
			topicPrompt,
			sortPrompt,
			languagePrompt,
			featuredPrompt,
			descriptionPrompt,
		],
		actions: [
			{
				type: 'add',
				path: contentPath('articles', '{{slug topic}}', '{{slug title}}.mdx'),
				templateFile: templatePath('articles', 'article.mdx.txt'),
			},
		],
	});

	plop.setGenerator('Audiobook', {
		description: 'Create a new audiobook resource',
		prompts: [
			titlePrompt,
			subtitlePrompt,
			authorPrompt,
			topicPrompt,
			coverPrompt('audiobooks'),
			sortPrompt,
			languagePrompt,
			featuredPrompt,
			{ type: 'confirm', name: 'paid', message: 'Paid?', default: false },
			descriptionPrompt,
			...linkPrompts,
		],
		actions: [
			{
				type: 'add',
				path: contentPath('audiobooks', '{{slug topic}}', '{{slug title}}.mdx'),
				templateFile: templatePath('audiobooks', 'audiobook.mdx.txt'),
			},
		],
	});

	plop.setGenerator('Book', {
		description: 'Create a new book resource',
		prompts: [
			titlePrompt,
			subtitlePrompt,
			authorPrompt,
			topicPrompt,
			coverPrompt('books'),
			sortPrompt,
			languagePrompt,
			featuredPrompt,
			{ type: 'confirm', name: 'paid', message: 'Paid?', default: false },
			{ type: 'input', name: 'asin', message: 'ASIN (optional)' },
			{ type: 'input', name: 'category', message: 'Category (optional)' },
			descriptionPrompt,
			...linkPrompts,
		],
		actions: [
			{
				type: 'add',
				path: contentPath('books', '{{slug topic}}', '{{slug title}}.mdx'),
				templateFile: templatePath('books', 'book.mdx.txt'),
			},
		],
	});

	plop.setGenerator('Haiku', {
		description: 'Create a new haiku',
		prompts: [
			{
				type: 'input',
				name: 'number',
				message: 'Number',
				default: getNextHaikuNumber,
				validate(value) {
					if (!/^\d+$/.test(value)) {
						return 'Number must be an integer';
					}

					const filename = path.join(currentDir, 'src/content/haiku', `${value}.md`);
					return fs.existsSync(filename) ? `Haiku ${value} already exists` : true;
				},
			},
			{
				type: 'input',
				name: 'date',
				message: 'Date',
				default: date,
				validate: requiredDate('Date'),
			},
			{
				type: 'editor',
				name: 'de',
				message: 'German haiku',
				validate: required('German haiku'),
			},
			{
				type: 'editor',
				name: 'en',
				message: 'English haiku',
				validate: required('English haiku'),
			},
		],
		actions: [
			{
				type: 'add',
				path: contentPath('haiku', '{{number}}.md'),
				templateFile: templatePath('haiku', 'haiku.md.txt'),
			},
		],
	});

	plop.setGenerator('Organization', {
		description: 'Create a new organization resource',
		prompts: [
			titlePrompt,
			{ type: 'input', name: 'url', message: 'URL', validate: requiredUrl('URL') },
			topicPrompt,
			sortPrompt,
			languagePrompt,
			featuredPrompt,
			descriptionPrompt,
		],
		actions: [
			{
				type: 'add',
				path: contentPath('organizations', '{{slug topic}}', '{{slug title}}.mdx'),
				templateFile: templatePath('organizations', 'organization.mdx.txt'),
			},
		],
	});

	plop.setGenerator('Podcast', {
		description: 'Create a new podcast resource',
		prompts: [
			titlePrompt,
			subtitlePrompt,
			{ type: 'input', name: 'moderator', message: 'Moderator (optional)' },
			topicPrompt,
			coverPrompt('podcasts'),
			sortPrompt,
			languagePrompt,
			featuredPrompt,
			{ type: 'confirm', name: 'paid', message: 'Paid?', default: false },
			descriptionPrompt,
			...linkPrompts,
		],
		actions: [
			{
				type: 'add',
				path: contentPath('podcasts', '{{slug topic}}', '{{slug title}}.mdx'),
				templateFile: templatePath('podcasts', 'podcast.mdx.txt'),
			},
		],
	});

	plop.setGenerator('Video', {
		description: 'Create a new video resource',
		prompts: [
			titlePrompt,
			{ type: 'input', name: 'url', message: 'URL', validate: requiredUrl('URL') },
			topicPrompt,
			sortPrompt,
			languagePrompt,
			featuredPrompt,
			{ type: 'input', name: 'youtubeId', message: 'YouTube ID (optional)' },
			{ type: 'input', name: 'channel', message: 'Channel (optional)' },
			{
				type: 'list',
				name: 'kind',
				message: 'Kind',
				choices: videoKindChoices,
				default: 'video',
			},
			{ type: 'input', name: 'cover', message: 'Cover path (optional)' },
			descriptionPrompt,
		],
		actions: [
			{
				type: 'add',
				path: contentPath('videos', '{{slug topic}}', '{{slug title}}.mdx'),
				templateFile: templatePath('videos', 'video.mdx.txt'),
			},
		],
	});

	plop.setGenerator('Work', {
		description: 'Create a new work entry',
		prompts: [
			titlePrompt,
			{
				type: 'input',
				name: 'date',
				message: 'Date',
				default: date,
				validate: requiredDate('Date'),
			},
			{
				type: 'list',
				name: 'variant',
				message: 'Variant',
				choices: workVariantChoices,
				default: '',
			},
			sortPrompt,
			{
				type: 'checkbox',
				name: 'categories',
				message: 'Categories',
				choices: categories,
			},
			descriptionPrompt,
			{ type: 'input', name: 'intro', message: 'Intro (optional)' },
			{ type: 'input', name: 'imageSrc', message: 'Image path (optional)' },
			{
				type: 'input',
				name: 'imageAspectRatio',
				message: 'Image aspect ratio (optional)',
				validate: optionalNumber('Image aspect ratio'),
			},
		],
		actions: [
			{
				type: 'add',
				path: contentPath('work', '{{slug title}}.mdx'),
				templateFile: templatePath('work', 'work.mdx.txt'),
			},
		],
	});
};
