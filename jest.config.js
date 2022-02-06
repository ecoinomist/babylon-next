const {modulesToTranspile} = require('./config')
module.exports = {
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  // testPathIgnorePatterns: ['node_modules/', '.next/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.(graphql|gql)$': 'jest-transform-graphql',
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
  },
  // @Note: `ignore` patterns set inside babel.config.js will not be used by Jest
  transformIgnorePatterns: [
    `node_modules/(?!(${modulesToTranspile.join('|')})/)`,
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  moduleNameMapper: {
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
}
