export const isRelativeImport = (path: string) =>
  ['.', '..'].includes(path) || path.startsWith('./') || path.startsWith('../');
