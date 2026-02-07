import { MetadataRoute } from 'next'
import { getAllPosts } from '@/utils/getAllPosts'
import fs from 'fs'
import path from 'path'

function getFileMtime(contentType: 'blog' | 'ladies', slug: string): Date {
  try {
    const fullPath = path.join(process.cwd(), 'content', contentType, `${slug}.mdx`)
    const stat = fs.statSync(fullPath)
    return stat.mtime
  } catch {
    return new Date()
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://privatemassagebangkok.com'

  // Static pages
  const entries: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/rates`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ladies`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/booking`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/rules`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  // Blog posts -> top-level /{slug}
  const blogPosts = getAllPosts('blog')
  for (const post of blogPosts) {
    const fmUpdated = (post as any).updated as string | undefined
    const lastModified = new Date(fmUpdated || post.date || getFileMtime('blog', post.slug))
    entries.push({
      url: `${baseUrl}/${post.slug}`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    })
  }

  // Ladies profiles -> /ladies/{slug}
  const ladies = getAllPosts('ladies')
  for (const lady of ladies) {
    const fmUpdated = (lady as any).updated as string | undefined
    const lastModified = new Date(fmUpdated || lady.date || getFileMtime('ladies', lady.slug))
    entries.push({
      url: `${baseUrl}/ladies/${lady.slug}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    })
  }

  return entries
} 