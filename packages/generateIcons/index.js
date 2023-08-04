const fs = require('fs');
const sharp = require('sharp');
const logo = require('./logo.png');

await function generateAppleIcons() {
const sizes = [60,70,120,152,167,180,];
const input = req.body.input[0];
const outputDir = 'static/icons';
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

sizes.forEach((size) => {
  const outputFile = `${outputDir}/apple-touch-icons-${size}x${+size}.png`;
  sharp(input)
    .resize(size, size)
    .toFile(outputFile, (err, info) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`Generated ${outputFile} (${info.width}x${info.height})`);
      }
    });
});
}
