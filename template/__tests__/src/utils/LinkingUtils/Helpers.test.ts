import {describe, test, expect, jest} from '@jest/globals';
import {Linking} from 'react-native';
import {open} from '@src/utils/LinkingUtils/Helpers';

describe('LinkingUtils/Helpers', () => {
  test('open', () => {
    const openURL = jest
      .spyOn(Linking, 'openURL')
      .mockImplementation(() => Promise.resolve());

    open('https://www.google.com');
    expect(openURL).toHaveBeenCalledWith('https://www.google.com');
  });
});
