import {test, expect} from '@jest/globals';
import {renderHook} from '@testing-library/react-native';
import useAppThemeColorsDark from '@src/utils/Theme/useAppThemeColorsDark';

test('check `useAppThemeColorsDark` containing value', () => {
  const {result} = renderHook(() => useAppThemeColorsDark());
  expect(result.current).toBeDefined();
});
