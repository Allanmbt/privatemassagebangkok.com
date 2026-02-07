import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const servicesDirectory = path.join(process.cwd(), 'content/services');

export interface ServiceFrontmatter {
  title: string;
  description: string;
  category: string;
  duration: string;
  price: string;
  image: string;
  code: string;
  iconType: 'oil' | 'thai' | 'deep' | 'foot';
  featured: boolean;
  order: number;
  tag?: 'Popular' | 'New' | 'Top Rated';
}

export interface Service {
  slug: string;
  frontmatter: ServiceFrontmatter;
  content: string;
}

export function getAllServices(): Service[] {
  const fileNames = fs.readdirSync(servicesDirectory);
  const services = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(servicesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        frontmatter: data as ServiceFrontmatter,
        content,
      };
    });

  // Sort by order field
  return services.sort((a, b) => a.frontmatter.order - b.frontmatter.order);
}

export function getServiceBySlug(slug: string): Service | null {
  try {
    const fullPath = path.join(servicesDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      frontmatter: data as ServiceFrontmatter,
      content,
    };
  } catch (error) {
    return null;
  }
}

export function getServicesByCategory(category: string): Service[] {
  const allServices = getAllServices();
  if (category === 'All') return allServices;
  return allServices.filter((service) => service.frontmatter.category === category);
}

export function getFeaturedServices(): Service[] {
  const allServices = getAllServices();
  return allServices.filter((service) => service.frontmatter.featured);
}

export function getServiceCategories(): string[] {
  const allServices = getAllServices();
  const categories = new Set(allServices.map((service) => service.frontmatter.category));
  return ['All', ...Array.from(categories)];
}
