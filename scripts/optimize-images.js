/* RTEF image pipeline — source assets/images/ -> optimized assets/img/ (WebP + fallbacks).
   Run from the project root:  npm i sharp && node scripts/optimize-images.js
   NOTE: logos must preserve transparency (no `palette`), or the navy footer logo breaks. */
const sharp = require('sharp');
const fs = require('fs');
const SRC = 'assets/images';
const OUT = 'assets/img';
fs.mkdirSync(OUT, { recursive: true });

// photos -> webp + jpg at each width
const photos = [
  ['about-arena.jpg',    'arena',    [1600, 760]],
  ['about-robot.jpg',    'robot',    [1280, 760]],
  ['about-students.jpg', 'students', [1280, 760]],
  ['support-cnc.jpg',    'cnc',      [1280, 760]],
  ['hero-abstract.jpg',  'abstract', [1920]],
];
// logos -> webp + png, transparency PRESERVED (no palette flatten)
const logos = [
  ['logo.png',        'logo',   320],
  ['first-logo.png',  'first',  260],
  ['krunch-flag.png', 'krunch', 520],
];

(async () => {
  for (const [src, base, widths] of photos) {
    for (const w of widths) {
      await sharp(`${SRC}/${src}`).resize({ width: w }).webp({ quality: base === 'abstract' ? 68 : 76 }).toFile(`${OUT}/${base}-${w}.webp`);
      await sharp(`${SRC}/${src}`).resize({ width: w }).jpeg({ quality: 80, mozjpeg: true }).toFile(`${OUT}/${base}-${w}.jpg`);
      console.log(`${base}-${w}`);
    }
  }
  for (const [src, base, width] of logos) {
    await sharp(`${SRC}/${src}`).resize({ width }).webp({ quality: 90 }).toFile(`${OUT}/${base}.webp`);
    await sharp(`${SRC}/${src}`).resize({ width }).png({ compressionLevel: 9 }).toFile(`${OUT}/${base}.png`); // keeps alpha
    console.log(base);
  }
  console.log('done');
})().catch(e => { console.error(e); process.exit(1); });
