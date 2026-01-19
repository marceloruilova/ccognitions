const { withSentryConfig } = require("@sentry/nextjs");
const withNextIntl = require('next-intl/plugin')(
  './i18n.ts'
);

// Helper function to generate Content Security Policy
// For a starting point, see: https://nextjs.org/docs/advanced-features/security-headers#content-security-policy
const getCSP = () => {
  const isDev = process.env.NODE_ENV === 'development';
  // In development, we need to allow a few more things for hot-reloading and browser extensions.
  const scriptSrc = isDev
    ? "'self' 'unsafe-eval' 'unsafe-inline' *.googletagmanager.com"
    : "'self' 'unsafe-inline' *.googletagmanager.com"; // unsafe-inline is often needed for styles, but try to remove it.

  return `
    default-src 'self';
    script-src ${scriptSrc};
    child-src 'none';
    style-src 'self' 'unsafe-inline';
    font-src 'self';
    img-src 'self' data:;
    connect-src 'self' *.sentry.io;
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

const sentryConfig = withNextIntl(nextConfig);

module.exports = withSentryConfig(
  sentryConfig,
  {
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options

    // Suppresses source map uploading logs during build
    silent: true,
    org: process.env.SENTRY_ORG,
    project: process.env.SENTRY_PROJECT,
  },
  {
    // For all available options, see:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

    // Upload a larger set of source maps for better stack traces in Sentry.
    widenClientFileUpload: true,

    // Transpiles SDK to be compatible with IE11 (increases bundle size)
    transpileClientSDK: true,

    // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
    // This can increase your server load as well as your hosting bill.
    // Note: Check that the configured route will not match with any Next.js page routes
    tunnelRoute: "/monitoring",

    // Hides source maps from generated client bundles
    hideSourceMaps: true,

    // Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true,
  }
);
