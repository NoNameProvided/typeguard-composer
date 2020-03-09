export function isUndefined(arg: any): arg is undefined {
  return typeof arg == 'undefined';
}
