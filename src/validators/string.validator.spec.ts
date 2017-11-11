import { isString } from './string.validator';

describe('isString validator', () => {
  describe('validates primitive values properly', () => {
    test('returns false for true', () => {
      expect(isString(true)).toBe(false);
    });

    test('returns false for false', () => {
      expect(isString(false)).toBe(false);
    });

    test('returns false for null', () => {
      expect(isString(null)).toBe(false);
    });

    test('returns false for undefined', () => {
      expect(isString(undefined)).toBe(false);
    });

    test('returns false for int number', () => {
      expect(isString(0)).toBe(false);
    });

    test('returns false for float number', () => {
      expect(isString(1.1)).toBe(false);
    });

    test('returns true for string', () => {
      expect(isString('string')).toBe(true);
    });

    test('returns false for Symbol', () => {
      expect(isString(Symbol('hey'))).toBe(false);
    });
  });

  describe('validates object values properly', () => {
    test('returns false for objects', () => {
      expect(isString({ prop: 1, otherProp: 'hey' })).toBe(false);
    });

    test('returns false for functions', () => {
      expect(isString(() => 'hey')).toBe(false);
    });

    test('returns false for arrays', () => {
      expect(isString([ 'first', 'second' ])).toBe(false);
    });
  });

  describe('validates wrapper objects properly', () => {
    test('returns false for wrapper object when matchWrapper is not set', () => {
      expect(isString(new String('hey'))).toBe(false);
    });

    test('returns true for wrapper object when matchWrapper is set', () => {
      expect(isString(new String('hey'), true)).toBe(true);
    });
  });

});
