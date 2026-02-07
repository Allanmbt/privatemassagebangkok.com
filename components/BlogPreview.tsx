import { SectionHeader } from './SectionHeader';
import Image from 'next/image';

export const BlogPreview = () => {
  const posts = [
    {
      title: "The Benefits of Deep Tissue After Flying",
      date: "Oct 12, 2023",
      excerpt: "Why specialized pressure is essential for combating jet lag and circulation issues.",
      image: "https://picsum.photos/id/129/400/300"
    },
    {
      title: "Understanding Thai Massage Techniques",
      date: "Sep 28, 2023",
      excerpt: "A deep dive into the history and benefits of the 'lazy man's yoga'.",
      image: "https://picsum.photos/id/133/400/300"
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-stone-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
                 <span className="uppercase tracking-[0.2em] text-xs font-semibold mb-3 block text-[#46C5A7]">
                    Journal
                </span>
                <h2 className="text-4xl md:text-5xl font-serif text-stone-800">
                    Wellness Insights
                </h2>
            </div>
            <a href="#" className="hidden md:block text-[#46C5A7] border-b border-[#46C5A7] pb-1 hover:text-[#39B59A] transition-colors">
                Read all articles
            </a>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {posts.map((post, i) => (
            <article key={i} className="group cursor-pointer">
              <div className="overflow-hidden rounded-sm mb-6 relative h-64">
                <Image 
                  src={post.image} 
                  alt={post.title}
                  fill
                  className="object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-4 text-xs text-stone-400 mb-3 uppercase tracking-wider">
                <span>{post.date}</span>
                <span className="w-8 h-[1px] bg-stone-300"></span>
                <span>Wellness</span>
              </div>
              <h3 className="text-2xl font-serif text-stone-800 mb-3 group-hover:text-[#46C5A7] transition-colors">
                {post.title}
              </h3>
              <p className="text-stone-500 leading-relaxed">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
        
         <a href="#" className="md:hidden mt-8 inline-block text-[#46C5A7] border-b border-[#46C5A7] pb-1">
            Read all articles
        </a>
      </div>
    </section>
  );
};
