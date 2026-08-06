/* eslint-disable */
const sharp = require('sharp');
const path = require('path');

async function processLogo() {
  const inputPath = path.join(__dirname, '../public/images/knockemdic_logo.jpg');
  const outputPath = path.join(__dirname, '../public/images/logo.png');

  console.log('Processing logo background removal...');

  const image = sharp(inputPath);
  const metadata = await image.metadata();
  const width = metadata.width;
  const height = metadata.height;

  // Get raw RGBA pixel buffer
  const { data, info } = await image.ensureAlpha().raw().toBuffer({ resolveWithObject: true });

  const pixelBuffer = Buffer.from(data);

  // Loop through pixels and make off-white transparent with smooth anti-aliased edge blending
  for (let i = 0; i < pixelBuffer.length; i += 4) {
    const r = pixelBuffer[i];
    const g = pixelBuffer[i + 1];
    const b = pixelBuffer[i + 2];

    // Background color detection: off-white/cream/white (R > 230, G > 230, B > 230)
    const minChannel = Math.min(r, g, b);
    const avgChannel = (r + g + b) / 3;

    if (minChannel > 220) {
      if (avgChannel >= 246) {
        // Pure background -> Fully transparent
        pixelBuffer[i + 3] = 0;
      } else {
        // Anti-aliased border edge -> Smooth alpha fade
        const factor = (avgChannel - 220) / (246 - 220); // 0 to 1
        const alpha = Math.max(0, Math.min(255, Math.round((1 - factor) * 255)));
        pixelBuffer[i + 3] = alpha;

        // Darken RGB slightly on anti-aliased fringe to eliminate white haloing
        pixelBuffer[i] = Math.round(r * (1 - factor * 0.5));
        pixelBuffer[i + 1] = Math.round(g * (1 - factor * 0.5));
        pixelBuffer[i + 2] = Math.round(b * (1 - factor * 0.5));
      }
    }
  }

  // Save as PNG and auto-trim whitespace border
  await sharp(pixelBuffer, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4,
    },
  })
    .trim() // Trim transparent edges
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(outputPath);

  const trimmedMeta = await sharp(outputPath).metadata();
  console.log(`Pristine transparent PNG saved to /public/images/logo.png (${trimmedMeta.width}x${trimmedMeta.height})`);
}

processLogo().catch((err) => {
  console.error('Error processing logo:', err);
  process.exit(1);
});
