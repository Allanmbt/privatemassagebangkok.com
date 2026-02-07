export const translations = {
  site: {
    title: "Private Massage Bangkok | Erotic & Sensual Massage Experience",
    description: "Bangkok's premier private massage sanctuary. Experience intimate sensual massage with elite therapists in a luxurious dark ambient setting."
  },
  nav: {
    home: "Home",
    about: "About",
    massages: "Massages",
    goddesses: "Our Goddesses",
    blog: "Blog",
    contact: "Contact"
  },
  home: {
    hero: {
      title: "Private Massage Bangkok",
      subtitle: "Where Shadows Meet Desire",
      description: "Bangkok's most exclusive sanctuary for the discerning gentleman. By appointment only.",
      cta: "Book Your Experience"
    },
    services: {
      title: "Our Signature Experiences",
      subtitle: "Curated sensual journeys in complete privacy"
    },
    goddesses: {
      title: "Our Goddesses",
      subtitle: "Elite therapists trained in the art of pleasure"
    },
    testimonials: {
      title: "Whispers from the Shadows",
      subtitle: "Discreet testimonials from our patrons"
    }
  },
  services: {
    title: "Our Massages",
    subtitle: "Intimate experiences crafted for the discerning gentleman",
    hero: {
      title: "Sensual Massage Bangkok",
      subtitle: "In Complete Privacy",
      description: "Experience Bangkok's most exclusive erotic massage sanctuary featuring elite therapists and luxurious dark ambient settings"
    },
    whatWeOffer: {
      title: "What We Offer",
      description: "At Private Massage Bangkok, we specialize in intimate sensual experiences that transcend ordinary massage. Our sanctuary offers complete privacy, elite therapists, and an atmosphere designed for pleasure."
    },
    signature: {
      title: "Signature Experiences",
      description: "Our curated massage experiences combine traditional techniques with sensual artistry, creating unforgettable moments in our luxurious dark sanctuary.",
      packageA: {
        title: "Sensual Journey",
        description: "An intimate introduction to our sanctuary. Gentle touch, aromatic oils, and complete attention from your chosen goddess."
      },
      packageB: {
        title: "Ultimate Indulgence", 
        description: "Our premium experience featuring extended sessions, advanced techniques, and the full attention of our most elite therapists."
      },
      unique: "Why Choose Private Massage Bangkok:"
    },
    fourHands: {
      title: "Dual Goddess Experience",
      description: "The pinnacle of sensual luxury. Two elite therapists work in perfect harmony, creating waves of pleasure that transcend imagination. This premium service is available by special appointment only."
    },
    incall: {
      title: "At Our Sanctuary",
      description: "Visit our exclusive private location in Bangkok. Our luxurious rooms feature dark ambient lighting, premium amenities, and absolute discretion."
    },
    outcall: {
      title: "Private Outcall", 
      description: "Experience our sanctuary service in the privacy of your hotel or residence. Our goddesses arrive discreetly with everything needed for your perfect experience."
    }
  },
  goddesses: {
    title: "Our Goddesses",
    subtitle: "Elite therapists trained in the art of pleasure",
    viewProfile: "View Profile",
    book: "Book Experience"
  },
  booking: {
    title: "Book Your Experience",
    subtitle: "Reserve your private sanctuary session",
    form: {
      name: "Your Name",
      phone: "Phone Number",
      service: "Select Experience",
      goddess: "Preferred Goddess",
      date: "Preferred Date",
      time: "Preferred Time",
      message: "Special Requests",
      submit: "Request Booking"
    }
  },
  contact: {
    title: "Contact Us",
    subtitle: "Discreet inquiries welcome",
    address: "Private Location, Bangkok, Thailand",
    hours: "Daily 14:00 - 02:00 (By Appointment Only)",
    phone: "+66 XX XXX XXXX",
    email: "contact@privatemassagebangkok.com",
    line: "Line ID: @privatemassagebkk",
    wechat: "WeChat ID: privatemassagebkk"
  },
  footer: {
    tagline: "Where privacy meets perfection",
    copyright: "© 2026 Private Massage Bangkok. All rights reserved."
  },
  common: {
    readMore: "Read More",
    bookNow: "Book Now",
    learnMore: "Learn More",
    viewAll: "View All",
    close: "Close",
    loading: "Loading...",
    error: "Something went wrong"
  }
};

// Helper function to access translations similar to useTranslations
export function t(key: string): string {
  const keys = key.split('.');
  let value: any = translations;
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
} 