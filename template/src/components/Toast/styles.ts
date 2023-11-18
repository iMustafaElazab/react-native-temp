import {StyleSheet} from 'react-native';
import {ms} from 'react-native-size-matters';
import {AppColors} from '@src/enums';

const styles = StyleSheet.create({
  container: {
    borderRadius: ms(8),
    borderWidth: StyleSheet.hairlineWidth,
    overflow: 'hidden',
    backgroundColor: AppColors.SURFACE,
    borderStartWidth: ms(8),
  },
  text: {
    margin: ms(8),
    color: AppColors.ON_SURFACE,
  },
});

export default styles;
