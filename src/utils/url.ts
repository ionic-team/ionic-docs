export function isExternal(url: string): boolean {
  return url.indexOf('http://') === 0 || url.indexOf('https://') === 0;
}
