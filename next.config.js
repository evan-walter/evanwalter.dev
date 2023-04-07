module.exports = (phase, { defaultConfig }) => {
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    async redirects() {
      return [
        {
          source: '/gpt-3',
          destination: '/gpt-model',
          permanent: true,
        },
      ]
    },
  }
  return nextConfig
}
