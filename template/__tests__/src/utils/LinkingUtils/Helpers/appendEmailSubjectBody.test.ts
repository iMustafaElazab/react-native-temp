import {describe, test, expect} from '@jest/globals';
import {appendEmailSubjectBody} from '@src/utils/LinkingUtils/Helpers';

describe('appendEmailSubjectBody HAPPY PATH', () => {
  const emailLink = 'mailto:test@email.com';
  const subject = 'Test Subject';
  const body = 'Test body';
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);

  // Function appends subject correctly when only subject is provided
  test('should append subject correctly when only subject is provided', () => {
    const result = appendEmailSubjectBody('mailto:test@email.com', subject);
    expect(result).toBe(`mailto:test@email.com?subject=${encodedSubject}`);
  });

  // Function appends body correctly when only body is provided
  test('should append body correctly when only body is provided', () => {
    const result = appendEmailSubjectBody(emailLink, undefined, body);
    expect(result).toBe(`mailto:test@email.com?body=${encodedBody}`);
  });

  // Function appends both subject and body correctly when both are provided
  test('should append both subject and body correctly when both are provided', () => {
    const result = appendEmailSubjectBody(emailLink, subject, body);

    expect(result).toBe(
      `mailto:test@email.com?subject=${encodedSubject}&body=${encodedBody}`,
    );
  });

  // Function returns the original email link when neither subject nor body is provided
  test('should return the original email link when neither subject nor body is provided', () => {
    const result = appendEmailSubjectBody(emailLink);
    expect(result).toBe(emailLink);
  });
});

describe('appendEmail EDGE CASES', () => {
  // Function handles empty strings for subject and body correctly
  test('should handle empty strings for subject and body correctly', () => {
    const emailLink = 'mailto:test@email.com';
    const subject = '';
    const body = '';
    const result = appendEmailSubjectBody(emailLink, subject, body);
    expect(result).toBe('mailto:test@email.com');
  });

  // Function correctly appends parameters when subject or body contain special characters that need URL encoding
  test('should append parameters correctly when subject or body contain special characters', () => {
    const emailLink = 'mailto:test@email.com';
    const subject = 'Special Subject !@#$%^&*()_+';
    const body = 'Special Body !@#$%^&*()_+';
    const result = appendEmailSubjectBody(emailLink, subject, body);

    expect(result).toBe(
      `mailto:test@email.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
    );
  });

  // Function handles null values for subject and body without throwing errors
  test('should handle null values for subject and body without throwing errors', () => {
    const emailLink = 'mailto:test@email.com';
    const result = appendEmailSubjectBody(emailLink, null, null);
    expect(result).toBe(emailLink);
  });
});
