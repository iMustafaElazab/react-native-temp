import React from 'react';
import {View} from 'react-native';
import {Provider as ReduxProvider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
import {ScaledSheet} from 'react-native-size-matters';

import {store} from './store';
import AppColors from './enums/AppColors';
import {paperTheme} from './utils';
import {setI18nConfig} from './core';

import NavigationContainer from './navigation/NavigationContainer';

export default () => {
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
