const sharp = require('sharp');
const path = require('path');

async function run() {
  const inputPath = path.join(__dirname, '../public/images/diwali_3d_centerpiece.png');
  const image = sharp(inputPath);
  const metadata = await image.metadata();
  const width = metadata.width;
  const height = metadata.height;

  const maskSvg = Buffer.from(`
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <defs>
        <radialGradient id="fade" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#fff" stop-opacity="1" />
          <stop offset="60%" stop-color="#fff" stop-opacity="0.95" />
          <stop offset="85%" stop-color="#fff" stop-opacity="0.3" />
          <stop offset="100%" stop-color="#fff" stop-opacity="0" />
        </radialGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#fade)" />
    </svg>
  `);

  const maskBuffer = await sharp(maskSvg).png().toBuffer();

  const tempPath = path.join(__dirname, '../public/images/diwali_3d_centerpiece_blended.png');

  await image
    .ensureAlpha()
    .composite([{ input: maskBuffer, blend: 'dest-in' }])
    .toFile(tempPath);

  const fs = require('fs');
  fs.copyFileSync(tempPath, inputPath);
  fs.unlinkSync(tempPath);

  console.log('Centerpiece blended seamlessly with zero box edges!');
}

run().catch(console.error);
