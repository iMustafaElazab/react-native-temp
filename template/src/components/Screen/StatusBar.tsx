import * as React from 'react';
import {View} from 'react-native';
import {StatusBar} from 'react-native-bars';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import tinyColor from 'tinycolor2';
import {AppColors} from '@src/enums';
import type {Props} from './types';

export default React.memo((props: Props) => {
  const insets = useSafeAreaInsets();
  const {edges, statusBarProps, statusBarColor} = props;

  const {barStyle: statusBarStyle, ...restStatusBarProps} =
    statusBarProps || {};

  const statusBarContainerStyle = {
    height: !edges || (edges && edges.includes('top')) ? insets.top : 0,
    backgroundColor: statusBarColor ? statusBarColor : AppColors.BACKGROUND,
  };

  return (
    <View style={statusBarContainerStyle}>
      <StatusBar
        barStyle={
          statusBarStyle
            ? statusBarStyle
            : tinyColor(
                  statusBarColor ? statusBarColor : AppColors.BACKGROUND,
                ).isLight()
              ? 'dark-content'
              : 'light-content'
        }
        {...restStatusBarProps}
      />
    </View>
  );
});
