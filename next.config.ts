import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/pise-bosquemar",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
