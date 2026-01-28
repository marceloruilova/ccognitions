const withNextIntl = require('next-intl/plugin')(
  './i18n.ts'
);

// Helper function to generate Content Security Policy
const getCSP = () => {
  const isDev = process.env.NODE_ENV === 'development';
  const scriptSrc = isDev
    ? "'self' 'unsafe-eval' 'unsafe-inline' *.googletagmanager.com"
    : "'self' 'unsafe-inline' *.googletagmanager.com";

  return `
    default-src 'self';
    script-src ${scriptSrc};
    child-src 'none';
    style-src 'self' 'unsafe-inline';
    font-src 'self';
    img-src 'self' data:;
    connect-src 'self';
    frame-src 'self';
    object-src 'none';
    form-action 'self';
    frame-ancestors 'none';
    base-uri 'self';
    upgrade-insecure-requests;
  `.replace(/\s{2,}/g, ' ').trim();
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'Permissions-Policy',
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: 'Content-Security-Policy',
            value: getCSP(),
          }
        ],
      },
    ];
  },
};

module.exports = withNextIntl(nextConfig);
