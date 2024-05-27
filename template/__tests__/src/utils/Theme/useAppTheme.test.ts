import {test, expect} from '@jest/globals';
import {renderHook} from '@testing-library/react-native';
import useAppTheme from '@src/utils/Theme/useAppTheme';

test('check `useAppTheme` containing value', () => {
  const {result} = renderHook(() => useAppTheme());
  expect(result.current).toBeDefined();
});

test('check theme containing colors', () => {
  const {result} = renderHook(() => useAppTheme());
  expect(result.current.colors).toBeDefined();
});

test('check theme containing fonts', () => {
  const {result} = renderHook(() => useAppTheme());
  expect(result.current.fonts).toBeDefined();
});
