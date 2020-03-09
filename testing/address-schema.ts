import { isString, isNumber } from '../src/validators';

export const AddressSchema = {
  city: isString,
  zip: isNumber,
  address: isString,
}