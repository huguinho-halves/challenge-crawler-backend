module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    testTimeout: 15000,
    setupFiles: [
      'dotenv/config'
    ],
    collectCoverage: true,
    collectCoverageFrom: ["./src/**"],
    coverageThreshold: {
      global: {
        lines: 30
      }
    }
};