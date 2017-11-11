/**
 * Returns true if the passed arg is neither undefined nor null
 */
export function isValue(arg: any): arg is any {
  return (arg !== undefined && arg !== null)
}