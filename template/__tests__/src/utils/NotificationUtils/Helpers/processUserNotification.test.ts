import {describe, test, expect, jest} from '@jest/globals';

import {processUserNotification} from '@src/utils/NotificationUtils/Helpers';

describe('processUserNotification', () => {
  test('should update unread notifications count in user state when called with valid notification', () => {
    const notification = {
      id: 1,
      key: '1',
      title: 'Test',
      message: 'Test message',
    };

    const stateUser = {id: 1, unreadNotificationsCount: 0};
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
});
