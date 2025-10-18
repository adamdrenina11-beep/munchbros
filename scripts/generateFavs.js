const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

(async () => {
  try {
    const root = path.resolve(__dirname, '..');
    const input = path.join(root, 'public', 'images', 'logo.png');
    if (!fs.existsSync(input)) {
      console.error('Input logo not found:', input);
      process.exit(1);
    }

    const outputs = [16, 32, 64];
    for (const size of outputs) {
      const outPath = path.join(root, 'public', `favicon-${size}.png`);
      await sharp(input).resize(size, size).png().toFile(outPath);
      console.log('Wrote', outPath);
    }

    console.log('All favicons generated');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
