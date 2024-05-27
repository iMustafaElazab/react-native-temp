import {describe, test, expect} from '@jest/globals';
import {renderHook} from '@testing-library/react-native';
import {AppColors, useAppTheme} from '@src/utils/Theme';

describe('utils/Theme/index', () => {
  test('check `AppColors` containing value', () => {
    expect(AppColors).toBeDefined();
  });

  test('check `useAppTheme` containing value', () => {
    const {result} = renderHook(() => useAppTheme());
    expect(result.current).toBeDefined();
  });
});
