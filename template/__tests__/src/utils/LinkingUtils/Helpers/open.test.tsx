import {describe, test, jest, expect} from '@jest/globals';
import {Linking} from 'react-native';
import {open} from '@src/utils/LinkingUtils/Helpers';

describe('open HAPPY PATH', () => {
  // Function successfully opens a URL when provided with a valid URL
  test('should successfully open a valid URL', async () => {
    const openURL = jest.spyOn(Linking, 'openURL').mockResolvedValue(true);
    await open('https://www.example.com');
    expect(openURL).toHaveBeenCalledWith('https://www.example.com');
  });

  test('should log informational message with URL when opening', () => {
    const consoleInfoSpy = jest
      .spyOn(console, 'info')
      .mockImplementation(() => {});

    const url = 'https://www.example.com';
    open(url);

    expect(consoleInfoSpy).toHaveBeenCalledWith(
      '## LinkingUtils::Helpers:: open',
      url,
    );
  });
});

describe('open EDGE CASES', () => {
  // TODO: write test cases.
});
