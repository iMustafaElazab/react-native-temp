import {jest} from '@jest/globals';

jest.mock('@react-native-firebase/crashlytics', () => () => ({
  recordError: jest.fn(),
}));
