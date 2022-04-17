/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['default', 'en', 'nl'],
    defaultLocale: 'default',
  },
  trailingSlash: true,
  compiler: {
    styledComponents: true,
  },
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    register: true,
    scope: '/',
    dest: 'public',
    swSrc: 'service-worker.js',
  },
};

module.exports = nextConfig;
