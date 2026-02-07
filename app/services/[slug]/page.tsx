import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getServiceBySlug, getAllServices } from '@/utils/getServices';
import { ServiceDetailClient } from './service-detail-client';

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const services = getAllServices();
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);
  
  if (!service) {
    return {
      title: 'Service Not Found | CBODY Bangkok',
    };
  }

  return {
    title: `${service.frontmatter.title} - Premium Outcall Massage Bangkok | CBODY`,
    description: service.frontmatter.description,
    openGraph: {
      title: `${service.frontmatter.title} | CBODY Bangkok`,
      description: service.frontmatter.description,
      url: `https://cbodybangkok.com/services/${params.slug}`,
      images: [
        {
          url: service.frontmatter.image,
          width: 1200,
          height: 630,
          alt: service.frontmatter.title,
        },
      ],
    },
    alternates: {
      canonical: `https://cbodybangkok.com/services/${params.slug}`,
    },
  };
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailClient service={service} />;
}
