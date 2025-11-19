import type { NextConfig } from "next";

// Detect repository name from environment for GitHub Pages (e.g., OWNER/REPO)
// You can set NEXT_PUBLIC_GITHUB_PAGES_REPO in the workflow or rely on the GitHub env vars.
const repoName = process.env.NEXT_PUBLIC_GITHUB_PAGES_REPO || process.env.GITHUB_REPOSITORY?.split("/")[1];
const isProd = process.env.NODE_ENV === "production" && !!repoName;

const nextConfig: NextConfig = {
  // Export a static site suitable for GitHub Pages hosting
  output: "export",
  // Use a basePath when deployed so routes resolve under /REPO_NAME
  basePath: isProd ? `/${repoName}` : undefined,
  assetPrefix: isProd ? `/${repoName}/` : undefined,
  // Ensure trailing slash for relative asset paths on Pages
  trailingSlash: true,
  // Opt out of image optimization (not supported in static export) - can use next/image with unoptimized
  images: { unoptimized: true },
};

export default nextConfig;
