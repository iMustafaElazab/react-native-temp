import {configureLog} from '@eslam-elmeniawy/react-native-common-components';
import * as React from 'react';
import {default as Config} from 'react-native-config';
import {getApplicationName} from 'react-native-device-info';

export const useLogInitialization = () => {
  React.useEffect(() => {
    const appName = getApplicationName();

    configureLog?.({
      appName: appName,
      firebaseLogLevels:
        Config.ENABLE_FIREBASE_LOG === 'true'
          ? ['LOG', 'WARN', 'ERROR']
          : undefined,
      isLocalLogEnable: Config.ENABLE_LOCAL_LOG === 'true',
    });
  }, []);
};
