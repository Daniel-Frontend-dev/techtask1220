module.exports = {
  roots: ['./tests/unit/components', './components'],
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  transform: {
      '^.+\\.tsx?$': 'babel-jest',
  },
  setupFilesAfterEnv: ['./src/setupTests.ts'],
};
