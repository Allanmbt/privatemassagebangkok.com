import { Metadata } from 'next';
import { getAllPosts } from '@/utils/getAllPosts';
import { TherapistsClient } from './therapists-client';

export const metadata: Metadata = {
  title: 'Our Therapists - CBODY Bangkok',
  description: 'Meet our skilled and professional massage therapists at CBODY Bangkok. Expert therapists offering premium outcall massage services.',
  openGraph: {
    title: 'Our Therapists - CBODY Bangkok',
    description: 'Meet our skilled and professional massage therapists at CBODY Bangkok.',
    url: 'https://cbodybangkok.com/therapists',
    siteName: 'CBODY Bangkok',
    images: [
      {
        url: '/images/therapists/nicha.jpg',
        width: 1200,
        height: 630,
        alt: 'CBODY Therapists - Professional Massage Therapists',
      },
    ],
    locale: 'en',
    type: 'website',
  },
  alternates: {
    canonical: 'https://cbodybangkok.com/therapists',
  },
};

export default function TherapistsPage() {
  const allTherapists = getAllPosts('therapists');
  const therapists = allTherapists.filter((therapist) => (therapist as any).listed !== false);

  return <TherapistsClient therapists={therapists} />;
}
