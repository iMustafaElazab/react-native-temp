import {test, expect, jest} from '@jest/globals';

import {processUserNotification} from '@src/utils/NotificationUtils/Helpers';

const notification = {
  id: 1,
  key: '1',
  title: 'Test',
  message: 'Test message',
};

const stateUser = {id: 1, unreadNotificationsCount: 0};

test('should update unread notifications count in user state when called with valid notification', () => {
  const newNotificationsCount = 5;
  const shouldSkipOpenNotificationsScreen = false;
  jest.spyOn(console, 'info').mockImplementation(() => {});

  processUserNotification(
    notification,
    stateUser,
    newNotificationsCount,
    shouldSkipOpenNotificationsScreen,
  );

  expect(console.info).toHaveBeenCalledWith(
    '## NotificationUtils::Helpers:: userWithNewNotificationsCount',
    {...stateUser, unreadNotificationsCount: newNotificationsCount},
  );
});

test('should update unread notifications count to zero in user state when called with zero newNotificationsCount', () => {
  const newNotificationsCount = 0;
  const shouldSkipOpenNotificationsScreen = false;
  jest.spyOn(console, 'info').mockImplementation(() => {});

  processUserNotification(
    notification,
    stateUser,
    newNotificationsCount,
    shouldSkipOpenNotificationsScreen,
  );

  expect(console.info).toHaveBeenCalledWith(
    '## NotificationUtils::Helpers:: userWithNewNotificationsCount',
    {...stateUser, unreadNotificationsCount: newNotificationsCount},
  );
});

test('should update unread notifications count to zero in user state when called with negative newNotificationsCount', () => {
  const newNotificationsCount = -1;
  const shouldSkipOpenNotificationsScreen = false;
  jest.spyOn(console, 'info').mockImplementation(() => {});

  processUserNotification(
    notification,
    stateUser,
    newNotificationsCount,
    shouldSkipOpenNotificationsScreen,
  );

  expect(console.info).toHaveBeenCalledWith(
    '## NotificationUtils::Helpers:: userWithNewNotificationsCount',
    {...stateUser, unreadNotificationsCount: newNotificationsCount},
  );
});
