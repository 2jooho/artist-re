import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  // cloudfront에서 가져오는 이미지 url 설정
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd10g3jdogj131g.cloudfront.net',
        port: '',
        pathname: '/star/**',  // 특정 경로 패턴만 허용
      },
    ],
  },
};

const withImages = require('next-images');

module.exports = withImages(nextConfig);

// export default nextConfig;
