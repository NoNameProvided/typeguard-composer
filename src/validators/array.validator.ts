/**
 * Returns true if the passed arg is a valid array (with zero or more element)
 */
export function isArray(arg: any): arg is Array<any> {
  return Array.isArray(arg);
}