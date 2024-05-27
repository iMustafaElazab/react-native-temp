import {describe, test, expect} from '@jest/globals';
import {renderHook} from '@testing-library/react-native';
import {AppColors} from '@src/utils/Theme';
import useAppThemeColorsDark from '@src/utils/Theme/useAppThemeColorsDark';

describe('useAppThemeColorsDark', () => {
  test('check `useAppThemeColorsDark` containing value', () => {
    const {result} = renderHook(() => useAppThemeColorsDark());
    expect(result.current).toBeDefined();
  });

  test('check primary color to be primary color for dark theme', () => {
    const {result} = renderHook(() => useAppThemeColorsDark());
    expect(result.current.primary).toBe(AppColors.themeDark.primary);
  });
});
