import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/wilfgrainger.com",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
