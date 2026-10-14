const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const manifestPath = path.join(rootDir, 'manifest.json');

console.log('🔍 Validating Chrome Extension...');

if (!fs.existsSync(manifestPath)) {
  console.error('❌ manifest.json not found!');
  process.exit(1);
}

let manifest;
try {
  manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  console.log('✅ manifest.json is valid JSON');
} catch (err) {
  console.error('❌ Failed to parse manifest.json:', err.message);
  process.exit(1);
}

if (manifest.manifest_version !== 3) {
  console.error(`❌ manifest_version must be 3, found: ${manifest.manifest_version}`);
  process.exit(1);
}
console.log('✅ Manifest version: 3 (MV3)');

if (manifest.icons) {
  for (const [size, iconRelPath] of Object.entries(manifest.icons)) {
    const iconPath = path.join(rootDir, iconRelPath);
    if (!fs.existsSync(iconPath)) {
      console.error(`❌ Icon for size ${size} not found at ${iconRelPath}`);
      process.exit(1);
    }
  }
  console.log('✅ All declared icons exist');
}

if (Array.isArray(manifest.content_scripts)) {
  for (const cs of manifest.content_scripts) {
    if (Array.isArray(cs.js)) {
      for (const jsFile of cs.js) {
        const jsPath = path.join(rootDir, jsFile);
        if (!fs.existsSync(jsPath)) {
          console.error(`❌ Content script not found: ${jsFile}`);
          process.exit(1);
        }
      }
    }
  }
  console.log('✅ All declared content scripts exist');
}

console.log(`\n🎉 Validation passed successfully for "${manifest.name}" v${manifest.version}!\n`);
