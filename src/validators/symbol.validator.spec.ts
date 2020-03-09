import { isSymbol } from './symbol.validator';

describe('isSymbol validator', () => {
  describe('validates primitive values properly', () => {
    test('returns false for true', () => {
      expect(isSymbol(true)).toBe(false);
    });

    test('returns false for false', () => {
      expect(isSymbol(false)).toBe(false);
    });

    test('returns false for null', () => {
      expect(isSymbol(null)).toBe(false);
    });

    test('returns false for undefined', () => {
      expect(isSymbol(undefined)).toBe(false);
    });

    test('returns false for int number', () => {
      expect(isSymbol(0)).toBe(false);
    });

    test('returns false for float number', () => {
      expect(isSymbol(1.1)).toBe(false);
    });

    test('returns false for string', () => {
      expect(isSymbol('string')).toBe(false);
    });

    test('returns true for Symbol', () => {
      expect(isSymbol(Symbol('hey'))).toBe(true);
    });
  });

  describe('validates object values properly', () => {
    test('returns false for objects', () => {
      expect(isSymbol({ prop: 1, otherProp: 'hey' })).toBe(false);
    });

    test('returns false for functions', () => {
      expect(isSymbol(() => 'hey')).toBe(false);
    });

    test('returns false for arrays', () => {
      expect(isSymbol(['first', 'second'])).toBe(false);
    });
  });
});
