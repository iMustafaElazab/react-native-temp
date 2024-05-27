import {test, expect} from '@jest/globals';
import {renderHook} from '@testing-library/react-native';
import useAppTheme from '@src/utils/Theme/useAppTheme';

test('check `useAppTheme` containing value', () => {
  const {result} = renderHook(() => useAppTheme());
  expect(result.current).toBeDefined();
});
