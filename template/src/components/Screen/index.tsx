import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {StatusBar, NavigationBar} from '@src/components';
import {useAppTheme} from '@src/utils';
import styles from './styles';
import type {Props} from './types';

export default React.memo((props: Props) => {
  const insets = useSafeAreaInsets();
  const theme = useAppTheme();

  const {
    edges,
    statusBarProps,
    statusBarColor,
    navigationBarProps,
    navigationBarColor,
    children,
    style,
  } = props;

  const contentStyle = {
    backgroundColor: theme.colors.background,
    paddingRight: !edges || edges?.includes('right') ? insets.right : 0,
    paddingLeft: !edges || edges?.includes('left') ? insets.left : 0,
  };

  return (
    <SafeAreaProvider>
      <StatusBar
        edges={edges}
        statusBarProps={statusBarProps}
        statusBarColor={statusBarColor}
      />
      <View style={StyleSheet.flatten([styles.content, contentStyle, style])}>
        {children}
      </View>
      <NavigationBar
        edges={edges}
        navigationBarProps={navigationBarProps}
        navigationBarColor={navigationBarColor}
      />
    </SafeAreaProvider>
  );
});
