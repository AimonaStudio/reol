module.exports = {
  verbose: false,
  roots: [
    '<rootDir>/src',
    '<rootDir>/tests/unit'
  ],
  moduleFileExtensions: [
    "js",
    "json"
  ],
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    '^@/test$': '<rootDir>/test/index.js',
    '^@/test/(.*)$': '<rootDir>/test/$1',
    '^reol/(.*)$': '<rootDir>/src/$1',
    "^vue$": "vue/dist/vue.common.js"
  },
  transform: {
    "\\.(js)$": "babel-jest"
  },
  collectCoverageFrom: [
    "src/**/*.{js}",
    "!**/node_modules/**",
    "!**/*.d.ts"
  ],
  coverageDirectory: "coverage",
  testEnvironment: "node",
}
