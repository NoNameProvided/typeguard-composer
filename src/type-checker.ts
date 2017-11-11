import { ObjectSchema } from './object-signature.interface';
import { CallableTypeGuard } from './callable-type-guard.interface';
import { isFunction, isObject, isArray, isAny, isValue } from './validators';

export class TypeChecker {
  public static validate(schema: ObjectSchema | ObjectSchema[] | CallableTypeGuard | CallableTypeGuard[], value: any): boolean {

    if (this.isCallableTypeGuard(schema)) {
      return schema(value);
    }

    if (this.isCallableTypeGuardArray(schema)) {
      return isArray(value) && value.every(v => schema[0](v));
    }

    if (this.isSchema(schema)) {
      return this.checkSchema(schema, value);
    }

    if (this.isSchemaArray(schema)) {
      return this.checkSchemaArray(schema, value);
    }

    console.warn('[TypeChecker][validate] Invalid schema, a valid schema must be passed to run validation.');
    return false;
  }

  private static checkSchema(schema: ObjectSchema, value: any): boolean {

    if (!isValue(value) || !isObject(value)) {
      return false;
    }

    if (!this.isSchema(schema)) {
      console.warn('[TypeChecker][checkSchema] Invalid schema, a valid schema must be passed to run validation.');
      return false;
    }

    return Object.keys(schema).every(key => {
      let schemaOrTypeGuard = schema[key];

      if (this.isCallableTypeGuard(schemaOrTypeGuard)) {
        return schemaOrTypeGuard(value[key]);
      }

      if (this.isCallableTypeGuardArray(schemaOrTypeGuard)) {
        return isArray(value[key]) && value[key].every(v => schemaOrTypeGuard[0](v));
      }

      if (this.isSchema(schemaOrTypeGuard)) {
        return this.checkSchema(schemaOrTypeGuard, value[key]);
      }

      if (this.isSchemaArray(schemaOrTypeGuard)) {
        return this.checkSchemaArray(schemaOrTypeGuard, value[key]);
      }
    });

  }

  private static checkSchemaArray(schemaArray: ObjectSchema[], value: any[]): boolean {
    return isArray(value) ? value
      .map(item => this.checkSchema(schemaArray[0], item))
      .every(result => result) : false;

  }

  /**
   * Returns true if the passed arg is a valid schema (aka a non-empty object), false otherwise.
   */
  private static isSchema(arg: any): arg is ObjectSchema {
    return arg && !isArray(arg) && isObject(arg) && Object.keys(arg).length != 0;
  }

  /**
   * Returns true if the passed arg is a valid type-guard (aka a callable function), false otherwise
   */
  private static isCallableTypeGuard(arg: any): arg is CallableTypeGuard {
    return arg && isFunction(arg);
  }

  /**
   * Returns true if the passed arg is a valid type schema array (aka array and length equals to one), false otherwise.
   */
  private static isSchemaArray(arg: any): arg is ObjectSchema[] {
    return arg && isArray(arg) && arg.length == 1;
  }

  /**
   * Returns true if the passed arg is a valid type-guard array (aka array and length equals to one), false otherwise
   */
  private static isCallableTypeGuardArray(arg: any): arg is CallableTypeGuard[] {
    return arg && isArray(arg) && arg.length == 1 && isFunction(arg[0]);
  }

}