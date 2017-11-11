import { TypeChecker } from './type-checker';
import { isString } from './validators';
import { ContactListSchema, ContactSchema } from '../test-utils/'

describe('TypeChecker', () => {
  describe('validates ObjectSchemas properly', () => {

    const address = {
      city: 'Lost Heaven',
      zip: 5000,
      address: 'Nowhere street 22.',
    };

    const contact = {
      address: address,
      addresses: [address, address],
      nickNames: [ 'Tesztike', 'Blah' ],
      firstName: 'Test',
      lastName: 'Elek',
    };

    const contactList = [
      contact,
      contact,
    ];

    test('validates object with valid schema properly', () => {
      expect(TypeChecker.validate(ContactSchema, contact)).toBe(true);
    });

    test('validates in-correct object with valid schema properly', () => {
      expect(TypeChecker.validate(ContactSchema, null)).toBe(false);
    });

    test('validates object with in-correct schema properly', () => {
      expect(TypeChecker.validate(null, contact)).toBe(false);
    });

    test('validates array of objects with array schema properly', () => {
      expect(TypeChecker.validate(ContactListSchema, contactList)).toBe(true);
    });

    test('validates array of objects with incorrect array schema properly', () => {
      expect(TypeChecker.validate(<any>[ContactListSchema], contactList)).toBe(false);
    });

    test('validates in-correct array of objects with array schema properly', () => {
      expect(TypeChecker.validate(ContactListSchema, null)).toBe(false);
    });

    test('validates array of objects with in-correct array schema properly', () => {
      expect(TypeChecker.validate(null, contactList)).toBe(false);
    });


  });

  describe('validates properly with passed bare CallableTypeGuards', () => {
    test('validates with simple CallableTypeGuard properly', () => {
      expect(TypeChecker.validate(isString, 'hey')).toBe(true);
    });

    test('validates with simple CallableTypeGuard properly', () => {
      expect(TypeChecker.validate(isString, ['one', 'two'])).toBe(false);
    });

    test('validates array with [CallableTypeGuard] properly', () => {
      expect(TypeChecker.validate([isString], ['one', 'two'])).toBe(true);
    });

    test('validates not array with [CallableTypeGuard] properly', () => {
      expect(TypeChecker.validate([isString], 'hey')).toBe(false);
    });
  });
});
