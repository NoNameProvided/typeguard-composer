import { isBoolean } from './boolean.validator';

describe('isBoolean validator', () => {
  describe('validates primitive values properly', () => {
    test('returns true for true', () => {
      expect(isBoolean(true)).toBe(true);
    });

    test('returns true for false', () => {
      expect(isBoolean(false)).toBe(true);
    });

    test('returns false for null', () => {
      expect(isBoolean(null)).toBe(false);
    });

    test('returns false for undefined', () => {
      expect(isBoolean(undefined)).toBe(false);
    });

    test('returns false for int number', () => {
      expect(isBoolean(0)).toBe(false);
    });

    test('returns false for float number', () => {
      expect(isBoolean(1.1)).toBe(false);
    });

    test('returns false for string', () => {
      expect(isBoolean('string')).toBe(false);
    });

    test('returns false for Symbol', () => {
      expect(isBoolean(Symbol('hey'))).toBe(false);
    });
  });

  describe('validates object values properly', () => {
    test('returns false for objects', () => {
      expect(isBoolean({ prop: 1, otherProp: 'hey' })).toBe(false);
    });

    test('returns false for functions', () => {
      expect(isBoolean(() => 'hey')).toBe(false);
    });

    test('returns false for arrays', () => {
      expect(isBoolean([ 'first', 'second' ])).toBe(false);
    });
  });

  describe('validates wrapper objects properly', () => {
    test('returns false for Boolean when matchWrapper is not set', () => {
      expect(isBoolean(new Boolean(true))).toBe(false);
    });

    test('returns true for Boolean when matchWrapper is set', () => {
      expect(isBoolean(new Boolean(true), true)).toBe(true);
    });
  });

});
