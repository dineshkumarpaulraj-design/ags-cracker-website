import fs from "fs";
import path from "path";
import sharp from "sharp";

const inputDir = path.join(
  process.cwd(),
  "public",
  "images",
  "products"
);

const outputDir = path.join(
  inputDir,
  "webp"
);

fs.mkdirSync(outputDir, { recursive: true });

const files = fs.readdirSync(inputDir).filter((file) =>
  /\.(png|jpe?g)$/i.test(file)
);

console.log(`Found ${files.length} images...`);

for (const file of files) {
  const input = path.join(inputDir, file);
  const output = path.join(
    outputDir,
    `${path.parse(file).name}.webp`
  );

  try {
    await sharp(input)
      .webp({
        quality: 90,
        effort: 5,
      })
      .toFile(output);

    console.log(`✓ ${file} -> ${path.basename(output)}`);
  } catch (error) {
    console.error(`✗ Failed: ${file}`);
    console.error(error.message);
  }
}

console.log("\n✅ Image conversion completed!");
console.log(`Output: ${outputDir}`);