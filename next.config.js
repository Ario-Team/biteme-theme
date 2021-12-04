const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
module.exports = {
  withBundleAnalyzer,
  reactStrictMode: true,
  swcMinify: false,
  images: {
    domains: ["kalanidhithemes.com"],
  },
  generateBuildId: () => "build",
};
