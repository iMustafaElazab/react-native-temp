import {default as PushNotificationIOS} from '@react-native-community/push-notification-ios';
import {Platform} from 'react-native';
import {getBundleId} from 'react-native-device-info';
import {default as PushNotification} from 'react-native-push-notification';
import {queryNotifications} from '@src/core';
import type {
  MarkNotificationReadResponse,
  ServerError,
  ApiRequest,
  Notification,
  User,
} from '@src/core';
import {push} from '@src/navigation';
import {store, setUser as setStateUser} from '@src/store';
import {queryClient, AppColors} from '@src/utils';
import type {FirebaseMessagingTypes} from '@react-native-firebase/messaging';

const getLogMessage = (message: string) => `## NotificationUtils:: ${message}`;

const packageName: string = getBundleId();
export const defaultChannelId: string = `${packageName}.default_notification_channel`;
export const localChannelId: string = `${packageName}.local_notification_channel`;

/**
 * Clears the specified notification by canceling the local notification, removing delivered notifications (for iOS), and marking the notification as read through an API call.
 *
 * @param notification - The notification to be cleared.
 */
const clearNotifications = (notification: Notification) => {
  console.info(getLogMessage('clearNotifications'), notification);

  if (notification.id && typeof notification.id === 'string') {
    PushNotification.cancelLocalNotification(notification.id);

    if (Platform.OS === 'ios') {
      PushNotificationIOS.removeDeliveredNotifications([notification.id]);
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
const processUserNotification = (
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

  store.dispatch(setStateUser(userWithNewNotificationsCount));

  // Open notification related screen.
  openNotificationRelatedScreen(
    notification,
    shouldSkipOpenNotificationsScreen,
  );
};

/**
 * Process a notification by clearing it, updating the application badge number, and handling user notification.
 *
 * @param notification - The notification to be processed.
 * @param shouldSkipOpenNotificationsScreen - Optional flag to skip opening the notifications screen after processing the notification.
 */
export const processNotification = (
  notification: Notification,
  shouldSkipOpenNotificationsScreen?: boolean,
) => {
  console.info(
    getLogMessage('processNotification'),
    notification,
    shouldSkipOpenNotificationsScreen,
  );

  // Clear notification.
  clearNotifications(notification);

  // Set new badge.
  const {user: stateUser} = store.getState().user;
  console.info(getLogMessage('stateUser'), stateUser);
  const newNotificationsCount = (stateUser?.unreadNotificationsCount ?? 1) - 1;
  PushNotification.setApplicationIconBadgeNumber(newNotificationsCount);

  if (stateUser) {
    processUserNotification(
      notification,
      stateUser,
      newNotificationsCount,
      shouldSkipOpenNotificationsScreen,
    );
  }
};

/**
 * Opens the notification related screen based on the provided notification and optional flag.
 *
 * @param notification - The notification object containing information like id, title, and message.
 * @param shouldSkipOpenNotificationsScreen - Optional flag to determine whether to skip opening the notifications screen.
 *
 * @returns void
 */
export const openNotificationRelatedScreen = (
  notification: Notification,
  shouldSkipOpenNotificationsScreen?: boolean,
) => {
  console.info(
    getLogMessage('openNotificationRelatedScreen'),
    notification,
    shouldSkipOpenNotificationsScreen,
  );

  // TODO: Determine screen to open and navigate to it.
  if (!shouldSkipOpenNotificationsScreen) {
    push('notifications');
  }
};

/**
 * Display a local notification based on the provided remote message.
 *
 * @param remoteMessage - The remote message containing notification data.
 */
export const displayLocalNotification = (
  remoteMessage: FirebaseMessagingTypes.RemoteMessage,
) => {
  console.info(getLogMessage('displayLocalNotification'), remoteMessage);

  const title =
    remoteMessage.notification?.title ??
    typeof remoteMessage.data?.title === 'object'
      ? undefined
      : remoteMessage.data?.title;

  console.info(getLogMessage('title'), title);

  const body =
    remoteMessage.notification?.body ??
    typeof remoteMessage.data?.body === 'object'
      ? undefined
      : remoteMessage.data?.body;

  console.info(getLogMessage('body'), body);

  // If notification body available show local notification.
  if (body) {
    PushNotification.localNotification({
      title: title,
      message: body,
      bigText: body,
      color: AppColors.seed,
      channelId: localChannelId,
      soundName: 'default',
      messageId: remoteMessage.messageId,
      userInfo: remoteMessage.data,
    });
  }
};
