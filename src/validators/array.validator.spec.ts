import { isArray } from './array.validator';

describe('isArray validator', () => {
  describe('validates primitive values properly', () => {
    test('returns false for true', () => {
      expect(isArray(true)).toBe(false);
    });

    test('returns false for false', () => {
      expect(isArray(true)).toBe(false);
    });

    test('returns false for null', () => {
      expect(isArray(null)).toBe(false);
    });

    test('returns false for undefined', () => {
      expect(isArray(undefined)).toBe(false);
    });

    test('returns false for int number', () => {
      expect(isArray(0)).toBe(false);
    });

    test('returns false for float number', () => {
      expect(isArray(1.1)).toBe(false);
    });

    test('returns false for string', () => {
      expect(isArray('string')).toBe(false);
    });

    test('returns false for Symbol', () => {
      expect(isArray(Symbol('hey'))).toBe(false);
    });
  });

  describe('validates object values properly', () => {
    test('returns false for objects', () => {
      expect(isArray({ prop: 1, otherProp: 'hey' })).toBe(false);
    });

    test('returns false for functions', () => {
      expect(isArray(() => 'hey')).toBe(false);
    });

    test('returns true for arrays', () => {
      expect(isArray([ 'first', 'second' ])).toBe(true);
    });
  });
});
