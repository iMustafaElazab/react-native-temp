import {describe, test, expect} from '@jest/globals';
import {appendEmail} from '@src/utils/LinkingUtils/Helpers';

describe('appendEmail HAPPY PATH', () => {
  // Function appends a provided email to 'mailto:' string correctly
  test('should append email to mailto link when email is provided', () => {
    const result = appendEmail('mailto:', 'test@example.com');
    expect(result).toBe('mailto:test@example.com');
  });

  // Function returns the original email link when no email is provided
  test('should return the original email link when no email is provided', () => {
    const result = appendEmail('mailto:');
    expect(result).toBe('mailto:');
  });

  // Function handles email addresses containing special characters correctly
  test('should handle special characters in email address correctly', () => {
    const result = appendEmail('mailto:', 'test@example.com!@#$%^&*()');
    expect(result).toBe('mailto:test@example.com!@#$%^&*()');
  });
});

describe('appendEmail EDGE CASES', () => {
  // Function called with an empty string for emailLink and no email provided
  test('should return just the base link when no email is provided', () => {
    const result = appendEmail('');
    expect(result).toBe('');
  });

  // Function called with an empty string for emailLink and a valid email provided
  test('should append email to empty string link when email is provided', () => {
    const result = appendEmail('', 'test@example.com');
    expect(result).toBe('test@example.com');
  });

  // Function called with a valid emailLink and an empty string for email
  test('should return the base email link when empty email is provided', () => {
    const result = appendEmail('mailto:test@example.com', '');
    expect(result).toBe('mailto:test@example.com');
  });

  // Function called with null value for email
  test('should return the base email link when null email is provided', () => {
    const result = appendEmail('mailto:', null);
    expect(result).toBe('mailto:');
  });

  // Function called with undefined value for email
  test('should return the base email link when undefined email is provided', () => {
    const result = appendEmail('mailto:', undefined);
    expect(result).toBe('mailto:');
  });
});
