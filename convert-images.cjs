const fs = require('fs').promises;
const path = require('path');
const sharp = require('sharp');

const publicDir = path.join(__dirname, 'public');

async function convertJpgToWebp(directory) {
	try {
		const entries = await fs.readdir(directory, { withFileTypes: true });

		for (const entry of entries) {
			const fullPath = path.join(directory, entry.name);

			if (entry.isDirectory()) {
				await convertJpgToWebp(fullPath);
			} else if (entry.isFile() && path.extname(entry.name).toLowerCase() === '.jpg') {
				const webpName = path.join(directory, `${path.parse(entry.name).name}.webp`);

				await sharp(fullPath).webp().toFile(webpName);

				console.log(`Converted: ${fullPath} -> ${webpName}`);
			}
		}
	} catch (error) {
		console.error(`Error processing directory ${directory}:`, error);
	}
}

convertJpgToWebp(publicDir)
	.then(() => console.log('Conversion complete'))
	.catch((error) => console.error('Conversion failed:', error));
