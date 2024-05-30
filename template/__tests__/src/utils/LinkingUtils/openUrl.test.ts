import {describe, jest, afterEach, test, expect} from '@jest/globals';
import {openUrl} from '@src/utils/LinkingUtils';
import * as Helpers from '@src/utils/LinkingUtils/Helpers';

describe('openUrl HAPPY PATH', () => {
  const mockedOpen = jest
    .spyOn(Helpers, 'open')
    .mockImplementation(() => Promise.resolve());

  afterEach(() => {
    mockedOpen?.mockReset();
  });

  // opens a valid URL with default error message key
  test('should open a valid URL with default error message key', () => {
    openUrl('https://www.google.com');

    expect(mockedOpen).toHaveBeenCalledWith(
      'https://www.google.com',
      'error_open_url',
    );
  });

  // opens a valid URL with a custom error message key
  test('should open a valid URL with a custom error message key', () => {
    openUrl('https://www.google.com', 'custom_error');

    expect(mockedOpen).toHaveBeenCalledWith(
      'https://www.google.com',
      'custom_error',
    );
  });

  // logs the URL being opened
  test('should log the URL being opened', () => {
    const consoleSpy = jest.spyOn(console, 'info');
    openUrl('https://www.google.com');

    expect(consoleSpy).toHaveBeenCalledWith(
      '## LinkingUtils:: openUrl',
      'https://www.google.com',
    );

    consoleSpy?.mockRestore();
  });
});

describe('openUrl EDGE CASES', () => {
  const mockedOpen = jest
    .spyOn(Helpers, 'open')
    .mockImplementation(() => Promise.resolve());

  afterEach(() => {
    mockedOpen?.mockReset();
  });

  // does not open when URL is undefined
  test('should not open when URL is undefined', () => {
    openUrl(undefined);
    expect(mockedOpen).not.toBeCalled();
  });

  // does not open when URL is an empty string
  test('should not open when URL is an empty string', () => {
    openUrl('');
    expect(mockedOpen).not.toBeCalled();
  });
});
