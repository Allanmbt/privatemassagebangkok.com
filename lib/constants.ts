export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: string;
  iconType: 'oil' | 'thai' | 'deep' | 'foot';
}

export interface Review {
  id: string;
  clientName: string;
  location: string;
  text: string;
  rating: number;
}

export interface Therapist {
  id: string;
  name: string;
  specialties: string[];
  experience: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT', href: '/about' },
  { label: 'MASSAGES', href: '/massages' },
  { label: 'OUR GODDESSES', href: '/goddesses' },
  { label: 'BLOG', href: '/blog' },
  { label: 'CONTACT', href: '/contact' },
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Sensual Journey',
    description: 'An intimate introduction to our sanctuary. Gentle touch, aromatic oils, and complete attention from your chosen goddess.',
    duration: '90 / 120 Mins',
    price: 'By Inquiry',
    iconType: 'oil'
  },
  {
    id: 's2',
    title: 'Ultimate Indulgence',
    description: 'Our premium experience featuring extended sessions, advanced techniques, and the full attention of our most elite therapists.',
    duration: '120 / 180 Mins',
    price: 'By Inquiry',
    iconType: 'thai'
  },
  {
    id: 's3',
    title: 'Dual Goddess Experience',
    description: 'The pinnacle of sensual luxury. Two elite therapists work in perfect harmony, creating waves of pleasure that transcend imagination.',
    duration: '120 / 180 Mins',
    price: 'By Inquiry',
    iconType: 'deep'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    clientName: 'James M.',
    location: 'Sukhumvit',
    text: 'An experience beyond words. The sanctuary lives up to its reputation. Complete discretion, absolute luxury, and unforgettable pleasure.',
    rating: 5
  },
  {
    id: 'r2',
    clientName: 'David K.',
    location: 'Sathorn',
    text: 'I have visited many establishments in Bangkok, but nothing compares to this. The goddesses are truly elite, and the atmosphere is intoxicating.',
    rating: 5
  },
  {
    id: 'r3',
    clientName: 'Robert L.',
    location: 'Silom',
    text: 'The dual goddess experience exceeded all expectations. Two hours of pure bliss in their dark sanctuary. Worth every moment.',
    rating: 5
  }
];

export const THERAPISTS: Therapist[] = [
  {
    id: 't1',
    name: 'Goddess Luna',
    specialties: ['Sensual Touch', 'Tantric Arts'],
    experience: 'S-Class',
    image: '/images/goddesses/luna.webp'
  },
  {
    id: 't2',
    name: 'Goddess Aria',
    specialties: ['Erotic Massage', 'Body to Body'],
    experience: 'S-Class',
    image: '/images/goddesses/aria.webp'
  },
  {
    id: 't3',
    name: 'Goddess Jade',
    specialties: ['Nuru Massage', 'Dual Experience'],
    experience: 'A-Class',
    image: '/images/goddesses/jade.webp'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'How do I book an appointment?',
    answer: 'Contact us via WhatsApp, Telegram, or LINE at least 24 hours in advance. We require verification for first-time clients to ensure mutual discretion and safety.'
  },
  {
    question: 'Is this service completely private?',
    answer: 'Absolute discretion is our foundation. All communications are encrypted, no records are kept, and our goddesses are trained in complete confidentiality.'
  },
  {
    question: 'What is included in the experience?',
    answer: 'Each session includes your chosen goddess, premium oils and amenities, complete privacy, and our signature sensual massage techniques. Specific services vary by package.'
  },
  {
    question: 'Do you offer outcall services?',
    answer: 'Yes, we offer private outcall to luxury hotels and residences in central Bangkok areas including Sukhumvit, Silom, Sathorn, and Riverside.'
  },
  {
    question: 'What are your rates?',
    answer: 'Our experiences are premium and priced accordingly. Rates vary by goddess class, duration, and service type. Contact us for detailed pricing information.'
  }
];

export const SERVICE_AREAS = [
  "Sukhumvit", "Asok", "Nana", "Thonglor", "Ekkamai", "Phrom Phong",
  "Sathorn", "Silom", "Siam", "Ploenchit", "Riverside", "Wireless Road",
  "Ratchadamri", "Chidlom", "Lumphini"
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    title: "Contact Us",
    description: "Reach out via WhatsApp, Telegram, or LINE with your preferred date and time."
  },
  {
    title: "Choose Your Goddess",
    description: "Browse our elite goddesses and select your preferred experience and duration."
  },
  {
    title: "Verification",
    description: "First-time clients complete a brief verification process for mutual safety and discretion."
  },
  {
    title: "Confirmation",
    description: "Receive booking confirmation with all details. Payment is made in person upon arrival."
  },
  {
    title: "Experience",
    description: "Enter our sanctuary or welcome your goddess to your private location. Surrender to pleasure."
  }
];
