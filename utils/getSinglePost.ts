import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { PostWithContent } from './getAllPosts';

export function getSinglePost(contentType: 'ladies' | 'blog' | 'therapists', slug: string): PostWithContent | null {
  try {
    const contentDirectory = path.join(process.cwd(), 'content', contentType);
    const fullPath = path.join(contentDirectory, `${slug}.mdx`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      content,
      ...data,
    } as PostWithContent;
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

export function getRelatedPosts(
  contentType: 'ladies' | 'blog' | 'therapists', 
  currentSlug: string, 
  tags: string[] = [], 
  limit: number = 3
): PostWithContent[] {
  const contentDirectory = path.join(process.cwd(), 'content', contentType);
  
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(contentDirectory);
  
  const relatedPosts = fileNames
    .filter((name) => name.endsWith('.mdx'))
    .map((name) => {
      const slug = name.replace(/\.mdx$/, '');
      if (slug === currentSlug) return null;
      
      const fullPath = path.join(contentDirectory, name);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      const commonTags = tags.filter(tag => data.tags?.includes(tag));
      const relevanceScore = commonTags.length;

      return {
        slug,
        content,
        relevanceScore,
        ...data,
      };
    })
    .filter((post): post is NonNullable<typeof post> => post !== null)
    .sort((a, b) => b.relevanceScore - a.relevanceScore)
    .slice(0, limit)
    .map(({ relevanceScore, ...post }) => post as PostWithContent);

  return relatedPosts;
} 