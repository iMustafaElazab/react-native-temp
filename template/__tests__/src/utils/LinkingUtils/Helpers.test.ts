import {describe, test, expect, jest} from '@jest/globals';
import {Linking} from 'react-native';
import {
  appendEmail,
  appendEmailSubjectBody,
  open,
} from '@src/utils/LinkingUtils/Helpers';

describe('LinkingUtils/Helpers', () => {
  test('appendEmail', () => {
    expect(appendEmail('mailto:')).toBe('mailto:');

    expect(appendEmail('mailto:', 'test@email.com')).toBe(
      'mailto:test@email.com',
    );
  });

  test('appendEmailSubjectBody', () => {
    expect(appendEmailSubjectBody('mailto:test@email.com')).toBe(
      'mailto:test@email.com',
    );

    expect(
      appendEmailSubjectBody('mailto:test@email.com', 'Test Subject'),
    ).toBe('mailto:test@email.com?subject=Test Subject');

    expect(
      appendEmailSubjectBody('mailto:test@email.com', undefined, 'Test body'),
    ).toBe('mailto:test@email.com?body=Test body');

    expect(
      appendEmailSubjectBody(
        'mailto:test@email.com',
        'Test Subject',
        'Test body',
      ),
    ).toBe('mailto:test@email.com?subject=Test Subject&body=Test body');
  });

  test('open', () => {
    const openURL = jest
      .spyOn(Linking, 'openURL')
      .mockImplementation(() => Promise.resolve());

    open('https://www.google.com');
    expect(openURL).toHaveBeenCalledWith('https://www.google.com');
  });
});
