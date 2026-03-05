import type { NextConfig } from "next";

const isGithubPages = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubPages ? "/wilfgrainger.com" : "",
  assetPrefix: isGithubPages ? "/wilfgrainger.com/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
