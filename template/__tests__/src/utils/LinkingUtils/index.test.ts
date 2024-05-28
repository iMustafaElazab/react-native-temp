import {describe, jest, afterEach, test, expect} from '@jest/globals';
import {
  openUrl,
  // openEmail,
  // openPhone,
  // openWhatsApp,
} from '@src/utils/LinkingUtils';
import * as Helpers from '@src/utils/LinkingUtils/Helpers';

describe('LinkingUtils', () => {
  const mockedOpen = jest
    .spyOn(Helpers, 'open')
    .mockImplementation(() => Promise.resolve());

  afterEach(() => {
    mockedOpen?.mockReset();
  });

  test('openUrl', () => {
    openUrl('https://www.google.com');

    expect(mockedOpen).toHaveBeenCalledWith(
      'https://www.google.com',
      'error_open_url',
    );
  });

  test('openUrl with error message', () => {
    openUrl('https://www.google.com', 'custom_error');

    expect(mockedOpen).toHaveBeenCalledWith(
      'https://www.google.com',
      'custom_error',
    );
  });

  test('openUrl with no URL', () => {
    openUrl();
    expect(mockedOpen).not.toBeCalled();
  });

  test('openUrl with empty URL', () => {
    openUrl('');
    expect(mockedOpen).not.toBeCalled();
  });
});
