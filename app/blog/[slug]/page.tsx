import { Metadata } from 'next';
import { permanentRedirect } from 'next/navigation';
import { getAllPosts } from '@/utils/getAllPosts';

 type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = getAllPosts('blog');
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    robots: { index: false, follow: false },
  };
}

export default async function LegacyBlogSlugRedirect({ params }: Props) {
  const { slug } = await params;
  permanentRedirect(`/${slug}`);
} 