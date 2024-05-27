import {jest} from '@jest/globals';
import mockRNCNetInfo from '@react-native-community/netinfo/jest/netinfo-mock.js';
import mockRNDeviceInfo from 'react-native-device-info/jest/react-native-device-info-mock';

jest.mock('@react-native-community/netinfo', () => mockRNCNetInfo);

jest.mock('react-native-device-info', () => mockRNDeviceInfo);

jest.mock('react-native-bootsplash', () => {
  return {
    hide: jest.fn<() => Promise<void>>().mockResolvedValue(),
    isVisible: jest.fn<() => Promise<boolean>>().mockResolvedValue(false),
    useHideAnimation: jest.fn().mockReturnValue({
      container: {},
      logo: {source: 0},
      brand: {source: 0},
    }),
  };
});

jest.mock('react-native-keyboard-aware-scroll-view', () => {
  const KeyboardAwareScrollView = ({
    children,
  }: Readonly<React.PropsWithChildren<{}>>) => children;

  return {KeyboardAwareScrollView};
});

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
