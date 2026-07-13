import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'fs';
import { join } from 'path';

const srcDir = 'c:/Users/LeosK/Downloads/Kimi_Agent_USPORA-FVE Site Redesign/galerka';
const destDir = 'c:/Users/LeosK/Downloads/Kimi_Agent_USPORA-FVE Site Redesign/app/public/images/gallery';

if (existsSync(destDir)) {
  rmSync(destDir, { recursive: true, force: true });
  console.log('Cleaned destination directory');
}
mkdirSync(destDir, { recursive: true });

const files = readdirSync(srcDir);
// Sort files to keep consistent order
files.sort();

const seenSizes = new Set();
let counter = 1;
const mapping = [];

for (const file of files) {
  if (file.startsWith('.')) continue;
  const srcPath = join(srcDir, file);
  const data = readFileSync(srcPath);
  const size = data.length;

  if (seenSizes.has(size)) {
    console.log(`Skipping duplicate size image: ${file} (${size} bytes)`);
    continue;
  }
  seenSizes.add(size);

  const destName = `gallery-${counter}.jpg`;
  const destPath = join(destDir, destName);
  writeFileSync(destPath, data);
  
  mapping.push({ original: file, newName: destName, size });
  counter++;
}

console.log('\n--- IMAGE MAPPING ---');
mapping.forEach(m => {
  console.log(`${m.newName} <- ${m.original} (${m.size} bytes)`);
});
console.log(`\nSuccessfully copied ${counter - 1} unique gallery images.`);
