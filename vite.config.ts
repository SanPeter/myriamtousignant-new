import { resolve } from 'path';
import { defineConfig } from 'vite';
import hugoPlugin from 'vite-hugo-plugin'

// Root directory of our application
const appDir = __dirname;

// The directory where hugo builds it's files.
const hugoOutDir = resolve(appDir, 'docs');

const ignoreHTMLFiles = [];

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        hugoPlugin({ appDir, hugoOutDir, ignoreHTMLFiles }) // Hugo plugin that configures vite to work with hugo
    ], 
});