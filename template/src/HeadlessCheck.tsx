import 'react-native-gesture-handler';
import {default as PushNotificationIOS} from '@react-native-community/push-notification-ios';
import messaging from '@react-native-firebase/messaging';
import {default as PushNotification} from 'react-native-push-notification';
import {enableScreens} from 'react-native-screens';
import App from '@src/App';

enableScreens();

function getLogMessage(message: string) {
  return `## index: ${message}`;
}

// Register background handler for firebase messages.
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.info(getLogMessage('BackgroundMessageHandler'), remoteMessage);
});

// Configuration for local notifications.
PushNotification.configure({
  // (required) Called when a remote is received or opened, or local notification is opened.
  onNotification(notification) {
    console.info(getLogMessage('onNotification'), notification);

    // processNotification({
    //   id: notification.id,
    //   key: notification.id,
    //   title: notification.data.title,
    //   message: notification.message,
    // });

    // (required) Called when a remote is received or opened, or local notification is opened.
    notification.finish(PushNotificationIOS.FetchResult.NoData);
  },
});

function HeadlessCheck({isHeadless}: {isHeadless?: boolean}) {
  if (isHeadless) {
    // App has been launched in the background by iOS, ignore.
    return null;
  }

  return <App />;
}

export default HeadlessCheck;
