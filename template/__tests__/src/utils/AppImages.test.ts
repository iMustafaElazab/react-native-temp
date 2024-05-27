import {test, expect} from '@jest/globals';
import AppImages from '@src/utils/AppImages';

test('check `AppImages` containing value', () => {
  expect(AppImages).toBeDefined();
});
