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
        find: '@hoc',
        replacement: path.resolve(__dirname, 'src', '01-high-order-component'),
      },
      {
        find: '@renderProps',
        replacement: path.resolve(__dirname, 'src', '02-render-props'),
      },
      {
        find: '@customHooks',
        replacement: path.resolve(__dirname, 'src', '03-custom-hooks'),
      },
      {
        find: '@ui',
        replacement: path.resolve(__dirname, 'src', 'ui'),
      },
      {
        find: '@commonHooks',
        replacement: path.resolve(__dirname, 'src', 'helpers', 'hooks'),
      },
    ],
  },
});
