/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true, // Enable Gzip compression
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com", // Allow images from Cloudinary
      },
      {
        protocol: "http",
        hostname: "localhost", // Allow images from localhost
      },
      {
        protocol: "https",
        hostname: "urido.co.uk", // Add your domain here
      },
    ],
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: "/(.*).(js|css|jpg|png|webp|svg|gif|ico)", // Match static assets
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // Cache for 1 year
          },
        ],
      },
    ];
  },
};

export default nextConfig;
