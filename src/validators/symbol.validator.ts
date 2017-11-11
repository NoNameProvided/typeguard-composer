export function isSymbol(arg: any): arg is Symbol {
  return typeof arg === 'symbol';
}