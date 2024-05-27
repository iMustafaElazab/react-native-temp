module.exports = {
  preset: 'react-native',
  moduleNameMapper: {
    '@src/(.*)$': '<rootDir>/src/$1',
    '@packageJson': '<rootDir>/package.json',
    '@appJson': '<rootDir>/app.json',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  modulePaths: ['<rootDir>'],
  setupFilesAfterEnv: [
    './jest.setup.ts',
    '@testing-library/react-native/extend-expect',
  ],
  setupFiles: [
    '<rootDir>/node_modules/react-native-gesture-handler/jestSetup.js',
  ],
  // transformIgnorePatterns: [
  //   'node_modules/(?!(jest-)?(@react-native|react-native|@react-native-community|react-native-size-matters|react-redux|@react-navigation|reactotron-react-native-mmkv)/)',
  // ],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?(react-native|@react-native|@react-native-community|@react-navigation|react-redux|react-native-size-matters|reactotron-react-native-mmkv)/)',
  ],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: [
    'src/assets',
    'src/enums',
    'src/translations',
    'src/core/Api/entities',
    'src/core/Api/fakers',
    'src/core/Api/responses',
  ],
};
