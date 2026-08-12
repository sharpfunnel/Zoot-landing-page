import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next 16 restricts optimization to an allowlist. 90 keeps the small UI
    // text in the dashboard screenshot legible; 75 is the framework default.
    qualities: [75, 90],
  },
};

export default nextConfig;
