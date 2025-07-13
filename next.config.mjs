/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true, 
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        },
      {
        protocol: "http",
        hostname: "localhost", 
        },
      {
        protocol: "https",
        hostname: "urido.co.uk",
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
