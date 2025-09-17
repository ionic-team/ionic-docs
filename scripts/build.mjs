import { spawn } from 'child_process';

const vercelEnv = process.env.VERCEL_ENV || 'preview';
const buildCommand = `build:${vercelEnv}`;

console.log(`Running build command: npm run ${buildCommand}`);

const child = spawn('npm', ['run', buildCommand], {
  stdio: 'inherit',
  shell: true
});

child.on('close', (code) => {
  process.exit(code);
});

child.on('error', (error) => {
  console.error('Build script error:', error);
  process.exit(1);
});