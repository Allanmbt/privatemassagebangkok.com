import { getServerSideSitemap } from 'next-sitemap'
import { getAllPosts } from '@/utils/getAllPosts'

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://alohamassagechiangmai.com'
  
  // Get all ladies and blog posts
  const ladies = getAllPosts('ladies')
  const blogs = getAllPosts('blog')
  
  const fields: Array<{
    loc: string;
    lastmod: string;
    changefreq: 'weekly' | 'monthly';
    priority: number;
  }> = []
  
  // Add ladies pages for both locales
  ladies.forEach(lady => {
    fields.push({
      loc: `${baseUrl}/ladies/${lady.slug}`,
      lastmod: new Date(lady.date).toISOString(),
      changefreq: 'weekly',
      priority: 0.8,
    })
    fields.push({
      loc: `${baseUrl}/zh/ladies/${lady.slug}`,
      lastmod: new Date(lady.date).toISOString(),
      changefreq: 'weekly',
      priority: 0.8,
    })
  })
  
  // Add blog pages for both locales
  blogs.forEach(blog => {
    fields.push({
      loc: `${baseUrl}/blog/${blog.slug}`,
      lastmod: new Date(blog.date).toISOString(),
      changefreq: 'monthly',
      priority: 0.6,
    })
    fields.push({
      loc: `${baseUrl}/zh/blog/${blog.slug}`,
      lastmod: new Date(blog.date).toISOString(),
      changefreq: 'monthly',
      priority: 0.6,
    })
  })

  return getServerSideSitemap(fields)
} 