import {describe, test, expect} from '@jest/globals';
import {renderHook} from '@testing-library/react-native';
import useAppThemeColors from '@src/utils/Theme/useAppThemeColors';

describe('useAppThemeColors', () => {
  test('check `useAppThemeColors` containing value', () => {
    const {result} = renderHook(() => useAppThemeColors());
    expect(result.current).toBeDefined();
  });

  test('check theme colors containing primary value', () => {
    const {result} = renderHook(() => useAppThemeColors());
    expect(result.current.primary).toBeDefined();
  });
});
