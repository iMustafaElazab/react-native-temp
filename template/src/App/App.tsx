import * as React from 'react';
import {View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider as ReduxProvider} from 'react-redux';
import {store} from '@src/store';
import AppContent from './AppContent';
import styles from './styles';

export default React.memo(() => (
  <GestureHandlerRootView style={styles.gestureHandlerRoot}>
    <View style={styles.appContainer}>
      <ReduxProvider store={store}>
        <AppContent />
      </ReduxProvider>
    </View>
  </GestureHandlerRootView>
));
