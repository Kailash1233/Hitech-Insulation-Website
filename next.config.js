/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export configuration (uncomment for static hosting)
  // output: 'export',
  
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  
  // PoweredBy header removal for security
  poweredByHeader: false,
  
  // Image optimization configuration
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Compiler options
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Experimental features (Next.js 15)
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  
  // Headers for security and performance
  async headers() {
    const staticAssetCache = {
      key: 'Cache-Control',
      value: 'public, max-age=2592000, stale-while-revalidate=86400',
    };
    return [
      // Only image files — /products/<slug> pages share this prefix and must NOT be cached long.
      {
        source: '/:dir(products|hero|partners)/:file([^/]+\\.(?:jpg|jpeg|png|webp|avif|svg))',
        headers: [staticAssetCache],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          }
        ],
      },
    ];
  },
  
  // Permanent (301/308) redirects — consolidate ranking signals on one canonical URL.
  async redirects() {
    return [
      // Apex → www. Prefer doing this in Cloudflare (Rules → Redirect Rules) as well, so it
      // happens at the edge; this is a safety net if the request reaches the app.
      {
        source: "/:path*",
        has: [{ type: "host", value: "hitechinsulation.in" }],
        destination: "https://www.hitechinsulation.in/:path*",
        permanent: true,
      },
      // Old / removed product URLs that may still be indexed or linked.
      { source: "/products/pressboard-3mm", destination: "/products/pressboard", permanent: true },
      { source: "/products/fr4-epoxy-sheet", destination: "/products/g10-epoxy-sheet", permanent: true },
      { source: "/products/crepe-paper", destination: "/products/crepe-paper-range", permanent: true },
      { source: "/products/transformer-kits", destination: "/products/transformer-insulation-kits", permanent: true },
      { source: "/products/machined-pressboard-components", destination: "/pressboard", permanent: true },
      { source: "/products/moulded-component-types", destination: "/products/moulded-pressboard-components", permanent: true },
      { source: "/products/machined-component-types", destination: "/pressboard", permanent: true },
      { source: "/products/fiberglass-tubes", destination: "/products/frp-tubes", permanent: true },
      { source: "/products/epoxy-rods", destination: "/products/frp-rods", permanent: true },
      { source: "/products/cotton-phenolic", destination: "/products/paper-phenolic", permanent: true },
      { source: "/products/syndanio-sheet", destination: "/products/syndanio-sheets", permanent: true },
      { source: "/products/hylam-sheets", destination: "/products/paper-phenolic", permanent: true },
      { source: "/products/frp-products", destination: "/products/frp-components", permanent: true },
      { source: "/products/transformer-insulation-kit", destination: "/products/transformer-insulation-kits", permanent: true },
      { source: "/pre-compressed-pressboard", destination: "/products/pre-compressed-pressboard", permanent: true },
      { source: "/admin/:path*", destination: "/", permanent: true },
    ];
  },
};

module.exports = nextConfig;
