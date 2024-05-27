import {test, expect} from '@jest/globals';
import AppImages from '@src/utils/AppImages';

test('check `AppImages` exists', () => {
  expect(AppImages).toBeDefined();
});
