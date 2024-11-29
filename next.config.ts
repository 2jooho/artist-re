import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  // firebase에서 받아오는 이미지 - 도메인 설정
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
};

const withImages = require('next-images');

module.exports = withImages(nextConfig);

// export default nextConfig;
