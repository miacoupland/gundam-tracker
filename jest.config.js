/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  extensionsToTreatAsEsm: ['.ts.'],
  preset: 'jest-preset-angular',
  rootDir: './',
  roots: ['<rootDir>'],
  setupFilesAfterEnv: ['./setup-jest.js'],
  testEnvironment: 'jsdom',
  transform: {},
  transformIgnorePatterns: [],
};
