import {StyleSheet} from 'react-native';
import {AppColors} from '@src/enums';

const styles = StyleSheet.create({
  bootSplash: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.BACKGROUND,
  },
  logo: {
    height: 89,
    width: 100,
  },
});

export default styles;
