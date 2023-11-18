import {Text, Button} from '@eslam-elmeniawy/react-native-common-components';
import * as React from 'react';
import {hide as rnBootSplashHide} from 'react-native-bootsplash';
import RNRestart from 'react-native-restart';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Screen} from '@src/components';
import {translate} from '@src/core';
import styles from './styles';

export default React.memo(() => {
  React.useEffect(() => {
    rnBootSplashHide();
  }, []);

  return (
    <SafeAreaProvider>
      <Screen style={styles.container}>
        <Text type="bold" size={18} style={[styles.text, styles.title]}>
          {translate('error_fallback_title')}
        </Text>
        <Text style={[styles.text, styles.message]}>
          {translate('error_fallback_message')}
        </Text>
        <Button
          text={translate('restart_app')}
          onPress={() => RNRestart.Restart()}
          style={styles.btn}
          textProps={{style: styles.btnTxt}}
        />
      </Screen>
    </SafeAreaProvider>
  );
});
