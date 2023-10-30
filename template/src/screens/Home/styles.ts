import {StyleSheet} from 'react-native';
import {vs} from 'react-native-size-matters';

const styles = StyleSheet.create({
  scrollView: {
    marginVertical: vs(8),
  },
  scrollViewContent: {
    paddingHorizontal: '5%',
    paddingVertical: vs(8),
    gap: vs(8),
  },
});

export default styles;
