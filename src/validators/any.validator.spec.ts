import { isAny } from './any.validator';

describe('isAny validator', () => {
  describe('validates primitive values properly', () => {
    test('returns true for true', () => {
      expect(isAny(true)).toBe(true);
    });

    test('returns true for false', () => {
      expect(isAny(true)).toBe(true);
    });

    test('returns true for null', () => {
      expect(isAny(null)).toBe(true);
    });

    test('returns true for undefined', () => {
      expect(isAny(undefined)).toBe(true);
    });

    test('returns true for int number', () => {
      expect(isAny(0)).toBe(true);
    });

    test('returns true for float number', () => {
      expect(isAny(1.1)).toBe(true);
    });

    test('returns true for string', () => {
      expect(isAny('string')).toBe(true);
    });

    test('returns true for Symbol', () => {
      expect(isAny(Symbol('hey'))).toBe(true);
    });
  });

  describe('validates object values properly', () => {
    test('returns true for objects', () => {
      expect(isAny({ prop: 1, otherProp: 'hey' })).toBe(true);
    });

    test('returns true for functions', () => {
      expect(isAny(() => 'hey')).toBe(true);
    });

    test('returns true for arrays', () => {
      expect(isAny(['first', 'second'])).toBe(true);
    });
  });
});
