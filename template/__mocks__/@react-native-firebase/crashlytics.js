jest.mock('@react-native-firebase/crashlytics', () => () => ({
  recordError: jest.fn(),
}));
