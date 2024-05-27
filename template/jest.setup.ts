import {jest} from '@jest/globals';
import mockRNCNetInfo from '@react-native-community/netinfo/jest/netinfo-mock.js';
import mockRNDeviceInfo from 'react-native-device-info/jest/react-native-device-info-mock';

jest.mock('@react-native-community/netinfo', () => mockRNCNetInfo);

jest.mock('react-native-device-info', () => mockRNDeviceInfo);

jest.mock('react-native-localize', () => {
  const getCalendar = () => 'gregorian';
  const getCountry = () => 'US';
  const getCurrencies = () => ['USD', 'EUR'];

  const getLocales = () => [
    {countryCode: 'US', languageTag: 'en-US', languageCode: 'en', isRTL: false},
    {countryCode: 'FR', languageTag: 'fr-FR', languageCode: 'fr', isRTL: false},
  ];

  const getNumberFormatSettings = () => ({
    decimalSeparator: '.',
    groupingSeparator: ',',
  });

  const findBestLanguageTag = () => ({
    languageTag: 'en-US',
    isRTL: false,
  });

  const getTemperatureUnit = () => 'celsius';
  const getTimeZone = () => 'Europe/Paris';
  const uses24HourClock = () => true;
  const usesAutoDateAndTime = () => true;
  const usesAutoTimeZone = () => true;
  const usesMetricSystem = () => true;

  return {
    getCalendar,
    getCountry,
    getCurrencies,
    getLocales,
    getNumberFormatSettings,
    findBestLanguageTag,
    getTemperatureUnit,
    getTimeZone,
    uses24HourClock,
    usesAutoDateAndTime,
    usesAutoTimeZone,
    usesMetricSystem,
  };
});

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

jest.mock('@react-native-community/push-notification-ios', () => ({
  FetchResult: 'UIBackgroundFetchResultNewData',
  AuthorizationStatus: 2,
  presentLocalNotification: jest.fn(),
  scheduleLocalNotification: jest.fn(),
  addNotificationRequest: jest.fn(),
  cancelAllLocalNotifications: jest.fn(),
  removeAllPendingNotificationRequests: jest.fn(),
  removePendingNotificationRequests: jest.fn(),
  removeAllDeliveredNotifications: jest.fn(),
  getDeliveredNotifications: jest.fn(),
  removeDeliveredNotifications: jest.fn(),
  setApplicationIconBadgeNumber: jest.fn(),
  getApplicationIconBadgeNumber: jest.fn(),
  cancelLocalNotifications: jest.fn(),
  getScheduledLocalNotifications: jest.fn(),
  getPendingNotificationRequests: jest.fn(),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  requestPermissions: jest.fn(() => Promise.resolve()),
  abandonPermissions: jest.fn(),
  checkPermissions: jest.fn(),
  getInitialNotification: jest.fn(() => Promise.resolve()),
  setNotificationCategories: jest.fn(),
}));

jest.mock('react-native-push-notification', () => ({
  configure: jest.fn(),
  unregister: jest.fn(),
  localNotification: jest.fn(),
  localNotificationSchedule: jest.fn(),
  requestPermissions: jest.fn(() => Promise.resolve()),
  subscribeToTopic: jest.fn(),
  unsubscribeFromTopic: jest.fn(),
  presentLocalNotification: jest.fn(),
  scheduleLocalNotification: jest.fn(),
  cancelLocalNotifications: jest.fn(),
  cancelLocalNotification: jest.fn(),
  clearLocalNotification: jest.fn(),
  cancelAllLocalNotifications: jest.fn(),
  setApplicationIconBadgeNumber: jest.fn(),
  getApplicationIconBadgeNumber: jest.fn(),
  popInitialNotification: jest.fn(),
  abandonPermissions: jest.fn(),
  checkPermissions: jest.fn(),
  clearAllNotifications: jest.fn(),
  removeAllDeliveredNotifications: jest.fn(),
  getDeliveredNotifications: jest.fn(),
  getScheduledLocalNotifications: jest.fn(),
  removeDeliveredNotifications: jest.fn(),
  invokeApp: jest.fn(),
  getChannels: jest.fn(),
  channelExists: jest.fn(),
  createChannel: jest.fn(),
  channelBlocked: jest.fn(),
  deleteChannel: jest.fn(),
}));

jest.mock('@react-native-firebase/analytics', () => () => ({
  logEvent: jest.fn(),
  setUserProperties: jest.fn(),
  setUserId: jest.fn(),
  setCurrentScreen: jest.fn(),
}));

jest.mock('@react-native-firebase/messaging', () => () => ({
  hasPermission: jest.fn(() => Promise.resolve(true)),
  subscribeToTopic: jest.fn(),
  unsubscribeFromTopic: jest.fn(),
  requestPermission: jest.fn(() => Promise.resolve(true)),
  getToken: jest.fn(() => Promise.resolve('myMockToken')),
}));
