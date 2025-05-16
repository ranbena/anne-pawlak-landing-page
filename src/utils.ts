export function getPublicPath(path: string) {
  return process.env.PAGES_BASE_PATH ? `${process.env.PAGES_BASE_PATH}${path}` : path;
}
