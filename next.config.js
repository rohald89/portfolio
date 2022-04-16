/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['default', 'en', 'nl'],
    defaultLocale: 'default',
  },
  trailingSlash: true,
};

module.exports = nextConfig;
