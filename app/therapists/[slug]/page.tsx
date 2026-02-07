import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getSinglePost } from '@/utils/getSinglePost';
import { getAllPosts } from '@/utils/getAllPosts';
import { TherapistDetailClient } from './therapist-detail-client';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const allTherapists = getAllPosts('therapists');
  const therapists = allTherapists.filter((therapist) => (therapist as any).listed !== false);
  return therapists.map((therapist) => ({
    slug: therapist.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const therapist = getSinglePost('therapists', slug);
  
  if (!therapist) {
    return {
      title: 'Therapist Not Found - CBODY Bangkok',
      description: 'The requested therapist profile could not be found.',
    };
  }

  const dynamicDescription = (therapist as any).description || 
    `Meet ${therapist.title} – Professional massage therapist at CBODY Bangkok with expert skills and warm personality.`;
  
  return {
    title: `${therapist.title} – CBODY Bangkok Professional Therapist`,
    description: dynamicDescription,
    openGraph: {
      title: `${therapist.title} – CBODY Bangkok Professional Therapist`,
      description: dynamicDescription,
      url: `https://cbodybangkok.com/therapists/${therapist.slug}`,
      siteName: 'CBODY Bangkok',
      images: [
        {
          url: therapist.coverImage || '/images/therapists/nicha.jpg',
          width: 1200,
          height: 630,
          alt: `${therapist.title} – CBODY Bangkok Professional Therapist`,
        },
      ],
      locale: 'en',
      type: 'profile',
    },
    alternates: {
      canonical: `https://cbodybangkok.com/therapists/${therapist.slug}`,
    },
  };
}

export default async function TherapistDetailPage({ params }: Props) {
  const { slug } = await params;
  const therapist = getSinglePost('therapists', slug);
  
  if (!therapist) {
    notFound();
  }

  return <TherapistDetailClient therapist={therapist} />;
}

