// @ts-check
const withOffline = require('next-offline')

/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'i.scdn.co', // Spotify Album Art
      'pbs.twimg.com', // Twitter Profile Picture
      'cdn.hashnode.com', // Hashnode Images
      'apod.nasa.gov', // NASA APOD
      
    ]
  },
  experimental: {
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } }
    ],
    mdxRs: true,
  },
  workboxOpts: {
    swDest: process.env.NEXT_EXPORT
      ? 'service-worker.js'
      : 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler:  'NetworkFirst',
        options: {
          cacheName: 'offlineCache',
          expiration: {
            maxEntries: 200,
          },
        },
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders
      }
    ];
  },
  async rewrites() {
    return [
      {
        source: "/ads.txt",
        destination: "/api/ads.txt",
      },
      {
        source: "/service-worker.js",
        destination: "/_next/static/service-worker.js",
      },
    ];
  },
}

module.exports = withOffline(nextConfig);

// https://nextjs.org/docs/advanced-features/security-headers
const ContentSecurityPolicy = `
default-src 'self' vercel.live;
script-src 'self' 'unsafe-eval' 'unsafe-inline' cdn.vercel-insights.com vercel.live js-na1.hs-scripts.com xyrus-code.disqus.com c.disquscdn.com google.com gstatic.com js.hs-banner.com js.hs-analytics.net js.hs-scripts.com js.hsadspixel.net js.usemessages.com js.hscollectedforms.net js.hsleadflows.net js.hsforms.net js.hs-analytics.net js.hs-scripts.com js.hs-banner.com js.hscollectedforms.net js.hs-analytics.net js.hs-scripts.com js.hs-banner.com js.hs-analytics.net launchpad-wrapper.privacymanager.io launchpad.privacymanager.io/latest;
style-src 'self' 'unsafe-inline' c.disquscdn.com; www.google.com/recaptcha
img-src * blob: data: 'self' cdn.viglink.com cdn.viglink.com *.google.com *.gstatic.com;
media-src 'none';
connect-src *;
font-src 'self';
frame-src 'self' figma.com disqus.com app.hubspot.com;
`;


const securityHeaders = [
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, '')
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload'
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()'
  }
];
