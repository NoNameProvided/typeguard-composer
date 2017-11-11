import { isValue } from './value.validator';

describe('isValue validator', () => {
  describe('validates primitive values properly', () => {
    test('returns true for true', () => {
      expect(isValue(true)).toBe(true);
    });

    test('returns true for false', () => {
      expect(isValue(false)).toBe(true);
    });

    test('returns false for null', () => {
      expect(isValue(null)).toBe(false);
    });

    test('returns false for undefined', () => {
      expect(isValue(undefined)).toBe(false);
    });

    test('returns true for int number', () => {
      expect(isValue(0)).toBe(true);
    });

    test('returns true for float number', () => {
      expect(isValue(1.1)).toBe(true);
    });

    test('returns true for string', () => {
      expect(isValue('string')).toBe(true);
    });

    test('returns true for Symbol', () => {
      expect(isValue(Symbol('hey'))).toBe(true);
    });
  });

  describe('validates object values properly', () => {
    test('returns true for objects', () => {
      expect(isValue({ prop: 1, otherProp: 'hey' })).toBe(true);
    });

    test('returns true for functions', () => {
      expect(isValue(() => 'hey')).toBe(true);
    });

    test('returns true for arrays', () => {
      expect(isValue([ 'first', 'second' ])).toBe(true);
    });
  });
});
