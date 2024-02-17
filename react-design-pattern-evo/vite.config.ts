import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import pages from 'vite-plugin-pages';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), pages()],
  resolve: {
    alias: [
      {
        find: '@ui',
        replacement: path.resolve(__dirname, 'src', 'ui'),
      },
      {
        find: '@containers',
        replacement: path.resolve(__dirname, 'src', 'containers'),
      },
      {
        find: '@providers',
        replacement: path.resolve(__dirname, 'src', 'providers'),
      },
    ],
  },
});
