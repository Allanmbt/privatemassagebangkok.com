import { getAllPosts } from './getAllPosts';

export function getLadiesStaticParams() {
  const ladies = getAllPosts('ladies');
  return ladies.map((lady) => ({
    slug: lady.slug,
  }));
}

export function getBlogStaticParams() {
  const posts = getAllPosts('blog');
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function getLocaleStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'zh' }
  ];
}

export function getCombinedStaticParams(contentType: 'ladies' | 'blog') {
  const locales = ['en', 'zh'];
  const posts = getAllPosts(contentType);
  
  return locales.flatMap(locale =>
    posts.map(post => ({
      locale,
      slug: post.slug,
    }))
  );
} 