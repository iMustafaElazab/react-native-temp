import {describe, test, expect, jest, afterEach} from '@jest/globals';
import {default as PushNotificationIOS} from '@react-native-community/push-notification-ios';
import {Platform} from 'react-native';
import {default as PushNotification} from 'react-native-push-notification';
import {clearNotifications} from '@src/utils/NotificationUtils/Helpers';

describe('clearNotifications HAPPY PATH', () => {
  const mockCancelLocalNotification = jest.spyOn(
    PushNotification,
    'cancelLocalNotification',
  );

  const mockRemoveDeliveredNotifications = jest.spyOn(
    PushNotificationIOS,
    'removeDeliveredNotifications',
  );

  afterEach(() => {
    mockCancelLocalNotification?.mockClear();
    mockRemoveDeliveredNotifications?.mockClear();
  });

  test('should clear local notification when notification ID is a string', () => {
    const notification = {
      id: '123',
      key: '123',
      title: 'Test',
      message: 'Test message',
    };

    clearNotifications(notification);
    expect(mockCancelLocalNotification).toHaveBeenCalledWith('123');

    if (Platform.OS === 'ios') {
      expect(mockRemoveDeliveredNotifications).toHaveBeenCalledWith(['123']);
    }
  });
});

describe('clearNotifications EDGE CASES', () => {
  const mockCancelLocalNotification = jest.spyOn(
    PushNotification,
    'cancelLocalNotification',
  );

  const mockRemoveDeliveredNotifications = jest.spyOn(
    PushNotificationIOS,
    'removeDeliveredNotifications',
  );

  afterEach(() => {
    mockCancelLocalNotification?.mockClear();
    mockRemoveDeliveredNotifications?.mockClear();
  });

  test('should not clear local notification when notification ID is undefined or null', () => {
    const notification = {
      id: undefined,
      key: '',
      title: 'Test',
      message: 'Test message',
    };

    clearNotifications(notification);
    expect(mockCancelLocalNotification).not.toHaveBeenCalled();

    if (Platform.OS === 'ios') {
      expect(mockRemoveDeliveredNotifications).not.toHaveBeenCalled();
    }
  });

  test('should not clear notification when ID is not a string', () => {
    const notification = {
      id: 123,
      key: '123',
      title: 'Test',
      message: 'Test message',
    };

    clearNotifications(notification);
    expect(mockCancelLocalNotification).not.toHaveBeenCalled();
    expect(mockRemoveDeliveredNotifications).not.toHaveBeenCalled();
  });
});
