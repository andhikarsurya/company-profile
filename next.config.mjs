/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https', // Use 'https' for secure image URLs
        hostname: 'i.pravatar.cc', // Add the i.pravatar.cc hostname
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
