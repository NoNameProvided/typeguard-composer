export function isNumber(arg: any, matchWrapper: boolean = false): arg is number {
  return typeof arg == 'number' || (matchWrapper ? arg instanceof Number : false);
}