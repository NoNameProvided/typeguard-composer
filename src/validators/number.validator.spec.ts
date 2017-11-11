import { isNumber } from './number.validator';

describe('isNumber validator', () => {
  describe('validates primitive values properly', () => {
    test('returns false for true', () => {
      expect(isNumber(true)).toBe(false);
    });

    test('returns false for false', () => {
      expect(isNumber(false)).toBe(false);
    });

    test('returns false for null', () => {
      expect(isNumber(null)).toBe(false);
    });

    test('returns false for undefined', () => {
      expect(isNumber(undefined)).toBe(false);
    });

    test('returns true for int number', () => {
      expect(isNumber(0)).toBe(true);
    });

    test('returns true for float number', () => {
      expect(isNumber(1.1)).toBe(true);
    });

    test('returns false for string', () => {
      expect(isNumber('string')).toBe(false);
    });

    test('returns false for Symbol', () => {
      expect(isNumber(Symbol('hey'))).toBe(false);
    });
  });

  describe('validates object values properly', () => {
    test('returns false for objects', () => {
      expect(isNumber({ prop: 1, otherProp: 'hey' })).toBe(false);
    });

    test('returns false for functions', () => {
      expect(isNumber(() => 'hey')).toBe(false);
    });

    test('returns false for arrays', () => {
      expect(isNumber([ 'first', 'second' ])).toBe(false);
    });
  });

  describe('validates wrapper objects properly', () => {
    test('returns false for wrapper object when matchWrapper is not set', () => {
      expect(isNumber(new Number(5))).toBe(false);
    });

    test('returns true for wrapper object when matchWrapper is set', () => {
      expect(isNumber(new Number(5), true)).toBe(true);
    });
  });

});
