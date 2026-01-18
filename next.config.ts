import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        // optional: pathname: "/my-bucket/**",
      },
    ],
  },
};

export default nextConfig;
