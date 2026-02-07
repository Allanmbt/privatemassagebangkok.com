'use client';

import Image from 'next/image';
import Link from 'next/link';
import { PostData } from '@/utils/getAllPosts';

interface BlogClientProps {
  posts: PostData[];
}

export function BlogClient({ posts }: BlogClientProps) {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Header - 无缝衔接导航 */}
      <section className="relative bg-gradient-to-b from-[#46C5A7]/5 to-transparent pt-32 pb-16">
        <div className="container mx-auto px-6 text-center">
          <span className="text-[#46C5A7] font-bold tracking-widest text-xs uppercase mb-3 block">
            Our Blog
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-medium text-stone-800 mb-6">
            Wellness Journal
          </h1>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Insights, tips, and stories to guide you on your journey to holistic well-being.
          </p>
        </div>
      </section>

      <section className="py-20 container mx-auto px-6">
        {/* Blog Posts Grid */}
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-stone-500 text-lg">No articles found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post) => (
              <article 
                key={post.slug} 
                className="group cursor-pointer flex flex-col h-full"
              >
                <Link href={`/${post.slug}`} className="flex flex-col h-full">
                  <div className="relative overflow-hidden rounded-2xl mb-6 shadow-soft group-hover:shadow-xl transition-all duration-500">
                    <div className="relative aspect-[4/3]">
                      <Image 
                        src={post.coverImage || '/images/default-blog.jpg'} 
                        alt={post.title} 
                        fill
                        className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#46C5A7]">
                      {post.category || 'Wellness'}
                    </div>
                  </div>
                  
                  <div className="flex-grow flex flex-col">
                    <div className="text-xs text-stone-400 mb-2 flex items-center gap-2">
                      <span>{new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'long', 
                        day: 'numeric',
                        year: 'numeric' 
                      })}</span>
                      <span className="w-1 h-1 bg-stone-300 rounded-full"></span>
                      <span>{post.readTime || 5} min read</span>
                    </div>
                    
                    <h2 className="text-2xl font-serif font-medium mb-3 group-hover:text-[#46C5A7] transition-colors leading-tight text-stone-800">
                      {post.title}
                    </h2>
                    
                    <p className="text-stone-600 text-sm leading-relaxed line-clamp-3 mb-4 flex-grow">
                      {post.description}
                    </p>

                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map(tag => (
                          <span 
                            key={tag} 
                            className="text-xs px-2 py-1 bg-stone-100 text-stone-600 rounded-md"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    <div className="mt-auto pt-4 border-t border-stone-100 flex justify-between items-center">
                      <span className="text-sm font-bold text-[#46C5A7] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                        Read Article <span className="text-lg">→</span>
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

