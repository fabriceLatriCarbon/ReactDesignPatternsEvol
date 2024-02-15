import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
    ],
  },
});
