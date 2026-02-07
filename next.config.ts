import createMDX from '@next/mdx'
import type { NextConfig } from "next";

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

const nextConfig: NextConfig = {
  eslint: {
    // 不要在生产构建时因为 ESLint 报错而 fail
    ignoreDuringBuilds: true,
  },
  typescript: {
    // 不要在生产构建时因为 TS 报错而 fail
    ignoreBuildErrors: true,
  },
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
  images: {
    unoptimized: true
  },
  // Remove static export for sitemap to work
  // output: 'export',
  trailingSlash: true,
  // distDir: 'out'
};

export default withMDX(nextConfig);
