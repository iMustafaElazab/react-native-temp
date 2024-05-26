import {jest} from '@jest/globals';

jest.mock('react-native', () => {
  const RN = jest.requireActual<typeof import('react-native')>('react-native');

  RN.NativeModules.I18nManager = {
    allowRTL: jest.fn(),
    forceRTL: jest.fn(),
    swapLeftAndRightInRTL: jest.fn(),
    getConstants: () => ({
      isRTL: false,
      doLeftAndRightSwapInRTL: true,
    }),
  };

  RN.NativeModules.SettingsManager = {
    settings: {
      AppleLocale: 'en-US',
      AppleLanguages: ['en-US'],
    },
  };

  return RN;
});
