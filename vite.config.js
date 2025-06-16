// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function getRepoName() {
  try {
    const packageJsonPath = path.resolve(__dirname, 'package.json');
    const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'));
    const homepage = packageJson.homepage;

    if (homepage) {
      const url = new URL(homepage);
      return url.pathname;
    }
  } catch (error) {
    console.warn('Could not read package.json or homepage. Defaulting base to "/"');
  }
  return '/';
}

const base = process.env.NODE_ENV === 'production'
  ? getRepoName()
  : '/';

export default defineConfig({
  plugins: [react()],
  base: base,
});