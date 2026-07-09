// NEXT_PUBLIC_* is inlined at build time, so this resolves correctly both
// for local dev (empty base path) and the GitHub Pages build (/test0907).
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path: string) {
  return `${basePath}${path}`;
}
