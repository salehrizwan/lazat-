import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-b border-gray-800 pb-12">
          
          {/* Brand */}
          <div>
            <span className="font-serif text-3xl font-bold tracking-tight text-white mb-6 block">
              Lazat <span className="text-brand-gold">Restaurant</span>
            </span>
            <p className="text-gray-400 font-sans leading-relaxed mb-6">
              Har Lazzat, Ek Hi Chhat Ke Neeche. Gujrat's premier destination for fine dining, exceptional hospitality, and unforgettable flavors.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-red transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-red transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:pl-12">
            <h4 className="text-lg font-bold font-serif mb-6 text-brand-gold">Explore</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Our Menu</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Reservations</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-lg font-bold font-serif mb-6 text-brand-gold">Contact</h4>
            <ul className="space-y-4 text-gray-400">
              <li>Abdul Mall, GT Road,</li>
              <li>River Garden Housing Scheme,</li>
              <li>Gujrat, 50700, Pakistan</li>
              <li className="pt-2 text-white font-bold">+92 316 4578578</li>
              <li>Open Daily: 12:00 PM – 11:00 PM</li>
            </ul>
          </div>

        </div>
        
        <div className="text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Lazat Restaurant Gujrat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
