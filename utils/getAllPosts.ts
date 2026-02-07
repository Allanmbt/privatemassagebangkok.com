import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface PostData {
  slug: string;
  title: string;
  description: string;
  date: string; // Published date
  updated?: string; // Last updated date
  coverImage?: string;
  tags?: string[];
  author?: string;
  readTime?: number;
  category?: string;
  sort?: number; // Sorting priority, higher number = higher priority, default 0
  // For ladies
  age?: number;
  height?: string;
  weight?: string;
  languages?: string[];
  services?: string[];
  available?: boolean;
  rating?: number;
}

export interface PostWithContent extends PostData {
  content: string;
}

export function getAllPosts(contentType: 'ladies' | 'blog' | 'therapists'): PostData[] {
  const contentDirectory = path.join(process.cwd(), 'content', contentType);
  
  // Check if directory exists
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(contentDirectory);
  
  const posts = fileNames
    .filter((name) => name.endsWith('.mdx'))
    .map((name) => {
      const slug = name.replace(/\.mdx$/, '');
      const fullPath = path.join(contentDirectory, name);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        ...data,
      } as PostData;
    })
    .sort((a, b) => {
      // First sort by sort field (higher number first), then by date (newest first)
      const sortA = a.sort || 0;
      const sortB = b.sort || 0;
      
      if (sortA !== sortB) {
        return sortB - sortA; // Higher sort value first
      }
      
      // If sort values are equal, sort by date
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  return posts;
}

export function getPostsByTag(contentType: 'ladies' | 'blog' | 'therapists', tag: string): PostData[] {
  const allPosts = getAllPosts(contentType);
  return allPosts.filter(post => post.tags?.includes(tag));
}

export function getFeaturedPosts(contentType: 'ladies' | 'blog' | 'therapists', limit: number = 3): PostData[] {
  const allPosts = getAllPosts(contentType);
  return allPosts.slice(0, limit);
} 