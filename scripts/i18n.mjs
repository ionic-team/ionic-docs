import { mkdir, rm } from 'fs/promises';
import { createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { spawn } from 'child_process';
import { promisify } from 'util';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { createGunzip } from 'zlib';
import tar from 'tar';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const TARGET_DIR = 'i18n/ja/docusaurus-plugin-content-docs/current';
const TEMP_FILE = 'temp_jp.tar.gz';
const DOWNLOAD_URL = 'https://github.com/ionic-team/ionic-docs/archive/refs/heads/translation/jp.tar.gz';

async function downloadFile(url, destination) {
  console.log('Downloading Japanese translation files...');
  
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to download: ${response.status} ${response.statusText}`);
  }
  
  const fileStream = createWriteStream(destination);
  await pipeline(response.body, fileStream);
}

async function extractTarGz(source, targetDir) {
  console.log('Extracting translation files...');
  
  await tar.extract({
    file: source,
    cwd: targetDir,
    strip: 2,
    filter: (path) => path.startsWith('ionic-docs-translation-jp/docs/')
  });
}

async function runCommand(command, args = []) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { 
      stdio: 'inherit',
      shell: true 
    });
    
    child.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Command failed with exit code ${code}`));
      }
    });
    
    child.on('error', reject);
  });
}

async function cleanup() {
  try {
    await rm(TEMP_FILE, { force: true });
  } catch (error) {
    // Ignore cleanup errors
  }
}

async function main() {
  try {
    console.log('Running i18n synchronization...');
    
    // Create target directory
    await mkdir(TARGET_DIR, { recursive: true });
    
    // Download translation files
    await downloadFile(DOWNLOAD_URL, TEMP_FILE);
    
    // Extract files
    await extractTarGz(TEMP_FILE, TARGET_DIR);
    
    // Clean up temporary file
    await cleanup();
    
    // Run API generation script
    console.log('Generating Japanese API documentation...');
    await runCommand('node', ['scripts/api-ja.js']);
    
    console.log('✅ i18n sync completed successfully');
    
  } catch (error) {
    console.error('❌ Error during i18n sync:', error.message);
    await cleanup();
    process.exit(1);
  }
}

main();