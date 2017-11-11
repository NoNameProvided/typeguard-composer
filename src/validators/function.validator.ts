/**
 * Returns true if the passed arg is callable (aka it's a function), false otherwise.
 */
export function isFunction(arg: any): arg is Function {
  return typeof arg === 'function';
}