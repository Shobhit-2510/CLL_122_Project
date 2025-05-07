/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',               // Enables static HTML export
    basePath: '/CLL_122_Project',    // Required for GitHub Pages
    assetPrefix: '/CLL_122_Project', // Required for correct asset loading
    images: {
      unoptimized: true,            // Needed if you're using <Image />
    },
  };

export default nextConfig;
