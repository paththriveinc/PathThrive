import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const GITHUB_PAGES_BASE = '/';

export default defineConfig(({ command }) => ({
  base: command === 'build' ? GITHUB_PAGES_BASE : '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
}));
