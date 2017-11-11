module.exports = {
  collectCoverage: false,
  coverageDirectory: 'coverage',
  mapCoverage: true,
  collectCoverageFrom: ["src/**/*.ts", "!src/**/*.interface.ts", "!src/**/index.ts", "!**/node_modules/**"],
  transform: {
    '^.+\\.tsx?$': '<rootDir>/node_modules/ts-jest/preprocessor.js'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: [ 'ts', 'js', 'json']
}