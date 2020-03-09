export function isBoolean(arg: any, matchWrapper: boolean = false): arg is boolean {
  return typeof arg == 'boolean' || (matchWrapper ? arg instanceof Boolean : false);
}
