import { isObject } from './object.validator';

describe('isObject validator', () => {
  describe('validates primitive values properly', () => {
    test('returns false for true', () => {
      expect(isObject(true)).toBe(false);
    });

    test('returns false for false', () => {
      expect(isObject(false)).toBe(false);
    });

    test('returns false for null', () => {
      expect(isObject(null)).toBe(false);
    });

    test('returns false for undefined', () => {
      expect(isObject(undefined)).toBe(false);
    });

    test('returns false for int number', () => {
      expect(isObject(0)).toBe(false);
    });

    test('returns false for float number', () => {
      expect(isObject(1.1)).toBe(false);
    });

    test('returns false for string', () => {
      expect(isObject('string')).toBe(false);
    });

    test('returns false for Symbol', () => {
      expect(isObject(Symbol('hey'))).toBe(false);
    });
  });

  describe('validates object values properly', () => {
    test('returns true for objects', () => {
      expect(isObject({ prop: 1, otherProp: 'hey' })).toBe(true);
    });

    test('returns false for functions', () => {
      expect(isObject(() => 'hey')).toBe(false);
    });

    test('returns true for arrays', () => {
      expect(isObject(['first', 'second'])).toBe(true);
    });
  });
});
