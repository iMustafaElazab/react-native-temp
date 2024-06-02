import {describe, test, expect} from '@jest/globals';
import {renderHook} from '@testing-library/react-native';
import {AppColors} from '@src/utils/Theme';
import useAppThemeColorsDark from '@src/utils/Theme/useAppThemeColorsDark';

describe('useAppThemeColorsDark', () => {
  test('should return defined value when invoked', () => {
    const {result} = renderHook(() => useAppThemeColorsDark());
    expect(result.current).toBeDefined();
  });

  test('should match dark theme primary color', () => {
    const {result} = renderHook(() => useAppThemeColorsDark());
    expect(result.current.primary).toBe(AppColors.themeDark.primary);
  });
});
