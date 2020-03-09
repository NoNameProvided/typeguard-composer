export function isString(arg: any, matchWrapper: boolean = false): arg is string {
  return typeof arg == 'string' || (matchWrapper ? arg instanceof String : false);
}
