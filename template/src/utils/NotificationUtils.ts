import {default as PushNotificationIOS} from '@react-native-community/push-notification-ios';
import {Platform} from 'react-native';
import {getBundleId} from 'react-native-device-info';
import {default as PushNotification} from 'react-native-push-notification';
import type {Notification, User} from '@src/core';
import {AppColors} from '@src/enums';
import {store, setUser as setStateUser} from '@src/store';
import type {FirebaseMessagingTypes} from '@react-native-firebase/messaging';

const getLogMessage = (message: string) => `## NotificationUtils:: ${message}`;

const packageName: string = getBundleId();
export const defaultChannelId: string = `${packageName}.default_notification_channel`;
export const localChannelId: string = `${packageName}.local_notification_channel`;

const clearNotifications = (notification: Notification) => {
  console.info(getLogMessage('clearNotifications'), notification);

  if (notification.id && typeof notification.id === 'string') {
    PushNotification.cancelLocalNotification(notification.id);

    if (Platform.OS === 'ios') {
      PushNotificationIOS.removeDeliveredNotifications([notification.id]);
    }

    // TODO: Call mark notification read API.
  }
};

const processUserNotification = (
  notification: Notification,
  stateUser: User,
  newNotificationsCount: number,
) => {
  // Set new notifications count to redux state.
  const userWithNewNotificationsCount = {...stateUser};

  userWithNewNotificationsCount.unreadNotificationsCount =
    newNotificationsCount;

  console.info(
    getLogMessage('userWithNewNotificationsCount'),
    userWithNewNotificationsCount,
  );

  store.dispatch(setStateUser(userWithNewNotificationsCount));

  console.info(getLogMessage('User Available'));

  // Open notification related screen.
  openNotificationRelatedScreen(notification);
};

export const processNotification = (notification: Notification) => {
  console.info(getLogMessage('processNotification'), notification);

  // Clear notification.
  clearNotifications(notification);

  // Set new badge.
  const {user: stateUser} = store.getState().user;
  console.info(getLogMessage('stateUser'), stateUser);
  const newNotificationsCount = (stateUser?.unreadNotificationsCount || 1) - 1;
  PushNotification.setApplicationIconBadgeNumber(newNotificationsCount);

  if (stateUser) {
    processUserNotification(notification, stateUser, newNotificationsCount);
  }
};

export const openNotificationRelatedScreen = (notification: Notification) => {
  console.info(getLogMessage('openNotificationRelatedScreen'), notification);
  // TODO: Determine screen to open and navigate to it.
};

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
      color: AppColors.PRIMARY,
      channelId: localChannelId,
      soundName: 'default',
      messageId: remoteMessage.messageId,
      userInfo: remoteMessage.data,
    });
  }
};
