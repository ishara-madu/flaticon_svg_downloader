const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = path.resolve(__dirname, '..');
const manifestPath = path.join(rootDir, 'manifest.json');
const distDir = path.join(rootDir, 'dist');

if (!fs.existsSync(manifestPath)) {
  console.error('❌ manifest.json not found!');
  process.exit(1);
}

const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const version = manifest.version || '0.2.0';
const zipName = `flaticon-svg-downloader-v${version}.zip`;
const zipPath = path.join(distDir, zipName);

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

if (fs.existsSync(zipPath)) {
  fs.unlinkSync(zipPath);
}

console.log(`📦 Packaging release archive: ${zipName}...`);

// Files and directories to package for the Chrome extension release
const itemsToPackage = ['manifest.json', 'icons', 'src', 'LICENSE', 'README.md'];

try {
  const cmd = `zip -r "${zipPath}" ${itemsToPackage.join(' ')} -x "*.DS_Store"`;
  execSync(cmd, { cwd: rootDir, stdio: 'inherit' });
  
  const stats = fs.statSync(zipPath);
  const sizeKB = (stats.size / 1024).toFixed(2);

  console.log(`\n✅ Successfully created release package!`);
  console.log(`📁 File: ${zipPath}`);
  console.log(`📊 Size: ${sizeKB} KB`);
  console.log(`🚀 Ready for GitHub Release attachment & Chrome Web Store upload.\n`);
} catch (err) {
  console.error('❌ Failed to create zip package:', err.message);
  process.exit(1);
}
