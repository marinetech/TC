// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Get the repository name from the homepage in package.json
// Or just hardcode it if you prefer: '/<YOUR_REPOSITORY_NAME>/'
import path from 'path';
import { fileURLToPath } from 'url';

// __dirname equivalent in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { readFileSync } from 'fs';

// Function to get the repository name from package.json
function getRepoName() {
  try {
    const packageJsonPath = path.resolve(__dirname, 'package.json');
    const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'));
    const homepage = packageJson.homepage;

    if (homepage) {
      const url = new URL(homepage);
      // The path will be '/<YOUR_REPOSITORY_NAME>/'
      return url.pathname;
    }
  } catch (error) {
    console.warn('Could not read package.json or homepage. Defaulting base to "/"');
  }
  return '/'; // Default to root if homepage is not found or parsing fails
}

const base = process.env.NODE_ENV === 'production'
  ? getRepoName() // This will be '/<YOUR_REPOSITORY_NAME>/'
  : '/'; // Use '/' for local development

export default defineConfig({
  plugins: [react()],
  base: base, // <--- Add this line
});

/*import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production'
  ? '/TC/'
  : '/',
})
*/