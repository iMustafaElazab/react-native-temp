module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/react-native/extend-expect'],
  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?(@react-native|react-native|@react-native-community|react-native-size-matters|react-redux|@react-navigation|reactotron-react-native-mmkv)/)',
  ],
};
