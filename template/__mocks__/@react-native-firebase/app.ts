import {jest} from '@jest/globals';

jest.mock('@react-native-firebase/app', () => () => ({
  delete: jest.fn(),
}));
