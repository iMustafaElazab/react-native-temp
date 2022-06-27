import React from 'react';
import {StatusBar, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {Text} from 'roqay-react-native-common-components';
import Config from 'react-native-config';

export default () => {
  // TODO: Design splash.
  return (
    <>
      <Text type="bold" style={styles.text}>
        Splash Screen
      </Text>
      <Text style={styles.text}>{`Environment: ${Config.ENV_NAME}`}</Text>
    </>
  );
};

const styles = ScaledSheet.create({
  text: {
    alignSelf: 'center',
    textAlign: 'center',
  },
});
