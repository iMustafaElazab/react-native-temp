import {Text} from '@eslam-elmeniawy/react-native-common-components';
import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import tinycolor from 'tinycolor2';
import {AppColors} from '@src/enums';
import styles from './styles';
import type {ToastProps} from 'react-native-toast-notifications/lib/typescript/toast';

export default React.memo((toastOptions: ToastProps) => {
  const indicatorColor = tinycolor(
    toastOptions.type === 'danger' ? AppColors.ERROR : AppColors.PRIMARY,
  );

  const borderColor = indicatorColor.clone();
  borderColor.setAlpha(0.25);

  return (
    <View
      style={StyleSheet.compose(styles.container, {
        borderColor: borderColor.toHex8String(),
        borderStartColor: indicatorColor.toHex8String(),
      })}>
      <Text style={styles.text}>{toastOptions.message}</Text>
    </View>
  );
});
