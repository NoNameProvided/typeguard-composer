import { ObjectSchema } from './object-signature.interface';
import { CallableTypeGuard } from './callable-type-guard.interface';

/**
 * A schema which can be passed to the validate function.
 */
export type TypeSchema = ObjectSchema | ObjectSchema[] | CallableTypeGuard | CallableTypeGuard[];
