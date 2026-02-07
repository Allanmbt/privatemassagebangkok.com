import { Metadata } from 'next';
import { getAllPosts } from '@/utils/getAllPosts';
import { BlogClient } from './blog-client';

export const metadata: Metadata = {
  title: 'Wellness Journal - CBODY Bangkok',
  description: 'Insights, tips, and stories to guide you on your journey to holistic well-being. Explore massage techniques, wellness advice, and self-care practices.',
  openGraph: {
    title: 'Wellness Journal - CBODY Bangkok',
    description: 'Insights, tips, and stories to guide you on your journey to holistic well-being.',
    url: 'https://cbodybangkok.com/blog',
  },
  alternates: {
    canonical: 'https://cbodybangkok.com/blog',
  },
};

export default function BlogPage() {
  const posts = getAllPosts('blog');

  return <BlogClient posts={posts} />;
} 