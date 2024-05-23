jest.mock('@react-native-firebase/app', () => () => ({
  delete: jest.fn(),
}));
