import {jest} from '@jest/globals';

jest.mock('react-native', () => {
  const RN = jest.requireActual<typeof import('react-native')>('react-native');

  RN.NativeModules.SourceCode = {
    getConstants() {
      return {
        scriptURL: "http://10.0.2.2:8081/index.bundle?platform=android&dev=true&lazy=true&minify=false&app=com.vision&modulesOnly=false&runModule=true",
      };
    },
  };

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
