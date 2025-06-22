// vite.config.js
import { defineConfig } from 'vite';  
import react from '@vitejs/plugin-react';

import path from 'path';
import { fileURLToPath } from 'url';  

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { readFileSync } from 'fs';

function getRepoName() {
  try {
    const packageJsonPath = path.resolve(__dirname, 'package.json');
    const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'));
    const homepage = packageJson.homepage;

    if (homepage) {
      const url = new URL(homepage);
      console.log('Detected homepage URL in vite.config.js:', homepage);
      console.log('Extracted repository path in vite.config.js:', url.pathname);
      return url.pathname;
    }
  } catch (error) {
    console.warn('Could not read package.json or homepage in vite.config.js. Defaulting base to "/"');
    console.error('Specific error during package.json read:', error); 
  }
  console.log('Defaulting base to "/" in vite.config.js');
  return '/';
}

const base = process.env.NODE_ENV === 'production'
  ? getRepoName()
  : '/';

console.log('Final Vite base configuration for build:', base);

export default defineConfig({
  plugins: [react()],
  base: base,
});