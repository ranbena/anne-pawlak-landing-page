export function getPublicPath(path: string) {
  const basePath = process.env.NEXT_PUBLIC_PAGES_BASE_PATH;
  return basePath ? `${basePath}${path}` : path;
}
