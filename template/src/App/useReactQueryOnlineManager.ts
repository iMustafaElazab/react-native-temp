import {addEventListener as addNetInfoEventListener} from '@react-native-community/netinfo';
import * as React from 'react';
import {Platform} from 'react-native';
import {onlineManager} from 'react-query';

export const useReactQueryOnlineManager = () => {
  React.useEffect(() => {
    // React Query already supports on reconnect auto refetch in web browser.
    if (Platform.OS !== 'web') {
      return addNetInfoEventListener(state => {
        onlineManager.setOnline(
          state.isConnected != null &&
            state.isConnected &&
            Boolean(state.isInternetReachable),
        );
      });
    }
  }, []);
};
