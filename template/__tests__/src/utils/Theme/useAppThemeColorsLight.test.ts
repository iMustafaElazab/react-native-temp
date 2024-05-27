import {test, expect} from '@jest/globals';
import {renderHook} from '@testing-library/react-native';
import useAppThemeColorsLight from '@src/utils/Theme/useAppThemeColorsLight';

test('check `useAppThemeColorsLight` containing value', () => {
  const {result} = renderHook(() => useAppThemeColorsLight());
  expect(result.current).toBeDefined();
});
