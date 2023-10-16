import * as React from 'react';
import {Animated, StyleSheet} from 'react-native';
import {Screen} from '@src/components';
import {AppImages} from '@src/enums';
import type {RootStackScreenProps} from '@src/navigation';
import styles from './styles';
import {useSplash} from './useSplash';

export default React.memo((props: RootStackScreenProps<'splash'>) => {
  // #region Variables
  const {navigation} = props;
  const opacity = React.useRef(new Animated.Value(1));
  const translateY = React.useRef(new Animated.Value(0));
  // #endregion

  // #region State
  const [isBootSplashLogoLoaded, setBootSplashLogoLoaded] =
    React.useState<boolean>(false);
  // #endregion

  const {isBootSplashVisible} = useSplash({
    navigation,
    opacity,
    translateY,
    isBootSplashLogoLoaded,
  });

  // #region UI
  return (
    <Screen>
      {isBootSplashVisible && (
        <Animated.View
          style={[
            StyleSheet.absoluteFill,
            styles.bootSplash,
            {opacity: opacity.current},
          ]}>
          <Animated.Image
            source={AppImages.BOOT_SPLASH_LOGO}
            fadeDuration={0}
            resizeMode="contain"
            onLoadEnd={() => setBootSplashLogoLoaded(true)}
            style={[
              styles.logo,
              {transform: [{translateY: translateY.current}]},
            ]}
          />
        </Animated.View>
      )}
    </Screen>
    // #endregion
  );
});
