import { isUndefined } from './undefined.validator';

describe('isUndefined validator', () => {
  describe('validates primitive values properly', () => {
    test('returns false for true', () => {
      expect(isUndefined(true)).toBe(false);
    });

    test('returns false for false', () => {
      expect(isUndefined(false)).toBe(false);
    });

    test('returns false for null', () => {
      expect(isUndefined(null)).toBe(false);
    });

    test('returns true for undefined', () => {
      expect(isUndefined(undefined)).toBe(true);
    });

    test('returns false for int number', () => {
      expect(isUndefined(0)).toBe(false);
    });

    test('returns false for float number', () => {
      expect(isUndefined(1.1)).toBe(false);
    });

    test('returns false for string', () => {
      expect(isUndefined('string')).toBe(false);
    });

    test('returns false for Symbol', () => {
      expect(isUndefined(Symbol('hey'))).toBe(false);
    });
  });

  describe('validates object values properly', () => {
    test('returns false for objects', () => {
      expect(isUndefined({ prop: 1, otherProp: 'hey' })).toBe(false);
    });

    test('returns false for functions', () => {
      expect(isUndefined(() => 'hey')).toBe(false);
    });

    test('returns false for arrays', () => {
      expect(isUndefined([ 'first', 'second' ])).toBe(false);
    });
  });
});
