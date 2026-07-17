import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const repo = "/shunei-lab-portfolio";
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isGitHubPages ? repo : "",
  assetPrefix: isGitHubPages ? repo : "",
};

export default nextConfig;
