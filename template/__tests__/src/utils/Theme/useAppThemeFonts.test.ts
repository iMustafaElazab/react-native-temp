import {describe, test, expect} from '@jest/globals';
import {renderHook} from '@testing-library/react-native';
import useAppThemeFonts from '@src/utils/Theme/useAppThemeFonts';

describe('useAppThemeFonts', () => {
  test('check `useAppThemeFonts` containing value', () => {
    const {result} = renderHook(() => useAppThemeFonts());
    expect(result.current).toBeDefined();
  });
});
