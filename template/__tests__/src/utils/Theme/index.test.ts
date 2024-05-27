import {test, expect} from '@jest/globals';
import {renderHook} from '@testing-library/react-native';
import {AppColors, useAppTheme} from '@src/utils/Theme';

test('check `AppColors` and `useAppTheme` containing values', () => {
  expect(AppColors).toBeDefined();
  const {result} = renderHook(() => useAppTheme());
  expect(result.current).toBeDefined();
});
