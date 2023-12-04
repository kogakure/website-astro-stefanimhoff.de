const fs = require('fs');
const path = require('path');
const transform = require('@svgr/core').transform;
const { sync: glob } = require('glob');
const { upperFirst } = require('lodash');

const ICONS_PATH = path.join(__dirname, 'src/icons');
const DEST_PATH = path.join(__dirname, 'src/components/icons');
const DEST_INDEX_FILE = path.join(DEST_PATH, 'index.ts');

const iconFiles = glob(`${ICONS_PATH}/**/*.svg`);

function convertToPascalCase(name) {
	return name
		.split('-')
		.map((part) => upperFirst(part))
		.join('');
}

const generateIcons = async (iconFiles) => {
	let output = '';

	for (const file of iconFiles) {
		const iconName = convertToPascalCase(path.basename(file, '.svg'));
		const componentFileName = `${iconName}.tsx`;
		const componentPath = path.join(DEST_PATH, componentFileName);

		const svg = fs.readFileSync(file, 'utf8');

		const componentPromise = transform(
			svg,
			{
				plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
				dimensions: false,
				typescript: true,
				jsxRuntime: 'classic-preact',
			},
			{ componentName: iconName }
		);

		const component = await componentPromise;

		fs.writeFileSync(componentPath, component, 'utf8');

		output += `export { default as ${iconName} } from './${componentFileName}';\n`;
	}

	fs.writeFileSync(DEST_INDEX_FILE, output, 'utf8');
};

generateIcons(iconFiles);
