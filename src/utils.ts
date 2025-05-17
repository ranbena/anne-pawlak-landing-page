export function getPublicPath(path: string) {
  const basePath = process.env.PAGES_BASE_PATH;
  return basePath ? `${basePath}${path}` : path;
}
