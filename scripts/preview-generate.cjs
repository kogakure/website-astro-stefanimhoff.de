const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inputFolder = './public/assets/images/cover/';
const outputFolder = './public/assets/images/preview/';

if (!fs.existsSync(outputFolder)) {
	fs.mkdirSync(outputFolder, { recursive: true });
}

fs.readdir(inputFolder, async (err, files) => {
	if (err) throw err;
	for (const file of files) {
		if (/\.(webp|png|jpg|jpeg)$/i.test(file)) {
			const inputImagePath = path.join(inputFolder, file);
			const outputFilename = path.parse(file).name + '.webp';
			const outputImagePath = path.join(outputFolder, outputFilename);

			await sharp(inputImagePath)
				.resize({ width: 800, height: 450, fit: 'cover' })
				.webp({ quality: 75 })
				.toFile(outputImagePath);

			console.log(`Generated: ${outputFilename}`);
		}
	}
});
