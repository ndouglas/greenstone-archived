const path = require('path');

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', path.join(__dirname, 'test')],
  moduleNameMapper: {
    '^@/jest/(.*)$': '<rootDir>/src/jest/$1',
    '^@/rom/(.*)$': '<rootDir>/src/rom/$1',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testEnvironment: 'jest-environment-node',
  collectCoverageFrom: ['src/**/*.{js,ts}', '!**/**.test.{js,ts}', '!**/**.matcher.{js,ts}'],
  coverageThreshold: {
    global: {
      statements: 29,
      branches: 28,
      functions: 26,
      lines: 29,
    },
  },
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/dist/'],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};

module.exports = customJestConfig;
