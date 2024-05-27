import {test, expect} from '@jest/globals';
import AppColors from '@src/utils/Theme/AppColors';

test('check `AppColors` containing value', () => {
  expect(AppColors).toBeDefined();
});
