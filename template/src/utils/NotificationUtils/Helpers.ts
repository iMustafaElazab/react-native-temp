import {default as PushNotificationIOS} from '@react-native-community/push-notification-ios';
import {Platform} from 'react-native';
import {default as Config} from 'react-native-config';
import {default as PushNotification} from 'react-native-push-notification';
import {queryNotifications} from '@src/core';
import type {
  MarkNotificationReadResponse,
  ServerError,
  ApiRequest,
  Notification,
  User,
} from '@src/core';
import {store, setUser as setStateUser} from '@src/store';
import {openNotificationRelatedScreen, queryClient} from '@src/utils';

const getLogMessage = (message: string) =>
  `## NotificationUtils::Helpers:: ${message}`;

/**
 * Clears the specified notification by canceling the local notification, removing delivered notifications (for iOS), and marking the notification as read through an API call.
 *
 * @param notification - The notification to be cleared.
 */
export const clearNotifications = (notification: Notification) => {
  console.info(getLogMessage('clearNotifications'), notification);

  if (notification.id && typeof notification.id === 'string') {
    PushNotification.cancelLocalNotification(notification.id);

    if (Platform.OS === 'ios') {
      PushNotificationIOS.removeDeliveredNotifications([notification.id]);
    }

    if (Config.ENV_NAME === 'Unit Testing') {
      return;
    }

    // Call mark notification read API.
    // TODO: Change params based on API.
    queryClient
      .getMutationCache()
      .build<
        MarkNotificationReadResponse,
        ServerError,
        ApiRequest<any, string | number>,
        unknown
      >(queryClient, {
        mutationFn: request => queryNotifications.markNotificationRead(request),
        onSuccess: () => {
          queryClient.invalidateQueries({queryKey: ['notifications']});
        },
      })
      .execute({pathVar: notification.id});
  }
};

/**
 * Process a user notification by updating the unread notifications count in the user state and opening the related screen if necessary.
 *
 * @param notification - The notification object to be processed.
 * @param stateUser - The current user object from the state.
 * @param newNotificationsCount - The count of new notifications to be set for the user.
 * @param shouldSkipOpenNotificationsScreen - Optional flag to determine if the notifications screen should be skipped.
 */
export const processUserNotification = (
  notification: Notification,
  stateUser: User,
  newNotificationsCount: number,
  shouldSkipOpenNotificationsScreen?: boolean,
) => {
  console.info(
    getLogMessage('processUserNotification'),
    notification,
    stateUser,
    newNotificationsCount,
    shouldSkipOpenNotificationsScreen,
  );

  // Set new notifications count to redux state.
  const userWithNewNotificationsCount = {...stateUser};

  userWithNewNotificationsCount.unreadNotificationsCount =
    newNotificationsCount;

  console.info(
    getLogMessage('userWithNewNotificationsCount'),
    userWithNewNotificationsCount,
  );

  if (Config.ENV_NAME === 'Unit Testing') {
    return;
  }

  store.dispatch(setStateUser(userWithNewNotificationsCount));

  // Open notification related screen.
  openNotificationRelatedScreen(
    notification,
    shouldSkipOpenNotificationsScreen,
  );
};
