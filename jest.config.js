const path = require('path');

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', path.join(__dirname, 'test')],
  moduleNameMapper: {},
  testEnvironment: 'jest-environment-node',
  collectCoverageFrom: ['src/**/*.{js,ts}', '!**/**.test.{js,jsx,ts,tsx}'],
  coverageThreshold: {
    global: {
      statements: 29,
      branches: 28,
      functions: 26,
      lines: 29,
    },
  },
  testPathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/build/',
  ],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};

module.exports = customJestConfig;
