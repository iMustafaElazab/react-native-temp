import React from 'react';
import {View} from 'react-native';
import {Provider as ReduxProvider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
import {ScaledSheet} from 'react-native-size-matters';
import {configureLog} from 'roqay-react-native-common-components';
import Config from 'react-native-config';

import {store} from './store';
import AppColors from './enums/AppColors';
import {paperTheme} from './utils';
import {setI18nConfig} from './core';

import NavigationContainer from './navigation/NavigationContainer';

const getLogMessage = (message: string) => {
  return `## App: ${message}`;
};

export default () => {
  // Log initialization.
  React.useEffect(() => {
    configureLog({
      // TODO: Replace with app name.
      appName: 'TempApp',
      firebaseLogLevels:
        Config.ENABLE_FIREBASE_LOG === 'true'
          ? ['LOG', 'WARN', 'ERROR']
          : undefined,
      isLocalLogEnable: Config.ENABLE_LOCAL_LOG === 'true',
    });
  }, []);

  // Localization initialization.
  React.useEffect(() => {
    setI18nConfig();
  }, []);

  return (
    <View style={styles.appContainer}>
      <ReduxProvider store={store}>
        <PaperProvider theme={paperTheme}>
          <NavigationContainer />
        </PaperProvider>
      </ReduxProvider>
    </View>
  );
};

const styles = ScaledSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: AppColors.BACKGROUND,
  },
});
