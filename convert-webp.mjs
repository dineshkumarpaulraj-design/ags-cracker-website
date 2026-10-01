import sharp from "sharp";
import fs from "fs";
import path from "path";

const folder = path.resolve("public/images/products");

const files = fs.readdirSync(folder)
  .filter((file) => file.toLowerCase().endsWith(".png"));

for (const file of files) {
  const input = path.join(folder, file);
  const output = path.join(
    folder,
    file.replace(/\.png$/i, ".webp")
  );

  await sharp(input)
    .webp({ quality: 92 })
    .toFile(output);

  console.log(`✓ ${file} -> ${path.basename(output)}`);
}

console.log("\n✅ All PNG images converted to WebP!");