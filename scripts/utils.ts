import { exec } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';
import * as glob from 'glob';
import * as config from './config';

export function copyDirectory(source, target) {
  let files = [];

  // check if folder needs to be created or integrated
  const targetFolder = path.join(target, path.basename(source));
  if (!fs.existsSync(targetFolder)) {
    fs.mkdirSync(targetFolder);
  }

  // copy
  if (fs.lstatSync(source).isDirectory()) {
    files = fs.readdirSync(source);
    for (let i = 0; i < files.length; i++) {
      const curSource = path.join(source, files[i]);
      if (fs.lstatSync(curSource).isDirectory()) {
        copyDirectory(curSource, targetFolder);
      } else {
        // async
        copyFile(curSource, path.join(targetFolder, files[i]));
      }
    }
  }
}

export function copyFileSync(source, dest, hook) {
  if (!fs.existsSync(source)) {
    vlog('Cannot copy - File does not exist ', source);
    return false;
  }
  vlog('Copying file syncronously ', source);
  let fileData = fs.readFileSync(source);

  if (typeof hook === 'function') {
    // note, changing fileData from buffer to string
    // writeFileSync accepts both
    fileData = hook(fileData.toString('utf8'));
  }

  // create parent directory if it doesn't exist
  const pathArray = dest.split('/');
  pathArray.pop();
  const parentDirectory = pathArray.join('/');
  // console.log(dest, parentDirectory)
  if (!fs.existsSync(parentDirectory)) {
    fs.mkdirSync(parentDirectory);
  }

  fs.writeFileSync(dest, fileData);
  return true;
}

export function copyFile(source, target) {
  const rd = fs.createReadStream(source);
  const wr = fs.createWriteStream(target);
  return new Promise(function(resolve, reject) {
    rd.on('error', reject);
    wr.on('error', reject);
    wr.on('finish', resolve);
    rd.pipe(wr);
  }).catch(function(error) {
    rd.destroy();
    wr.end();
    throw error;
  });
}

export function filterParentDirectory(path) {
  const pathArray = path.split('/');
  return pathArray[pathArray.length - 2];
}

export function promisedGlob(pattern, options = null) {
  return new Promise((resolve) => {
    glob(pattern, options, (err, files) => {
      if (err) {
        throw err;
      }
      resolve(files);
    });
  });
}

export async function shell(command) {
  return new Promise(resolve => {
    const cp = exec(command, (err, stdout, stderr) => {
      if (err) {
        throw err;
      }
      if (stderr) {
        vlog(stderr);
        // throw stderr;
      }
      vlog(stdout);
      resolve(stdout);
    });
  });
}

export function preCheck() {
  if (!fs.existsSync(config.API_DOCS_DIR)) {
    fs.mkdirSync(config.API_DOCS_DIR);
  }

  return validateNPMVersion() && validateNodeVersion(process.version);
}

// logging function that checks to see if VERBOSE mode is on
export function vlog(message, data = null) {
  if (config.VERBOSE) {
    if (data) {
      console.log(message, data);
    } else {
      console.log(message);
    }
  }
}

export function parseSemver(str) {
  return /(\d+)\.(\d+)\.(\d+)/
    .exec(str)
    .slice(1)
    .map(Number);
}

export async function promisedExec(command) {
  return new Promise( (resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        return reject(error);
      }

      if (stderr) {
        return reject(stderr);
      }

      resolve(stdout);
    });
  });
}

export async function validateNPMVersion() {
  const npmVersion = await promisedExec('npm -v');
  const [major, minor] = parseSemver(npmVersion);

  if (major < 5 || (major === 5 && minor < 8)) {
    throw new Error(
      'Running the CI scripts requires NPM version 5.8 or higher.'
    );
  }
  return true;
}

export function validateNodeVersion(version) {
  const [major, minor] = parseSemver(version);

  if (major < 7 || (major === 7 && minor < 6)) {
    throw new Error(
      'Running the CI scripts requires Node version 7.6 or higher.'
    );
  }
  return true;
}
