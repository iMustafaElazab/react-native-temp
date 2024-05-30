import {describe, test, jest, expect, afterEach} from '@jest/globals';
import {Linking} from 'react-native';

import {open} from '@src/utils/LinkingUtils/Helpers';

describe('open HAPPY PATH', () => {
  // successfully opens a valid URL
  test('should successfully open a valid URL', async () => {
    const openURL = jest.spyOn(Linking, 'openURL').mockResolvedValue(true);
    await open('https://www.example.com');
    expect(openURL).toHaveBeenCalledWith('https://www.example.com');
  });

  // logs informational message with URL when opening
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
  const consoleWarnSpy = jest
    .spyOn(console, 'warn')
    .mockImplementation(() => {});

  afterEach(() => {
    consoleWarnSpy?.mockReset();
  });

  // fails to open an invalid URL
  test('should fail to open an invalid URL', async () => {
    const openURL = jest
      .spyOn(Linking, 'openURL')
      .mockRejectedValue(new Error('Invalid URL'));

    await expect(async () => {
      await open('invalid-url', 'error_invalid_url');
    }).rejects.toThrowError('Failed to open: invalid-url');

    expect(openURL).toHaveBeenCalledWith('invalid-url');

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      expect.stringContaining('Failed to open: invalid-url'),
      expect.any(Error),
    );
  });

  // handles empty URL string
  test('should handle empty URL string', async () => {
    const url = '';

    await expect(async () => {
      await open(url);
    }).rejects.toThrowError('Failed to open: ');

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      expect.stringContaining('Failed to open: '),
      expect.any(Error),
    );
  });
});
