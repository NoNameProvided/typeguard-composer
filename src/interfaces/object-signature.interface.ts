import { CallableTypeGuard } from './callable-type-guard.interface';

/**
 * Describes an object schema used to validate against.
 */
export interface ObjectSchema {
  [key: string]: ObjectSchema[] | ObjectSchema | CallableTypeGuard | CallableTypeGuard[];
}
