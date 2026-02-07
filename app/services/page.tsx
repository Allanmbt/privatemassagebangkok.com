import { Metadata } from 'next';
import { getAllServices, getServiceCategories } from '@/utils/getServices';
import { ServicesClient } from './services-client';

export const metadata: Metadata = {
  title: 'Our Services - Premium Outcall Massage Bangkok | CBODY',
  description: 'Explore CBODY\'s curated menu of premium outcall massage services in Bangkok. From traditional Thai massage to specialized treatments, delivered to your hotel or residence.',
  openGraph: {
    title: 'Our Services - Premium Outcall Massage Bangkok | CBODY',
    description: 'Explore CBODY\'s curated menu of premium outcall massage services in Bangkok.',
    url: 'https://cbodybangkok.com/services',
  },
  alternates: {
    canonical: 'https://cbodybangkok.com/services',
  },
};

export default function ServicesPage() {
  const services = getAllServices();
  const categories = getServiceCategories();

  return <ServicesClient services={services} categories={categories} />;
}
