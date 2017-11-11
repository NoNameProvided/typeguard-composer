
/**
 * Returns true if the passed arg is a valid object with zero or more key.
 * NOTE: An array is an object too.
 */
export function isObject(arg: any): arg is Object {
  return typeof arg === 'object' && arg !== null;
}