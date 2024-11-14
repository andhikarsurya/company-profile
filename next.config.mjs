/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https', // Use 'https' for secure image URLs
        hostname: 'cdn.example.com', // Replace with the actual image hosting domain
        pathname: '/**', // Allow all paths under the domain
      },
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net', // Contentful image hosting domain
        pathname: '/**', // Allow all paths under the domain
      },
    ],
  },
};

export default nextConfig;
