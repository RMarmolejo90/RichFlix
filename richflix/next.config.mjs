/**  @type {import('next').NextConfig} */

const nextConfig = {
  basePath: "/richflix",
  output: "export",
  images: {
    domains: ["image.tmdb.org"],
  },
};

export default nextConfig;
