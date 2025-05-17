export function getPublicPath(path: string) {
  const basePath = process.env.PAGES_BASE_PATH || process.env.NEXT_PUBLIC_PAGES_BASE_PATH;
  return basePath ? `${basePath}${path}` : path;
}
