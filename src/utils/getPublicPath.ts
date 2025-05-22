export function getPublicPath(path: string) {
  // process.env.PAGES_BASE_PATH - for server components
  // process.env.NEXT_PUBLIC_PAGES_BASE_PATH - for client components
  const basePath = process.env.PAGES_BASE_PATH || process.env.NEXT_PUBLIC_PAGES_BASE_PATH;
  return basePath ? `${basePath}${path}` : path;
}
