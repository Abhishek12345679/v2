/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "i.scdn.co",
      "twitter.com",
      "avatars.githubusercontent.com",
      "www.zhenghao.io",
      "github.com",
    ],
  },
};

module.exports = nextConfig;
