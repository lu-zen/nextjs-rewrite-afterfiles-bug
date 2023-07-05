/** @type {import("next").NextConfig} */
module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return {
      afterFiles: [{
        source: '/:path*',
        destination: '/rewritten/:path*',
        has: [
          { type: 'host', value: 'localhost' }
        ]
      }]
    }
  }
}
