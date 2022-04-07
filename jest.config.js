module.exports = {
  verbose: true,
  setupFilesAfterEnv: ['./react/setupTests.ts'],
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', 'react/components'],
}