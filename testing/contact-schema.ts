import { AddressSchema } from "./address-schema";
import { isString } from "../src/validators/index";

export const ContactSchema = {
  address: AddressSchema,
  addresses: [AddressSchema],
  nickNames: [isString],
  firstName: isString,
  lastName: isString,
}