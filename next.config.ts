import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "php.leone.it",
        port: "",
        pathname: "/img/**",
      },
    ],
  },
};

export default nextConfig;
