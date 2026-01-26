const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inputFolder = './public/assets/images/cover/';
const outputFolder = './public/assets/images/thumbnail/';
const resizeSize = { width: 500, height: 500 };

fs.readdir(inputFolder, async (err, files) => {
	if (err) throw err;
	for (const file of files) {
		if (/\.(webp|png|jpg|jpeg)$/i.test(file)) {
			const inputImagePath = path.join(inputFolder, file);
			const outputFilename = path.parse(file).name + '.jpg';
			const outputImagePath = path.join(outputFolder, outputFilename);

			await sharp(inputImagePath)
				.resize({
					width: resizeSize.width,
					height: resizeSize.height,
					fit: 'cover',
				})
				.jpeg({ quality: 70 })
				.toFile(outputImagePath);

			console.log(`Generated: ${outputFilename}`);
		}
	}
});
