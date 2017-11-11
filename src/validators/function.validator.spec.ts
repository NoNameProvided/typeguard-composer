import { isFunction } from './function.validator';

describe('isFunction validator', () => {
  describe('validates primitive values properly', () => {
    test('returns false for true', () => {
      expect(isFunction(true)).toBe(false);
    });

    test('returns false for false', () => {
      expect(isFunction(false)).toBe(false);
    });

    test('returns false for null', () => {
      expect(isFunction(null)).toBe(false);
    });

    test('returns false for undefined', () => {
      expect(isFunction(undefined)).toBe(false);
    });

    test('returns false for int number', () => {
      expect(isFunction(0)).toBe(false);
    });

    test('returns false for float number', () => {
      expect(isFunction(1.1)).toBe(false);
    });

    test('returns false for string', () => {
      expect(isFunction('string')).toBe(false);
    });

    test('returns false for Symbol', () => {
      expect(isFunction(Symbol('hey'))).toBe(false);
    });
  });

  describe('validates object values properly', () => {
    test('returns false for objects', () => {
      expect(isFunction({ prop: 1, otherProp: 'hey' })).toBe(false);
    });

    test('returns true for functions', () => {
      expect(isFunction(() => 'hey')).toBe(true);
    });

    test('returns false for arrays', () => {
      expect(isFunction([ 'first', 'second' ])).toBe(false);
    });
  });
});
