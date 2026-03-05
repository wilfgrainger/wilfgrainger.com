import type { NextConfig } from "next";

// Detect if we're building via GitHub Actions for GitHub Pages
const isGithubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubPages ? "/wilfgrainger.com" : "",
  assetPrefix: isGithubPages ? "/wilfgrainger.com/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
