module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif)$': 'identity-obj-proxy',
    '^.+\\.svg$': '<rootDir>/svgTransform.js',
    '^animate.css$': '<rootDir>/mocks/animate.css.js',
  },
  // transformIgnorePatterns: ['/node_modules/(?!query-string)/'],
};
