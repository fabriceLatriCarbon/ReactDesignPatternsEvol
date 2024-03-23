import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // 👋 add the line below to add jsdom to vite
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.ts'
  },
  resolve: {
    alias: [
      {
        find: '@landing',
        replacement: path.resolve(__dirname, 'src', '00-landing')
      },
      {
        find: '@hoc',
        replacement: path.resolve(__dirname, 'src', '01-high-order-component')
      },
      {
        find: '@renderProps',
        replacement: path.resolve(__dirname, 'src', '02-render-props')
      },
      {
        find: '@customHooks',
        replacement: path.resolve(__dirname, 'src', '03-custom-hooks')
      },
      {
        find: '@propGetters',
        replacement: path.resolve(__dirname, 'src', '04-prop-getters')
      },
      {
        find: '@contextAPI',
        replacement: path.resolve(__dirname, 'src', '05-context-api')
      },
      {
        find: '@ui',
        replacement: path.resolve(__dirname, 'src', 'ui')
      },
      {
        find: '@commonHooks',
        replacement: path.resolve(__dirname, 'src', 'helpers', 'hooks')
      },
      {
        find: '@commonContexts',
        replacement: path.resolve(__dirname, 'src', 'helpers', 'contexts')
      },
      {
        find: '@utils',
        replacement: path.resolve(__dirname, 'src', 'utils')
      },
      {
        find: '@tests',
        replacement: path.resolve(__dirname, 'tests')
      }
    ]
  }
});
