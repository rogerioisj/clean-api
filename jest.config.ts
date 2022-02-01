export default {
  roots: '<rootDir>/src',
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  transform: {
    '.*\\.ts$': 'ts-jest'
  }
}
