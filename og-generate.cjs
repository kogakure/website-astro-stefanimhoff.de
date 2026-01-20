const Jimp = require('jimp');
const path = require('path');
const fs = require('fs');

// Define the path to the input and output folders
const inputFolder = './public/assets/images/cover/';
const outputFolder = './public/assets/images/branding/og/';

// Define the aspect ratio to crop the final image to
const cropSize = { ratio: 16 / 9 };

// Define the size to resize the final image to
const resizeSize = { width: 1200, height: 675 };

// Loop through each image in the input folder
fs.readdir(inputFolder, async (err, files) => {
	if (err) throw err;
	for (const file of files) {
		if (
			file.toLowerCase().endsWith('.png') ||
			file.toLowerCase().endsWith('.jpg') ||
			file.toLowerCase().endsWith('.jpeg')
		) {
			// Open the input image
			const inputImagePath = path.join(inputFolder, file);
			const inputImage = await Jimp.read(inputImagePath);

			// Resize and crop the input image to fit within the desired size and aspect ratio
			inputImage.cover(resizeSize.width, resizeSize.height);

			// Open the text image
			const textImagePath = './public/assets/images/branding/template/text.png';
			const textImage = await Jimp.read(textImagePath);

			// Create a new image with the same size as the input image
			const combinedImage = new Jimp(
				inputImage.bitmap.width,
				inputImage.bitmap.height,
				0x00000000
			);

			// Reduce the quality of the combined image to 70%
			combinedImage.quality(70);

			// Paste the input image onto the new image
			combinedImage.composite(inputImage, 0, 0);

			// Calculate the position to center the text image
			const x = (inputImage.bitmap.width - textImage.bitmap.width) / 2;
			const y = (inputImage.bitmap.height - textImage.bitmap.height) / 2;

			// Paste the text image onto the new image
			combinedImage.composite(textImage, x, y);

			// Save the final image to the output folder with the same filename as the input image
			const outputImagePath = path.join(outputFolder, file);
			await combinedImage.writeAsync(outputImagePath);
		}
	}
});
