import {
  LoadingDialog,
  getStatusBarHeight,
} from '@eslam-elmeniawy/react-native-common-components';
import * as React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {ToastProvider} from 'react-native-toast-notifications';
import {ErrorDialog, Toast} from '@src/components';
import {NavigationContainer} from '@src/navigation';
import {paperTheme} from '@src/utils';
import {useFirebaseMessagingInitialization} from './useFirebaseMessagingInitialization';
import {useForegroundMessagesListener} from './useForegroundMessagesListener';
import {useLocalizationInitialization} from './useLocalizationInitialization';
import {useLogInitialization} from './useLogInitialization';
import {useNetworkListener} from './useNetworkListener';
import {useNotificationsInteraction} from './useNotificationsInteraction';

export default React.memo(() => {
  useLogInitialization();
  const languageLoaded = useLocalizationInitialization();
  useNetworkListener();
  useFirebaseMessagingInitialization();
  useForegroundMessagesListener();
  useNotificationsInteraction();

  // #region UI
  return languageLoaded ? (
    <PaperProvider theme={paperTheme}>
      <ToastProvider
        placement="top"
        offset={getStatusBarHeight()}
        renderToast={toastOptions => <Toast {...toastOptions} />}>
        <NavigationContainer />
        <ErrorDialog />
        <LoadingDialog />
      </ToastProvider>
    </PaperProvider>
  ) : undefined;
  // #endregion
});
