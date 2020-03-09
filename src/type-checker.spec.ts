import { validate } from './type-checker';
import { isString } from './validators';
import { ContactListSchema, ContactSchema } from '../testing'

describe('validate function', () => {
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
      expect(validate(ContactSchema, contact)).toBe(true);
    });

    test('validates in-correct object with valid schema properly', () => {
      expect(validate(ContactSchema, null)).toBe(false);
    });

    test('validates object with in-correct schema properly', () => {
      expect(validate(null, contact)).toBe(false);
    });

    test('validates array of objects with array schema properly', () => {
      expect(validate(ContactListSchema, contactList)).toBe(true);
    });

    test('validates array of objects with incorrect array schema properly', () => {
      expect(validate(<any>[ContactListSchema], contactList)).toBe(false);
    });

    test('validates in-correct array of objects with array schema properly', () => {
      expect(validate(ContactListSchema, null)).toBe(false);
    });

    test('validates array of objects with in-correct array schema properly', () => {
      expect(validate(null, contactList)).toBe(false);
    });


  });

  describe('validates properly with passed bare CallableTypeGuards', () => {
    test('validates with simple CallableTypeGuard properly', () => {
      expect(validate(isString, 'hey')).toBe(true);
    });

    test('validates with simple CallableTypeGuard properly', () => {
      expect(validate(isString, ['one', 'two'])).toBe(false);
    });

    test('validates array with [CallableTypeGuard] properly', () => {
      expect(validate([isString], ['one', 'two'])).toBe(true);
    });

    test('validates not array with [CallableTypeGuard] properly', () => {
      expect(validate([isString], 'hey')).toBe(false);
    });
  });
});
