import type { NextConfig } from "next";

// GitHub Pages serves this project at https://<user>.github.io/test0907/,
// so the workflow sets GITHUB_PAGES=true to prefix all paths/assets.
// Local dev and `npm run build` without that env var stay at the root path.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGithubPages ? "/test0907" : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
