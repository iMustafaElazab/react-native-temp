import {describe, test, expect} from '@jest/globals';
import AppImages from '@src/utils/AppImages';

describe('AppImages', () => {
  test('check `AppImages` containing value', () => {
    expect(AppImages).toBeDefined();
  });

  test('check `AppImages` `bootSplashImage` containing value', () => {
    expect(AppImages).toBeDefined();
  });
});
