import {test, expect} from '@jest/globals';
import AppColors from '@src/utils/Theme/AppColors';

test('check `AppColors` containing value', () => {
  expect(AppColors).toBeDefined();
});

test('check `AppColors` `themeLight` containing value', () => {
  expect(AppColors.themeLight).toBeDefined();
});

test('check `AppColors` `themeDark` containing value', () => {
  expect(AppColors.themeDark).toBeDefined();
});
