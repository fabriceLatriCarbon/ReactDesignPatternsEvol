import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  rootDir: './',
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@hoc/(.*)$': '<rootDir>/src/01-high-order-component/$1',
    '^@landing/(.*)$': '<rootDir>/src/00-landing/$1',
    '^@customHooks/(.*)$': '<rootDir>/src/03-custom-hooks/$1',
    '^@propGetters/(.*)$': '<rootDir>/src/04-prop-getters/$1',
    '^@contextAPI/(.*)$': '<rootDir>/src/05-context-api/$1',
    '^@commonHooks/(.*)$': '<rootDir>/src/helpers/hooks/$1',
    '^@commonContexts/(.*)$': '<rootDir>/src/helpers/contexts/$1',
    '^@ui/(.*)$': '<rootDir>/src/ui/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@tests/(.*)$': '<rootDir>/tests/$1'
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts']
};

export default config;
