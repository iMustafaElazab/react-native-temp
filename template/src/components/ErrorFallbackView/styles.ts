import {StyleSheet} from 'react-native';
import {vs} from 'react-native-size-matters';
import {AppColors} from '@src/enums';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingVertical: vs(16),
  },
  text: {
    color: AppColors.ON_BACKGROUND,
    textAlign: 'center',
    width: '90%',
    alignSelf: 'center',
  },
  title: {
    // TODO: Add font family relative to app font.
    // fontFamily: 'Cairo-Bold',
  },
  message: {
    // TODO: Add font family relative to app font.
    // fontFamily: 'Cairo-Regular',
  },
  btn: {
    width: '90%',
    alignSelf: 'center',
    marginTop: vs(32),
    backgroundColor: AppColors.PRIMARY,
  },
  btnTxt: {
    color: AppColors.ON_PRIMARY,
    // TODO: Add font family relative to app font.
    // fontFamily: 'Cairo-Bold',
  },
});

export default styles;
