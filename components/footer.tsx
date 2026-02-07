import { Facebook, Instagram, Twitter, MapPin, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="inline-block text-2xl font-serif text-white mb-6">
              CBODY
            </a>
            <p className="max-w-md leading-relaxed mb-8 text-stone-500">
              Premium outcall massage services in Bangkok. Combining Japanese minimalism with Thai hospitality. 
              We bring the sanctuary to you, ensuring privacy, hygiene, and absolute relaxation.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-stone-800 rounded-full hover:bg-[#46C5A7] hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-stone-800 rounded-full hover:bg-[#46C5A7] hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 bg-stone-800 rounded-full hover:bg-[#46C5A7] hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="hover:text-[#46C5A7] transition-colors">Services Menu</a></li>
              <li><a href="#therapists" className="hover:text-[#46C5A7] transition-colors">Our Therapists</a></li>
              <li><a href="#why-us" className="hover:text-[#46C5A7] transition-colors">Why Choose Us</a></li>
              <li><a href="#faq" className="hover:text-[#46C5A7] transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-[#46C5A7] transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-[#46C5A7] flex-shrink-0 mt-1" />
                <span>Sukhumvit Road, Watthana, Bangkok 10110</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-[#46C5A7] flex-shrink-0" />
                <a href="tel:+66834826667" className="hover:text-white">+66 83 482 6667</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-[#46C5A7] flex-shrink-0" />
                <a href="mailto:cbodyspa@gmail.com" className="hover:text-white">cbodyspa@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} CBODY Bangkok. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
