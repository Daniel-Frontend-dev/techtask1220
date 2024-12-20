/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/", // When the root URL is accessed
        destination: "/login", // Redirect to the login page
        permanent: false, // Set to false for temporary redirects
      },
    ];
  },
};

module.exports = nextConfig;