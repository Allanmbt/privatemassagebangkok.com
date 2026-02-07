import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllPosts } from '@/utils/getAllPosts';
import { getSinglePost as getSinglePostUtil } from '@/utils/getSinglePost';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, Clock, Tag } from 'lucide-react';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = getAllPosts('blog');
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getSinglePostUtil('blog', slug);
  
  if (!post) {
    return {
      title: 'Article Not Found',
      robots: { index: false, follow: false },
    };
  }

  const imageUrl = post.coverImage 
    ? `https://cbodybangkok.com${post.coverImage}`
    : 'https://cbodybangkok.com/images/default-blog.jpg';

  return {
    title: `${post.title} | CBODY Bangkok`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://cbodybangkok.com/${slug}`,
      siteName: 'CBODY Bangkok',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: 'en',
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.updated || post.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [imageUrl],
    },
    alternates: {
      canonical: `https://cbodybangkok.com/${slug}`,
    },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getSinglePostUtil('blog', slug);
  
  if (!post) {
    notFound();
  }

  const imageUrl = post.coverImage 
    ? `https://cbodybangkok.com${post.coverImage}`
    : 'https://cbodybangkok.com/images/default-blog.jpg';

  // Get related posts
  const allPosts = getAllPosts('blog');
  const relatedPosts = allPosts
    .filter(p => p.slug !== slug)
    .slice(0, 3);

  return (
    <div className="flex flex-col bg-stone-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-stone-100">
        <div className="container mx-auto px-6 py-4 text-sm text-stone-500">
          <Link href="/" className="hover:text-[#46C5A7] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-[#46C5A7] transition-colors">Wellness Journal</Link>
          <span className="mx-2">/</span>
          <span className="text-stone-800">{post.title}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Category Badge */}
            <div className="mb-6">
              <Badge className="bg-[#46C5A7]/10 text-[#46C5A7] border-0 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">
                {post.category || 'Wellness'}
              </Badge>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-stone-900 mb-8 leading-tight">
              {post.title}
            </h1>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-stone-500 mb-10">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author || 'CBODY Wellness Team'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </time>
              </div>
              {post.readTime && (
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime} min read</span>
                </div>
              )}
            </div>

            {/* Featured Image */}
            {post.coverImage && (
              <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-xl mb-12">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Article Content */}
            <article className="prose prose-lg prose-stone max-w-none">
              <MDXRemote 
                source={post.content}
                components={{
                  h2: ({ children }) => (
                    <h2 className="text-3xl font-serif font-medium text-stone-900 mt-12 mb-6">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-2xl font-serif font-medium text-stone-800 mt-10 mb-4">
                      {children}
                    </h3>
                  ),
                  h4: ({ children }) => (
                    <h4 className="text-xl font-medium text-stone-800 mt-8 mb-3">
                      {children}
                    </h4>
                  ),
                  p: ({ children }) => (
                    <p className="text-stone-600 leading-relaxed text-lg mb-6">
                      {children}
                    </p>
                  ),
                  ul: ({ children }) => (
                    <ul className="space-y-3 my-6 text-stone-600">
                      {children}
                    </ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="space-y-3 my-6 text-stone-600 list-decimal list-inside">
                      {children}
                    </ol>
                  ),
                  li: ({ children }) => (
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-[#46C5A7] rounded-full mt-2.5 flex-shrink-0"></span>
                      <span className="flex-1">{children}</span>
                    </li>
                  ),
                  strong: ({ children }) => (
                    <strong className="text-stone-900 font-semibold">
                      {children}
                    </strong>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-[#46C5A7] pl-6 py-2 my-8 italic text-stone-700 bg-stone-50 rounded-r-lg">
                      {children}
                    </blockquote>
                  ),
                  table: ({ children }) => (
                    <div className="overflow-x-auto my-8">
                      <table className="min-w-full divide-y divide-stone-200 border border-stone-200 rounded-lg">
                        {children}
                      </table>
                    </div>
                  ),
                  thead: ({ children }) => (
                    <thead className="bg-stone-50">
                      {children}
                    </thead>
                  ),
                  th: ({ children }) => (
                    <th className="px-6 py-3 text-left text-xs font-medium text-stone-700 uppercase tracking-wider">
                      {children}
                    </th>
                  ),
                  td: ({ children }) => (
                    <td className="px-6 py-4 text-sm text-stone-600 border-t border-stone-200">
                      {children}
                    </td>
                  ),
                }}
              />
            </article>

            {/* Tags Section */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-stone-200">
                <h4 className="text-sm font-bold uppercase text-stone-400 tracking-wider mb-4">Related Topics</h4>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-4 py-2 bg-stone-100 text-stone-600 rounded-lg text-sm hover:bg-[#46C5A7]/10 hover:text-[#46C5A7] transition-colors cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-stone-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-serif font-medium text-stone-800 mb-4">
                  Related Articles
                </h2>
                <p className="text-lg text-stone-600">Continue your wellness journey</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/${relatedPost.slug}`}
                    className="group block"
                  >
                    <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                      {relatedPost.coverImage && (
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <Image
                            src={relatedPost.coverImage}
                            alt={relatedPost.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#46C5A7]">
                            {relatedPost.category || 'Wellness'}
                          </div>
                        </div>
                      )}
                      <div className="p-6 flex-grow flex flex-col">
                        <h3 className="text-xl font-serif font-medium text-stone-800 mb-3 group-hover:text-[#46C5A7] transition-colors leading-tight">
                          {relatedPost.title}
                        </h3>
                        <p className="text-stone-600 text-sm leading-relaxed line-clamp-3 flex-grow">
                          {relatedPost.description}
                        </p>
                        <div className="mt-4 pt-4 border-t border-stone-100">
                          <span className="text-sm font-bold text-[#46C5A7] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                            Read More <span className="text-lg">→</span>
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#46C5A7]/10 to-[#46C5A7]/5 rounded-3xl p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-serif font-medium text-stone-900 mb-4">
                Ready to Experience CBODY?
              </h2>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                Book your premium outcall massage and discover the ultimate relaxation in Bangkok.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-[#46C5A7] hover:bg-[#3aa88c] text-white px-8 py-6 text-base font-semibold rounded-xl shadow-lg"
                  asChild
                >
                  <a href="https://cbody.vip/" target="_blank" rel="noopener noreferrer">
                    Browse Therapists & Book
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-[#46C5A7] text-[#46C5A7] hover:bg-[#46C5A7]/10 px-8 py-6 text-base font-semibold rounded-xl"
                  asChild
                >
                  <Link href="/services">View All Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD for BlogPosting */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "@id": `https://cbodybangkok.com/${slug}#article`,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://cbodybangkok.com/${slug}`
            },
            "url": `https://cbodybangkok.com/${slug}`,
            "headline": post.title,
            "description": post.description,
            "image": {
              "@type": "ImageObject",
              "url": imageUrl,
              "width": 1200,
              "height": 630
            },
            "inLanguage": "en",
            "datePublished": post.date,
            "dateModified": post.updated || post.date,
            "author": {
              "@type": "Organization",
              "name": "CBODY Bangkok"
            },
            "publisher": {
              "@type": "Organization",
              "name": "CBODY Bangkok",
              "logo": {
                "@type": "ImageObject",
                "url": "https://cbodybangkok.com/logo.png"
              }
            },
            "isPartOf": {
              "@id": "https://cbodybangkok.com/blog/"
            },
            "keywords": post.tags ? post.tags.join(", ") : undefined
          })
        }}
      />

      {/* JSON-LD for BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "@id": `https://cbodybangkok.com/${slug}#breadcrumb`,
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://cbodybangkok.com/"
              },
              {
                "@type": "ListItem", 
                "position": 2,
                "name": "Wellness Journal",
                "item": "https://cbodybangkok.com/blog"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": post.title,
                "item": `https://cbodybangkok.com/${slug}`
              }
            ]
          })
        }}
      />
    </div>
  );
} 