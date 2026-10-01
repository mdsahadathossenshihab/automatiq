import { defineConfig } from 'vite';
import { resolve } from 'node:path';

const pages = [
  'index','services','service-details','pricing','connect-meta','login',
  'dashboard','admin','automation','social-automation','vibe-coding','ai-support','404'
];

export default defineConfig({
  build: {
    rollupOptions: {
      input: Object.fromEntries(pages.map(page => [page, resolve(process.cwd(), `${page}.html`)]))
    }
  }
});
