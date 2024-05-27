import {test, expect} from '@jest/globals';
import {renderHook} from '@testing-library/react-native';
import {AppColors} from '@src/utils/Theme';
import useAppThemeColorsLight from '@src/utils/Theme/useAppThemeColorsLight';

test('check `useAppThemeColorsLight` containing value', () => {
  const {result} = renderHook(() => useAppThemeColorsLight());
  expect(result.current).toBeDefined();
});

test('check primary color to be primary color for light theme', () => {
  const {result} = renderHook(() => useAppThemeColorsLight());
  expect(result.current.primary).toBe(AppColors.themeLight.primary);
});
