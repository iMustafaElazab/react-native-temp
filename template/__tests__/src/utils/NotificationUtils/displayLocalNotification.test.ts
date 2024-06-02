import {test, expect, jest, afterEach} from '@jest/globals';
import {default as PushNotification} from 'react-native-push-notification';
import {AppColors} from '@src/utils';
import {
  displayLocalNotification,
  localChannelId,
} from '@src/utils/NotificationUtils';

const mockLocalNotification = jest.spyOn(PushNotification, 'localNotification');

afterEach(() => {
  mockLocalNotification?.mockRestore();
});

test('should display notification when body is available', () => {
  const remoteMessage = {
    notification: {title: 'Test Title', body: 'Test Body'},
    data: {},
    messageId: '12345',
    fcmOptions: {},
  };

  displayLocalNotification(remoteMessage);

  expect(mockLocalNotification).toHaveBeenCalledWith({
    title: 'Test Title',
    message: 'Test Body',
    bigText: 'Test Body',
    color: AppColors.seed,
    channelId: localChannelId,
    soundName: 'default',
    messageId: '12345',
    userInfo: {},
  });
});

test('should handle missing title and body gracefully', () => {
  const remoteMessage = {
    notification: {},
    data: {},
    messageId: '12345',
    fcmOptions: {},
  };

  displayLocalNotification(remoteMessage);
  expect(mockLocalNotification).not.toHaveBeenCalled();
});

test('should use title from remoteMessage.data when notification title is not available', () => {
  const remoteMessage = {
    notification: {body: 'Test Body'},
    data: {title: 'Test Title from data'},
    messageId: '12345',
    fcmOptions: {},
  };

  displayLocalNotification(remoteMessage);

  expect(mockLocalNotification).toHaveBeenCalledWith({
    title: 'Test Title from data',
    message: 'Test Body',
    bigText: 'Test Body',
    color: AppColors.seed,
    channelId: localChannelId,
    soundName: 'default',
    messageId: '12345',
    userInfo: {
      title: 'Test Title from data',
    },
  });
});

test('should use body from remoteMessage.data when notification body is not available', () => {
  const remoteMessage = {
    notification: {},
    data: {body: 'Test Body from data'},
    messageId: '12345',
    fcmOptions: {},
  };

  displayLocalNotification(remoteMessage);

  expect(mockLocalNotification).toHaveBeenCalledWith({
    title: undefined,
    message: 'Test Body from data',
    bigText: 'Test Body from data',
    color: AppColors.seed,
    channelId: localChannelId,
    soundName: 'default',
    messageId: '12345',
    userInfo: {body: 'Test Body from data'},
  });
});

test('should handle title and body as objects in remoteMessage.data gracefully', () => {
  const remoteMessage = {
    notification: {},
    data: {title: {value: 'Test Title'}, body: {value: 'Test Body'}},
    messageId: '12345',
    fcmOptions: {},
  };

  displayLocalNotification(remoteMessage);
  expect(mockLocalNotification).not.toHaveBeenCalled();
});
