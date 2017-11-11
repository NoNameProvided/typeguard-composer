import { isNull } from './null.validator';

describe('isNull validator', () => {
  describe('validates primitive values properly', () => {
    test('returns false for true', () => {
      expect(isNull(true)).toBe(false);
    });

    test('returns false for false', () => {
      expect(isNull(false)).toBe(false);
    });

    test('returns true for null', () => {
      expect(isNull(null)).toBe(true);
    });

    test('returns false for undefined', () => {
      expect(isNull(undefined)).toBe(false);
    });

    test('returns false for int number', () => {
      expect(isNull(0)).toBe(false);
    });

    test('returns false for float number', () => {
      expect(isNull(1.1)).toBe(false);
    });

    test('returns false for string', () => {
      expect(isNull('string')).toBe(false);
    });

    test('returns false for Symbol', () => {
      expect(isNull(Symbol('hey'))).toBe(false);
    });
  });

  describe('validates object values properly', () => {
    test('returns false for objects', () => {
      expect(isNull({ prop: 1, otherProp: 'hey' })).toBe(false);
    });

    test('returns false for functions', () => {
      expect(isNull(() => 'hey')).toBe(false);
    });

    test('returns false for arrays', () => {
      expect(isNull([ 'first', 'second' ])).toBe(false);
    });
  });
});
